import React from "react";
import styles from "./upcoming.module.css";
import { Link } from "react-router-dom";

function Upcoming () {
    return(
        <section className={styles.container}>
            <article className={styles.content}>
                <h2>See Upcoming Auctions and Exhibitions</h2><hr />

                <div className={styles.imgContainer} style={{ backgroundImage: `url("/assets/Rectangle 91.png")`, width: "100%", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className={styles.left}>
                        <h4>01</h4>

                        <div></div>

                        <div>
                            <h5>MONALISA REDIFINED <br /> IN STYLE.</h5>

                            <p>Start on : 08:00 GTS . Monday </p>

                            <p>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT 
                                WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING 
                                THEIR HIGHEST AND LOWEST BIDS.
                            </p>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <Link to="/auctions">See more</Link>

                        <Link to="/drop">Set a reminder</Link>
                    </div>
                </div>

                <img src="/assets/Loader.png" alt="loader" />
            </article>
        </section>
    )
}

export default Upcoming;