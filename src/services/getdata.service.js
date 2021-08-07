import axios from "axios";
function getData() {
  try {
    return axios.get("http://localhost:5000/api").then((data) => data);
  } catch (e) {
    console.error(e);
  }
}
export const excel = getData();
