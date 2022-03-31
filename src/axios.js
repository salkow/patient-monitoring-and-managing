import axios from "axios";

const baseURL = "http://62.74.232.210:4566/healthmonitor/";

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		accept: "application/json",
	},
});

export default axiosInstance;
