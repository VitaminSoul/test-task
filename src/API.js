import axios from "axios";

export default class API {
  getData = async (page) => {
    const url = `http://localhost:5000/all/${page}`;
    // console.log("sadgfdjkhksjdf", url);
    const response = await axios.get(url, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    return response.data;
  };

  getImg = async () => {
    const img = axios
      .get("https://picsum.photos/290/290", {
        responseType: "blob",
      })
      .then((data) => data);

    return img;
  };
}
