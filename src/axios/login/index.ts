import axios from "../axios";
namespace Login {
  // 用户登录表单
  export interface LoginReqForm {
    username: string;
    password: string;
  }
  // 登录成功后返回的token
  export interface LoginResData {
    token: string;
  }
  export interface girlInfo {
    id: number;
    name: string;
    age: number;
    // height: number;
    // weight: number;
    // address: string;
    // phone: string;
    // email: string;
    // description: string;
  }

  export interface userInfo {
    name: string;
    pwd: string;
  }
}

// 用户登录
export const login = (params: Login.LoginReqForm) => {
  return axios.get<Login.LoginResData>("/api/girl");
};
// 增加女孩
export const addGirl = (params: Login.girlInfo) => {
  return axios.post<Login.LoginResData>("/api/girl/add", params);
};
// 查询女孩
export const getGirl = (params: number) => {
  return axios.get<Login.LoginResData>(`/api/girl/getGirlById?id=${params}`);
};
// 新增用户
export const addUser = (params: Login.userInfo) => {
  return axios.post<Login.LoginResData>("/api/user/createUser", params);
};
