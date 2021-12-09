import axios from "axios";

export const getPosts = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    if (res) {
      return res;
    }
  } catch (error) {
    console.log("This is an eroor");
  }
};
