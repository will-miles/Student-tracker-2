import axios from 'axios';

const baseURL = 'https://nc-student-tracker.herokuapp.com/api';

export const fetchStudents = () => {
  return axios.get(`${baseURL}/students`).then(({ data }) => {
    return data.students;
  });
};

export const fetchStudentsByType = type => {
  let graduated = false;
  if (type === 'graduated') graduated = true;
  return axios
    .get(`${baseURL}/students?graduated=${graduated}`)
    .then(({ data }) => {
      return data.students;
    });
};
