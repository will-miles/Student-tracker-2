import axios from 'axios';

const baseURL = 'https://nc-student-tracker.herokuapp.com/api';

export const fetchStudents = params => {
  return axios
    .get(`${baseURL}/students`, { params: params })
    .then(({ data }) => {
      return data.students;
    });
};

export const PostNewStudent = (name, startingCohort) => {
  return axios
    .post(`${baseURL}/students`, { name, startingCohort })
    .then(({ data }) => {
      return data.student;
    });
};

export const getSingleStudent = id => {
  return axios.get(`${baseURL}/students/${id}`).then(({ data }) => {
    return data.student;
  });
};
