import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsEnvelope } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

function Footer () {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            alert("Please input a valid email address!!!")
        } else {
            alert("Thank you for subscribing. You'll be hearing from us soon.")
        }
        event.preventDefault();

        setValidated(true);
    };

    return(
        <footer>
            <section className="newsletter">
                <p>newsletter</p>

                <p>Subscribe to get daily updates on new drops & exciting deals </p>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <article>
                        <Form.Group controlId="form">
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter your Email"
                            />
                            <Form.Control.Feedback type="invalid">Please provide a valid email address</Form.Control.Feedback>
                        </Form.Group>

                        <Button type="submit">Subscribe</Button>
                    </article>
                </Form>
            </section>

            <section className="mn-footer">
                <Link to="/">
                    <img src="/assets/ARTSY..svg" alt="logo" />
                </Link>

                <ul>
                    <li>
                        <Link to="/home">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/place">
                            Marketplace
                        </Link>
                    </li>

                    <li>
                        <Link to="/auctions">
                            Auctions
                        </Link>
                    </li>

                    <li>
                        <Link to="/drop">
                            Drop
                        </Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/home">
                            Blog
                        </Link>
                    </li>

                    <li>
                        <Link to="/place">
                            Wallets
                        </Link>
                    </li>

                    <li>
                        <Link to="/auctions">
                            Rates
                        </Link>
                    </li>

                    <li>
                        <Link to="/auctions">
                            High bids
                        </Link>
                    </li>
                </ul>
                
                <ul>
                    <li>
                        <BsEnvelope id="ft-icons" />
                        <a href = "mailto: artsystudios@gmail.com">
                            artsystudios@gmail.com
                        </a>
                    </li>

                    <li>
                        <GoLocation id="ft-icons" />
                        <span>Lagos, Nigeria.</span>
                    </li>
                </ul>
            </section>

            <div className="copywright">
                <p>Artystudios &copy; {new Date().getFullYear()}. All Rights Reserved</p>
                <p>codes by bmnduks &hearts;</p>
            </div>
        </footer>
    );
}

export default Footer;