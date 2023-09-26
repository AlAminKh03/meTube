import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Tags from "../Components/Tags/Tags";
import VideoGrid from "../Components/Grid/VideoGrid";
import Pagination from "../Components/ui/Pagination";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../redux/app/Store";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Tags />
      <VideoGrid />
      <Pagination />
    </div>
  );
};

export default Home;
