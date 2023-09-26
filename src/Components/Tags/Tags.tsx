import { useDispatch, useSelector } from "react-redux";
import Tag from "./Tag";
import { AppDispatch, RootState } from "../../redux/app/Store";
import { useEffect } from "react";
import { fetchTagsAsync } from "../../redux/features/tags/Tags";

const Tags = () => {
  const dispatch: AppDispatch = useDispatch();
  const { tags } = useSelector((state: RootState) => state.tags);
  useEffect(() => {
    dispatch(fetchTagsAsync());
  }, [dispatch]);
  return tags?.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-scroll">
        {tags.map((tag) => (
          <Tag key={tag.id} title={tag.title} />
        ))}
      </div>
    </section>
  ) : null;
};

export default Tags;
