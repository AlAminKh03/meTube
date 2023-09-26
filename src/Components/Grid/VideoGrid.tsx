import { useDispatch, useSelector } from "react-redux";
import VideoGridItem from "./VideoGridItem";
import { useEffect } from "react";
import { fetchVideosAsync } from "../../redux/features/Videos/Videos";
import { AppDispatch, RootState } from "../../redux/app/Store";

type Props = {};

const VideoGrid = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const { isError, videos, isLoading, error } = useSelector(
    (state: RootState) => state.videos
  );
  useEffect(() => {
    dispatch(fetchVideosAsync());
  }, [dispatch]);
  let content: React.ReactNode;
  if (isLoading) content = <div className="col-span-12">Loading....</div>;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && videos.length <= 0)
    content = <div className="col-span-12">No video found</div>;

  if (!isError && !isLoading && videos.length > 0)
    content = videos.map((video) => {
      return <VideoGridItem key={video.id} video={video} />;
    });

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;
