import { Link } from "react-router-dom";
import { RelatedVideoTypes } from "../../redux/features/relatedVideosSlice/relatedVideosSlice";
interface RelatedVideoListItemProps {
  video: RelatedVideoTypes;
}
const RelatedVideoListItem = ({ video }: RelatedVideoListItemProps) => {
  return (
    <div className="w-full flex flex-row gap-2 mb-4">
      <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <Link to={`video/${video.id}`}>
          <img
            src={video.link}
            className="object-cover"
            alt="Some video title"
          />
        </Link>
        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
          {video.duration}
        </p>
      </div>

      <div className="flex flex-col w-full">
        <Link to={`video/${video.id}`}>
          <p className="text-slate-900 text-sm font-semibold">{video.title}</p>
        </Link>
        <Link
          className="text-gray-400 text-xs mt-2 hover:text-gray-600"
          to={`video/${video.id}`}
        >
          {video.author}
        </Link>
        <p className="text-gray-400 text-xs mt-1">
          {video.likes} . {video.date}
        </p>
      </div>
    </div>
  );
};

export default RelatedVideoListItem;
