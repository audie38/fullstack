import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const url = `http://localhost:5000/posts`;

export const fetchPosts = () => axios.get(url);
