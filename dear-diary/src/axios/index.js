import axios from "axios";

const withAuth = (contentType) => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      "Content-Type": contentType || "application/json",
      Authorization: token
    }
  })
};

export default withAuth