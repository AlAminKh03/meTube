import Player from "../Components/Description/Player";
import Description from "../Components/Description/Description";
import RelatedVideoList from "../Components/list/RelatedVideoList";
import { useParams } from "react-router-dom";
import { fetchVideoAsync } from "../redux/features/Video/VideoSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/app/Store";
import { useDispatch, useSelector } from "react-redux";

const Video = () => {
  const { videoId } = useParams();
  console.log(videoId);

  const { isLoading, video } = useSelector((state: RootState) => state.video);

  console.log(video);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideoAsync(Number(videoId)));
  }, []);

  const { theme } = useSelector((state: RootState) => state.theme);

  const { title, description, likes, unlikes, link, tags, id, date } = video;

  if (isLoading) {
    return <h2>Loading.....</h2>;
  }

  return (
    <>
      <section
        className={`${
          theme === "light"
            ? "bg-slate-200 text-slate-800"
            : "bg-slate-900 text-slate-200"
        }`}
      >
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

            <RelatedVideoList id={id} tags={tags} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
