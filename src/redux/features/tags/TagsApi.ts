import axiosInstance from "../../../utils/axiosInstance";
import { TagsTypes } from "./Tags";

const tagsApi = async (): Promise<TagsTypes[]> => {
  const response = await axiosInstance.get("/tags");
  return response.data;
};

export default tagsApi;
