import { configureStore } from "@reduxjs/toolkit";
import SongReducer from './songs/songSlice';

export default configureStore({
    reducer:{
        song:SongReducer
    }
})