import axiosInstance from "../../../utils/axiosInstance";
import { VideoTypes } from "./Videos";

const videosApi = async (): Promise<VideoTypes[]> => {
  const response = await axiosInstance.get("/videos");
  return response.data;
};

export default videosApi;
