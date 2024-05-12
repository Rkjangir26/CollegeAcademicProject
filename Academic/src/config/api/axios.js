import axios from "axios";

export default axios.create({
  baseURL:
   
 "https://college-academic-project-backend.vercel.app/",

  headers: { "Content-Type": "application/json" },
});
