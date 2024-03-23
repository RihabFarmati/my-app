import axios from "axios";

const API_URL = "http://localhost:8080/api/store/book/all";

class ApiService {

    fetchBooks = () => {
        return axios({
            method: 'GET',
            headers: { 'Authorization': "Bearer " + JSON.parse(localStorage.getItem('access_token')) },
            url: API_URL,
        }).then((response) => {
            console.log("response :" + response.data)
            return response.data;
        })
            .catch((error) => {
                console.log("error :" + error)
                return error;
            });
    };

}
export default new ApiService();