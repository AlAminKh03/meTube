import axiosInstance from "../../../utils/axiosInstance";

const videoApi = async (id: number): Promise<any> => {
  console.log(id);
  const response = await axiosInstance.get(`/videos/${id}`);
  return response.data;
};

export default videoApi;
