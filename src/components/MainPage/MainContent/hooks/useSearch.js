import { useState } from "react"
import { useDispatch } from "react-redux";

import { getSongs, setInitial } from "../../../../redux/store/songs/songSlice";


export const useSearch = () => {

    const [search, setSearch] = useState();
    const dispatch = useDispatch();

    const getSongsApi = async () =>{
         dispatch(getSongs(search));
    }

    const setInitialMessageFalse = () =>{
        dispatch(setInitial())
    }
    return {
        setSearch,
        search,
        getSongsApi,
        setInitialMessageFalse
    }
}