import { GET_USERS_SAGA, SET_USERS, GET_POST_COMPONENT_DATA } 
from '../constants';

export function setUsers(users) {
  return {
    type: SET_USERS,
    users
  };
}

//Sagas
export function getUsersSaga() {
  return {
    type: GET_USERS_SAGA
  };
}

export function getPostComponentData(data) {
  return {
    type: GET_POST_COMPONENT_DATA,
    data: data
  };
}