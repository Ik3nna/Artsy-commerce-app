import React from "react";
import styles from "./products.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Products () {

    return(
        <section className={styles.content}>
            <h2>Featured products</h2><hr />

            <section>
                <article className={styles.imgLink}>
                    <img src="/assets/Rectangle 299.svg" alt="products" />

                    <div className={styles.overlay}>
                        <div className={styles.sh}>
                            <p>View product</p>

                            <Link to="/place" className={styles.place}>
                                <BsArrowRight size="30px" />
                            </Link>
                        </div>
                    </div>
                </article>

                <article>
                    <h3>The boolean egyptian</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor 
                        rhoncus dolor pur
                    </p>

                    <div className={styles.container}>
                        <div className={styles.imgContainer}>
                            <img src="/assets/Ellipse 18.png" alt="ellipse-18" />
                            <img src="/assets/Ellipse 17.png" alt="ellipse-17" />
                            <img src="/assets/Ellipse 16.png" alt="ellipse-16" />
                            <img src="/assets/Ellipse 15.png" alt="ellipse-15" />
                            <img src="/assets/Ellipse 14.png" alt="ellipse-14" />
                        </div>

                        <p>64 major creators</p>

                        <Link to="/place" className={styles.place}>
                            <BsArrowRight size="30px" />
                        </Link>
                    </div>
                </article>
            </section> <hr />

            <section>
                <article>
                    <h3>The boolean egyptian</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor 
                        rhoncus dolor pur
                    </p>

                    <div className={styles.container}>
                        <div className={styles.imgContainer}>
                            <img src="/assets/Ellipse 18.png" alt="ellipse-18" />
                            <img src="/assets/Ellipse 17.png" alt="ellipse-17" />
                            <img src="/assets/Ellipse 16.png" alt="ellipse-16" />
                            <img src="/assets/Ellipse 15.png" alt="ellipse-15" />
                            <img src="/assets/Ellipse 14.png" alt="ellipse-14" />
                        </div>

                        <p>64 major creators</p>

                        <Link to="/place" className={styles.place}>
                            <BsArrowRight size="30px" />
                        </Link>
                    </div>
                </article>

                <article className={styles.imgLink}>
                    <img src="/assets/Rectangle 299 (1).svg" alt="products" />

                    <div className={styles.overlay}>
                        <div className={styles.sh}>
                            <p>View product</p>

                            <Link to="/place" className={styles.place}>
                                <BsArrowRight size="30px" />
                            </Link>
                        </div>
                    </div>
                </article>
            </section> <hr />

            <section>
                <article className={styles.imgLink}>
                    <img src="/assets/Rectangle 299 (2).svg" alt="products" />

                    <div className={styles.overlay}>
                        <div className={styles.sh}>
                            <p>View product</p>

                            <Link to="/place" className={styles.place}>
                                <BsArrowRight size="30px" />
                            </Link>
                        </div>
                    </div>
                </article>

                <article>
                    <h3>The boolean egyptian</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor 
                        rhoncus dolor pur
                    </p>

                    <div className={styles.container}>
                        <div className={styles.imgContainer}>
                            <img src="/assets/Ellipse 18.png" alt="ellipse-18" />
                            <img src="/assets/Ellipse 17.png" alt="ellipse-17" />
                            <img src="/assets/Ellipse 16.png" alt="ellipse-16" />
                            <img src="/assets/Ellipse 15.png" alt="ellipse-15" />
                            <img src="/assets/Ellipse 14.png" alt="ellipse-14" />
                        </div>

                        <p>64 major creators</p>

                        <Link to="/place" className={styles.place}>
                            <BsArrowRight size="30px" />
                        </Link>
                    </div>
                </article>
            </section>
        </section>
    );
}

export default Products;