import axios from "axios";

const KEY = "AIzaSyDP4T_99jRDAnfGeNik5ujsDiPiYMpm7-g";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
