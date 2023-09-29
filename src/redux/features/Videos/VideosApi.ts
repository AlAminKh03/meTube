import axiosInstance from "../../../utils/axiosInstance";
import { VideoTypes } from "./Videos";

const videosApi = async (
  tags: string[],
  search: string
): Promise<VideoTypes[]> => {
  let queryString = "";
  if (tags.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }
  const response = await axiosInstance.get(`/videos?${queryString}`);
  return response.data;
};

export default videosApi;
