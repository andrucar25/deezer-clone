import { useDispatch } from "react-redux";
import { setPauseSong, setSelectedSong, setPlaySong, setNextSong, setPrevSong } from "../../../../redux/store/songs/songSlice";




export const usePlaySong = () => {

    const dispatch = useDispatch();

    const playSong = (song) =>{
         dispatch(setSelectedSong(song));
         
    }

    const playSongAgain = () => {
        dispatch(setPlaySong());
    }

    const pauseSong =  () =>{
        dispatch(setPauseSong());
    }

    const nextSong = (id) => {
        dispatch(setNextSong(id));
    }

    const prevSong = (id) => {
        dispatch(setPrevSong(id));
    }
    return {
        playSong,
        pauseSong,
        playSongAgain,
        nextSong,
        prevSong
    }
}
