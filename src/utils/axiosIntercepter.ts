import { BASE_API_URL } from "@/utils/envVeriables";
import axios from "axios";

const getLocalAccessToken = () => {
  const accessToken = localStorage.getItem("todo_access_token");
  return accessToken;
};

const getLocalRefreshToken = () => {
  const refreshToken = localStorage.getItem("todo_refresh_token");
  return refreshToken;
};

const refreshToken = async () => {
  const response = await axios.post(`${BASE_API_URL}/auth/jwt/refresh/`, {
    refresh: getLocalRefreshToken(),
  });
  return response;
};

export const instance = axios.create({
  baseURL: `${BASE_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await refreshToken();
          const { access, refresh } = rs.data;
          localStorage.setItem("todo_access_token", access);
          localStorage.setItem("todo_refresh_token", refresh);
          return instance(originalConfig);
        } catch (_error: any) {
          if (_error.response && _error.response.data) {
            localStorage.removeItem("todo_access_token");
            localStorage.removeItem("todo_refresh_token");
            window.location.href = "/";
            return Promise.reject(_error.response.data);
          }
          return Promise.reject(_error);
        }
      }
      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }
    return Promise.reject(err);
  }
);
