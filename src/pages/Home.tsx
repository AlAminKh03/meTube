import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Tags from "../Components/Tags/Tags";
import VideoGrid from "../Components/Grid/VideoGrid";
import Pagination from "../Components/ui/Pagination";
import Footer from "../Components/Footer";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;
