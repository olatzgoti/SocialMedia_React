import axios from "axios";

const API_URL = "http://localhost:3000";

const register = async (userData) => {
  const res = await axios.post(`${API_URL}/socialmedia`, userData);
  if (res) res.send(res);
};

const login = async (userData) => {
  const res = await axios.post(`${API_URL}/socialmedia`);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", JSON.stringify(res.data.token));
  }

  return res.data;
};

const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(`${API_URL}/socialmedia/logout`, {
      headers: { authorization: token },
      });
    if (res.data) {
      localStorage.clear();
    }
    return res.data;
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
