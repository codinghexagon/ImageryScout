import { getImages } from "../../services/imageUpslash";
import { lookUpDictionary } from "../dictionary";

export const getDetails = async (value, setImages, setSuggestionCheck) => {
  try {
    const searchWord = lookUpDictionary(value?.toLowerCase());
    if (searchWord === null) {
      setSuggestionCheck(false)
      return setImages([]);
    } 
    const res = await getImages(searchWord);
    setSuggestionCheck(searchWord);
    setImages(res.results);
  } catch (error) {
    console.error(error);
  }
};
