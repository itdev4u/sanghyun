// axios
import axios from "axios";

// export function getPosts(params) {
//   return axios.get('http://localhost:5000/posts', { params });
// }
export function getPosts(params) {
  return axios.post('http://localhost:8080/api/board/getPosts', params);
}

// export function getPostById(id) {
//   return axios.get(`http://localhost:5000/posts/${id}`);
// }

export function getPostById(id) {
  return axios.get(`http://localhost:8080/api/board/posts/${id}`);
}

// export function createPost(data) {
//   return axios.post('http://localhost:5000/posts', data);
// }

export function createPost(data) {
  return axios.post('http://localhost:8080/api/board/posts', data);
}

// export function updatePost(id, data) {
//   return axios.put(`http://localhost:5000/posts/${id}`, data);
// }

export function updatePost(id, data) {
  return axios.put(`http://localhost:8080/api/board/posts/${id}`, data);
}


// export function deletePost(id) {
//   return axios.delete(`http://localhost:5000/posts/${id}`);
// }
export function deletePost(id) {
  return axios.delete(`http://localhost:8080/api/board/posts/${id}`);
}

export function loginMember(data) {
  return axios.post('http://localhost:8080/api/member/login', data);
}

export function getMembers(params) {
  return axios.post('http://localhost:8080/api/member/getMembers', params);
}

