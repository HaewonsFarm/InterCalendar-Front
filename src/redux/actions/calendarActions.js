import axios from 'axios';

export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';

export const fetchEvents = () => async (dispatch) => {
  dispatch({ type: FETCH_EVENTS_REQUEST });
  try {
    const response = await axios.get('/api/calendar'); // 백엔드 엔드포인트에 맞게 수정
    dispatch({
      type: FETCH_EVENTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_EVENTS_FAILURE,
      payload: error.message,
    });
  }
};
