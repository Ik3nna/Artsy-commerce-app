import React from "react";
import Hero from "./Hero/hero";
import Products from "./Products/products";
import Upcoming from "./Upcoming/upcoming";
import Links from "./Link/link";
import Creators from "./Creators/creators";
import Footer from "../../components/footer";

function Home () {

    return(
        <>
            <Hero />
            <Products />
            <Upcoming />
            <Links />
            <Creators />
            <Footer />
        </>
    );
}

export default Home;