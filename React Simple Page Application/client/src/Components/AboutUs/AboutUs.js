import style from './AboutUs.module.css';
import fishingCollage from '../../Resources/img/fishing-colage.png'

function AboutUs() {
    return (
        <section className={style["about-us-container"]}>
            <section className={style["about-us-info"]}>
                <div className={style["about-us-text-container"]}>
                    <h1 className={style["about-us-title"]}>About us</h1>
                    <h2 className={style["about-us-title"]}>Company information</h2>
                    <p className={style["about-us-text"]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam
                        deserunt in animi quasi voluptatem assumenda non dignissimos?
                        Perspiciatis omnis accusantium mollitia veniam, et sit explicabo autem
                        repellat illo optio iure dolorum commodi magni libero molestiae impedit
                        temporibus ab repellendus. Nostrum est impedit facilis labore. Culpa
                        quos tempora at placeat ut! Non, veritatis quia? Blanditiis tempora
                        neque voluptatibus tenetur suscipit rem quis doloremque necessitatibus
                        iste magni voluptates deserunt excepturi perferendis, soluta cumque,
                        laborum similique ullam possimus asperiores sed architecto ducimus earum
                        labore! Iste reprehenderit vero dolorem, unde officia distinctio fugiat
                        nostrum omnis autem fuga officiis blanditiis soluta quo at veniam
                        sapiente beatae incidunt dolor mollitia maiores velit atque esse
                        dolorum? Ad at quam, saepe voluptate aut aperiam autem quidem. Eos
                        similique libero odit dignissimos soluta id facere blanditiis cumque
                        numquam!
                    </p>
                    {/* <button class="about-us-button">go to home page</button> */}
                </div>
                <img
                    src={fishingCollage}
                    alt="Fishing destination collage"
                    className={style["about-us-firstImage"]}
                />
            </section>
        </section>
    );
}

export default AboutUs;