import React, { useEffect } from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { AppDispatch, RootState } from "../../redux/app/Store";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideosAsync } from "../../redux/features/relatedVideosSlice/relatedVideosSlice";

interface RelatedVideoListProps {
  id: number;
  tags: string[];
}

const RelatedVideoList = ({ id, tags }: RelatedVideoListProps) => {
  const { relatedVideos, isLoading, isError } = useSelector(
    (state: RootState) => state.relatedVideos
  );
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedVideosAsync({ id, tags }));
  }, [id, tags, dispatch]);

  let content: React.ReactNode;

  if (isLoading) {
    return (content = <h1>Loading....</h1>);
  }
  if (!isLoading && isError) {
    return (content = <h1>Something went wrong</h1>);
  }

  if (!isLoading && !isError && relatedVideos.length <= 0) {
    return (content = <h1>No related videos found</h1>);
  }

  if (!isLoading && !isError && relatedVideos.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideoListItem key={video.id} video={video} />
    ));
  }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;
