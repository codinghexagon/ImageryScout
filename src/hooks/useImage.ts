
import { useState, useEffect } from "react";
import { getImageById } from "../services/imageUpslash";

const useImage = (id) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getImageById(id);
      setImageUrl(result.urls.full);
    };

    fetchData();
  }, [id]);

  return imageUrl;
};

export default useImage