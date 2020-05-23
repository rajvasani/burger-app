import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-5728b.firebaseio.com/",
});

export default instance;
