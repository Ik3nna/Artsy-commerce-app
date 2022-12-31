import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import styles from "./link.module.css";

function Links () {
    return(
        <section className={styles.linkContainer}>
            <hr />
            <article>
                <div>Explore marketplace</div>

                <Link to="/place">
                    <BsArrowRight className={styles.links} />
                </Link>
            </article><hr />

            <article>
                <div>See auctions</div>

                <Link to="/auctions">
                    <BsArrowRight className={styles.links} />
                </Link>
            </article><hr />
        </section>
    );
}

export default Links;