import style from "./SpinnerText.module.css"
function SpinnerText() {
    return (
        <span className={style["loader"]}>Loading</span>
    );
}

export default SpinnerText;