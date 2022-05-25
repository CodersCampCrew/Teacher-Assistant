import serverAPI from "./serverAPI";

const userService = {
  getTokenFromLocalStorage() {
    let stringToken;
    if (typeof window !== "undefined") {
      return (stringToken = localStorage.getItem("token"));
    }

    if (stringToken) {
      return JSON.parse(stringToken);
    }

    return {};
  },

  async login(userData: { email: string; password: string }) {
    const data = await serverAPI.post({
      url: "auth/login",
      data: userData,
    });

    localStorage.setItem("token", JSON.stringify(data));
    return data;
  },

  async register(userData: {}) {
    console.log(userData);
    const data = await serverAPI.post({
      url: "auth/register",
      data: userData,
    });
    console.log(data);

    return data;
  },

  logout() {
    localStorage.removeItem("token");
  },

  async verifyEmail(token: string) {
    const data = await serverAPI.put({
      url: `auth/verifyEmail/${token}`,
    });
    return data;
  },
};

export default userService;
