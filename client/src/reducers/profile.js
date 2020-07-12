import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  REPOS_LOADING,
  PROFILE_LOADING
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  repos_loading: true,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case REPOS_LOADING:
      return {
        ...state,
        repos_loading: true
      };
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
        repos_loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
        repos_loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
        repos_loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
        repos_loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
        repos_loading: false
      };

    default:
      return state;
  }
}
