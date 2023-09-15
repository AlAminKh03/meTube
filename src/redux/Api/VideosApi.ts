import axiosInstance from "../../utils/axiosInstance";
import { VideoTypes } from "../features/counter/Videos";

const videosApi = async (): Promise<VideoTypes[]> => {
  const response: VideoTypes[] = await axiosInstance.get("/video");
  return response;
};

export default videosApi;
