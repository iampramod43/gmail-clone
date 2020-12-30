import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import mailReducer from '../features/mailSlice';
import sectionReducer from '../features/sectionSlice'
export default configureStore({
  reducer: {
    user: userReducer,
    mail: mailReducer,
    section: sectionReducer,
  },
});
