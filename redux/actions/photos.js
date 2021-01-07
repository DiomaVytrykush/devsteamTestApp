import {GET_PHOTOS, PHOTOS_ERROR} from './types';
import axios from 'axios';

export const getPhotos = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`,
    );
    dispatch({
      type: GET_PHOTOS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: PHOTOS_ERROR,
      payload: console.log(e),
    });
  }
};
