import axios from "axios";

const API_URL = "http://localhost:8080/api/login";
export const API_URL3 = "http://localhost:8080/";
export const API_URL2 = "http://localhost:8080/api/";
const qs = require('qs')

class AuthService {
    
    //Login Method
    login(username, password) {
        axios({
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({
                username: username,
                password: password
            }),
            url: API_URL,
        }).then((response) => {
            if (response.data.access_token) {
                localStorage.clear();
                localStorage.setItem("user", JSON.stringify(response.data.username));
                localStorage.setItem("access_token", JSON.stringify(response.data.access_token));
                localStorage.setItem("refresh_token", JSON.stringify(response.data.refresh_token));
                localStorage.setItem("auth", true);
                return true;
            } else {
                return false
            }
        })
            .catch((error) => {
                console.log(error)
            });
    }

    //Registation Method 
    register(userDto) {
        axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            data: JSON.stringify({ username: userDto }),
            url: "http://localhost:8080/api/user/save",
        }).then((response) => {
            console.log(response)
        })
            .catch((error) => {
                console.log(error)
            });
    }

    //Logout Method 
    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("auth");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}
export default new AuthService();