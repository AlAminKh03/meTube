import axiosInstance from "../../../utils/axiosInstance";

export interface relatedVideosApiTypes {
  id: number;
  tags: string[];
}

const relatedVideosApi = async ({ id, tags }: relatedVideosApiTypes) => {
  const limit = 5;
  const queryString =
    tags.map((tag) => `tags_like=${tag}`).join("&") +
    `&id_ne=${id}&_limit=${limit}`;
  console.log(queryString);
  const response = await axiosInstance.get(`/videos?${queryString}`);
  return response.data;
};

export default relatedVideosApi;
