import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import endpoints from "../services/TmdbService";
import Footer from "../components/Footer";
import Trending from "../components/Trending";

function Home() {
  return (
    <>
      <Hero />

      <MovieRow title="Popular" url={endpoints.popular} />
      <MovieRow title="Top Rated" url={endpoints.topRated} />
      <MovieRow title="Animation" url={endpoints.animation} />
      <MovieRow title="Upcoming" url={endpoints.upcoming} />

      <Trending />

      <MovieRow title="Horror" url={endpoints.horror} />
      <MovieRow title="War" url={endpoints.war} />
      <MovieRow title="Western" url={endpoints.western} />
      <MovieRow title="Documentary" url={endpoints.documentary} />

      <Footer />
    </>
  );
}

export default Home;
