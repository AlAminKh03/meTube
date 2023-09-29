import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/app/Store";
import {
  tagRemoved,
  tagSelected,
} from "../../redux/features/filterSlice/filterSlice";

const Tag = ({ title }: { title: string }) => {
  const { tags: selectedTags } = useSelector(
    (state: RootState) => state.filter
  );
  const dispatch: AppDispatch = useDispatch();
  const isSelected = selectedTags.includes(title) ? true : false;

  const handleSelected = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  const style = isSelected
    ? "bg-blue-600 text-blue-100 px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        <div className={style} onClick={handleSelected}>
          {title}
        </div>
      </div>
    </section>
  );
};

export default Tag;
