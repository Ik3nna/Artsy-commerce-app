import React from "react";
import styles from "./creators.module.css";
import Carousel from 'react-bootstrap/Carousel';

function Creators () {
    return(
        <section className={styles.content}>
            <article>
                <h2>TOP CREATORS OF <br />THE WEEK</h2>

                <div>
                    <img src="/assets/Loader-2.png" alt="loader" />

                    <div>
                        <div>Editorials</div>

                        <div>Fashion</div>

                        <div>Lifestyle</div>

                        <div>Blueprint</div>
                    </div>
                </div>
            </article>

            <article>
                <p>
                    “Everything always looked better in black and white. 
                    Everything always  as if it were the first time; there’s 
                    always more people in a black and white photograph. 
                    It just makes it seem that there were more people at a gig, more 
                    people at a football match, than with colour photography. 
                    Everything looks more exciting.”– Jack Lowden
                </p>

                <div className={styles.circa}>CIRCA</div>

                <div className={styles.nmb}>1985</div>

                <Carousel fade indicators={false} controls={false} className={styles.carousel}>
                    <Carousel.Item>
                        <img src="/assets/slide-1.svg" alt="First slide" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="/assets/slide-2.svg" alt="Second slide" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="/assets/slide-3.svg" alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </article>
        </section>
    );
}

export default Creators;