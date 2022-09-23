import style from "../Details/Details.module.css";

import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AurhContext";
import { deleteComment, getAllComments, likeComment, dislikeComment } from "../../service/commentsService";
import { ErrorContext } from "../../context/ErrorContext";
import { createComment } from '../../service/commentsService';


function Comment({ tripId, owner }) {
    const [comments, setComments] = useState([]);
    const [commentValidator, setCommentValidator] = useState({
        text: false
    });
    const [commentValue, setCommentValue] = useState({
        text: "",
    });

    const Navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const { setError } = useContext(ErrorContext);
    let isIsCommentMine;

    useEffect(() => {
        getAllComments(tripId)
            .then(result => {
                setComments(result);
            })
            .catch(err => {
                setError(err);
                Navigate('/404-page-not-found');
            })
    }, []);

    function onchangeFunctionsHandler(e) {
        commentOnChangeHandler(e);
        commentValueValidator(e);
    };

    function commentOnChangeHandler(e) {
        setCommentValue(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    function commentValueValidator(e) {
        if (e.target.name === 'text' && e.target.value.length >= 5) {
            setCommentValidator(state => ({ ...state, [e.target.name]: true }));
        } else {
            setCommentValidator(state => ({ ...state, [e.target.name]: false }));
        };
    };

    function createCommentSubmit(e) {
        e.preventDefault();
        const finalComment = {
            fullName: user.fullName,
            ...commentValue,
            _ownerId: user._id
        };

        createComment(tripId, finalComment)
            .then(result => {
                setComments(state => ([...state, result]));
                setCommentValue({
                    text: "",
                });
                setCommentValidator({
                    text: false
                })
            })
            .catch(err => {
                setError(err);
            });
    };

    function commentLkeHandler(e) {
        let isLiked = e.target.getAttribute('set_like');
        if (isLiked === 'false') {
            likeComment(e.target.id)
                .then(result => {
                    let updatedState = comments.map(comment => {
                        if (comment._id == result._id) {
                            comment.likes.push(user._id);
                        };
                        return comment;
                    });
                    setComments(updatedState);
                }).catch(err => {
                    setError(err);
                });
        } else {
            dislikeComment(e.target.id)
                .then(result => {
                    let updatedState = comments.map((comment, i) => {
                        if (comment._id == result._id) {
                            let newLikes = comment.likes.filter(obj => obj !== user._id);
                            comment.likes = newLikes;
                        };
                        return comment;
                    });
                    setComments(updatedState);
                }).catch(err => {
                    setError(err);
                });
        };
    };

    function commentDeleteHandler(e) {
        const isConfirm = window.confirm('Are yu sure you want to delete this post?');
        if (isConfirm) {
            deleteComment(e.target.id)
                .then((result) => {
                    let updatedState = [];
                    comments.forEach(x => {
                        if (x._id != result._id) {
                            updatedState.push(x);
                        };
                    });
                    setComments(updatedState);
                }).catch(err => {
                    setError(err);
                });
        };
    };

    const isCommentValid = Object.values(commentValidator).some(x => x === false);

    return (
        <>
            <section className={style["comments-section"]}>
                {
                    Object.values(user).length > 0 ?
                        <>
                            <h4>Add Comment</h4>
                            <form className={style["comments-form"]} onSubmit={createCommentSubmit}>
                                <div className={style["comment-container"]}>
                                    <label htmlFor="text">Comment: </label>
                                    <textarea
                                        type="text"
                                        id="text"
                                        name='text'
                                        onChange={onchangeFunctionsHandler}
                                        value={commentValue.text}
                                    />
                                    {isCommentValid
                                        ?
                                        <div className={style["create_error-box"]}>It must be at least 5 characters</div>
                                        : ""
                                    }
                                </div>
                                <div className={`${style["comment-container"]} ${style["submit-button"]}`}>
                                    {isCommentValid ?
                                        <input
                                            type="submit"
                                            defaultValue="Comment"
                                            className={style["submit-button"]}
                                            style={{
                                                background: "rgba(255, 255, 255, 0.28)",
                                                fontWeight: "bold",
                                                color: "darkgray"
                                            }}
                                            disabled
                                        />
                                        :
                                        <input
                                            type="submit"
                                            defaultValue="Comment"
                                            className={style["submit-button"]}
                                        />
                                    }
                                </div>
                            </form>
                        </>
                        : ""
                }
            </section>
            <section className={style["comments-preview"]}>
                <div className={style["comment-title"]}>
                    <h4 className={style["title"]}>Comments</h4>
                </div>
                {comments.map(comment => {
                    const isILikeIt = comment.likes.some(x => x == user._id);
                    comment.isILikeIt = (isILikeIt).toString()
                    isIsCommentMine = comment._ownerId == user._id;
                    return (
                        <div className={style["comment-box"]} key={comment._id}>
                            <span className={style["comment-likes"]}>{comment.likes.length} <i className="fa-solid fa-thumbs-up" style={{ width: '50px' }} /></span>
                            <span className={style["comment-author"]}>{comment.fullName}</span>
                            <span className={style["comment-value"]}>{comment.text}</span>
                            {Object.values(user).length > 0 ?

                                <div className={style["comment-buttons"]}>
                                    {!isIsCommentMine ?
                                        isILikeIt ?
                                            <button className={style["comment-like"]} onClick={commentLkeHandler} name='like' id={comment._id} set_like={comment.isILikeIt}>Liked </button>
                                            :
                                            <button className={style["comment-like"]} onClick={commentLkeHandler} name='like' id={comment._id} set_like={comment.isILikeIt}>Like</button>
                                        : <button className={style["comment-delete"]} onClick={commentDeleteHandler} name='dislike' id={comment._id}>Delete</button>
                                    }
                                </div>
                                : ""
                            }
                        </div>
                    );
                })}
            </section>
        </>
    );
}

export default Comment;