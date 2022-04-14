import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSongs = createAsyncThunk("song/getSongs", async(search, {rejectWithValue}) =>{
    try{
       

       let songsResp = await Promise.all([
            axios.get(`https://proxy-cors-server-node.herokuapp.com/https://api.deezer.com/search?q=track:"${search}"&limit=10`),
            axios.get(`https://proxy-cors-server-node.herokuapp.com/https://api.deezer.com/search?q=album:"${search}"&limit=10&order=TRACK_ASC`)
        ]).then(async([resp1, resp2]) => {
            const a = await resp1.data.data
            const b = await resp2.data.data


            return a.concat(b);
        }).catch((error) => {
           return rejectWithValue(error)
        })

        console.log(songsResp)
        return songsResp
        
    }  catch(e){
        return rejectWithValue(e)
    }
})


const songSlice = createSlice({
    name: 'song',
    initialState:{ 
        initial:true,
        songs:[],
        isLoading:false,
        isError:false,
        selectedSong:undefined,
        isPlaying:false
    },
    reducers:{
        setInitial:(state)=>{
            state.initial = false
        },
        setSelectedSong: (state, action) => {
            state.selectedSong = action.payload
            state.isPlaying = true
    },
        setPauseSong:(state)=>{
            state.isPlaying = false
        },
        setPlaySong: (state)=>{
            state.isPlaying = true
        },
        setNextSong:(state, action) =>{
            const index = state.songs.map(song => song.id).indexOf(action.payload)
            const lastIndex = state.songs.map(song => song.id).slice(-1).indexOf(action.payload)
            if(lastIndex === 0){
                state.selectedSong = state.songs[0]
            }else{
                state.selectedSong = state.songs[index+1]
            } 
        },
        setPrevSong:(state, action) =>{
            const index = state.songs.map(song => song.id).indexOf(action.payload) 
            if(index === 0){
                state.selectedSong = state.songs[state.songs.length - 1]
            }else{
                state.selectedSong = state.songs[index-1]
            }  
        }
    },
    extraReducers:{
        [getSongs.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = false;
        },
        [getSongs.fulfilled]: (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.songs = action.payload;
        },
        [getSongs.rejected]: (state, action) => (
            state.isLoading = false,
            state.isError = true
        )
    }
});

export const {setInitial,setSelectedSong,setPauseSong, setPlaySong, setNextSong, setPrevSong} = songSlice.actions;

export default songSlice.reducer;