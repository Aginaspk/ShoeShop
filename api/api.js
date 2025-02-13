// import axios from "axios";

// const api = axios.create({
//     baseURL:'http://localhost:4000'
// })

// export default api

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4005",
  withCredentials: true,
});

export default api
