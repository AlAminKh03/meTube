import Navbar from "../Components/Navbar/Navbar";
import Player from "../Components/Description/Player";
import Description from "../Components/Description/Description";
import RelatedVideoList from "../Components/list/RelatedVideoList";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import { fetchVideoAsync } from "../redux/features/Video/VideoSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/app/Store";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const Video = () => {
  const { videoId } = useParams();

  const { isError, isLoading, video } = useSelector(
    (state: RootState) => state.video
  );

  console.log(video);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideoAsync(Number(videoId!)));
  }, []);

  const {
    title,
    description,
    avatar,
    likes,
    unlikes,
    link,
    tags,
    thumbnail,
    id,
    author,
    date,
    duration,
    views,
  } = video;

  if (isLoading) {
    return <h2>Loading.....</h2>;
  }
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <Player link={link} title={title} />

              <Description
                description={description}
                title={title}
                date={date}
                likes={likes}
                unlikes={unlikes}
              />
            </div>

            <RelatedVideoList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
