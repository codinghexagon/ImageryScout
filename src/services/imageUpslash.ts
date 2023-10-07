import axios from "axios";
import { ACCESS_KEY, SEARCH_URL, IMAGE_URL } from "@env";

const defaultHeaders = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
};

export const getImages = async (query?: string) => {
  try {
    const { data } = await axios({
      method: "get",
      headers: defaultHeaders,
      url: `${SEARCH_URL}?query=${query}`,
    });
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getImageById = async (id?: string) => {
  try {
    const { data } = await axios({
      method: "get",
      headers: defaultHeaders,
      url: `${IMAGE_URL}/${id}`,
    });
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
