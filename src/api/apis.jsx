import axios from "axios"

export const instance = axios.create({
    //baseURL : 'http://~~', 
    withCredentials : true, //고정 url주소(서버파면 주소 집어넣기)
    headers: {
        "Content-type" : "application/json",
    }
});

instance.interceptors.request.use(
    (config) => config,
    (err) => Promise.reject(err)
);

instance.interceptors.response.use(
    (response) => response,
    (err) => {
        if(err.code === "ECONNABORTED"){
            console.log("Request timeout");
            window.location.href = "/err";
        }
        return Promise.reject(err);
    }
);


export default instance;
