import { Link } from "react-router-dom";
import { VideoTypes } from "../../redux/features/Videos/Videos";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/Store";
interface videoTypes {
  video: VideoTypes;
}
const VideoGridItem = ({ video }: videoTypes) => {
  const { id, title, duration, author, avatar, date, views, thumbnail } = video;
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <div
      className={`col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03] p-3  rounded-md ${
        theme === "light" ? "bg-gray-200 " : " bg-gray-800"
      }`}
    >
      <div className="w-full flex flex-col">
        <div className="relative">
          <Link to={`videos/${id}`}>
            <img
              src={thumbnail}
              className="w-full h-auto"
              alt="Some video title"
            />
          </Link>

          <p
            className={`absolute right-2 bottom-2 ${
              theme === "light"
                ? "bg-gray-900 text-gray-300"
                : "bg-gray-300 text-gray-900"
            } text-xs px-1 py`}
          >
            {duration}
          </p>
        </div>

        <div className="flex flex-row mt-2">
          <Link to={`videos/${id}`} className="shrink-0">
            <img
              src={avatar}
              className="rounded-full h-6 w-6"
              alt="Learn with Sumit"
            />
          </Link>

          <div className="flex flex-col items-start ">
            <Link to={`videos/${id}`}>
              <p
                className={`${
                  theme === "light" ? " text-gray-900" : " text-gray-100"
                } text-sm font-semibold`}
              >
                {title}
              </p>
            </Link>
            <Link
              className={`${
                theme === "light" ? " text-gray-900" : " text-gray-100"
              } text-xs mt-2 hover:text-gray-600`}
              to={`videos/${id}`}
            >
              {author}
            </Link>
            <p
              className={`${
                theme === "light" ? " text-gray-900" : " text-gray-100"
              } text-xs mt-1`}
            >
              {views} views . {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
