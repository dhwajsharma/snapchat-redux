import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';
import cameraReducer from '../features/appSlice';




export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
    camera: cameraReducer
  },

});