import React,{useState, useEffect} from "react";
import { Box, Paper ,TextField, Button} from "@mui/material";
import axios from 'axios';


export default function() {

    const [artistName, setArtistName] = useState<string>("");
    const [songName, setSongName] = useState<string>(""); 
    const [accesstoken, setAccesstoken] = useState<string>("");
    const [lyrics, setLyrics] = useState<string>("");

    const searchLyrics = async () => {
        try {
            if (artistName !== '' && songName !== '') {
                const headers = {
                    'Authorization': `Bearer ${accesstoken}`
                };
                const response = await axios.get(`http://localhost:8081/get_lyrics?artist_name=${artistName}&song_name=${songName}`, { headers });
                setLyrics(response.data.lyrics);
            } else {
                setLyrics("");
                console.log("アーティスト名と曲名を入力してください。");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    console.log(lyrics);
   
    return(
        <>
            <Box sx={{width:"100%"}}>
                <Paper elevation={8}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center", 
                        width: "45%",
                        m: "100px auto",
                        borderRadius: "10px",
                        p: 1,
                    }}
                >
                    <p className="Subheading">Get Lyrics</p>
                    <TextField
                        type="text"
                        value={songName}
                        onChange={(e) => setSongName(e.target.value)}
                        placeholder="Please enter the name of the song"
                        focused
                        InputProps={{
                            sx: {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#dddddd', // 好きな色に変更
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#dddddd', // ホバー時の色に変更
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#424242', // フォーカス時の色に変更
                                },
                            },
                        }}
                        sx={{
                            mt: "10px",
                            ml: "auto",
                            mr: "auto",
                            width:"80%",
                        }}
                    />
                    <TextField
                        type="text"
                        value={artistName}
                        onChange={(e) => setArtistName(e.target.value)}
                        placeholder="Please enter the name of the artist"
                        focused
                        InputProps={{
                            sx: {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#dddddd', // 好きな色に変更
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#dddddd', // ホバー時の色に変更
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#424242', // フォーカス時の色に変更
                                },
                            },
                        }}
                        sx={{
                            mt: "10px",
                            ml: "auto",
                            mr: "auto",
                            width:"80%",
                        }}
                    />
                    <TextField
                        type="text"
                        value={accesstoken}
                        onChange={(e) => setAccesstoken(e.target.value)}
                        placeholder="Please enter your accesstoken"
                        focused
                        InputProps={{
                            sx: {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#dddddd', // 好きな色に変更
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#dddddd', // ホバー時の色に変更
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#424242', // フォーカス時の色に変更
                                },
                            },
                        }}
                        sx={{
                            mt: "10px",
                            ml: "auto",
                            mr: "auto",
                            mb: "30px",
                            width:"80%",
                        }}
                    />
                    <Button variant="contained"
                        onClick={searchLyrics}
                        sx={{width : "30%",
                            bgcolor:"#424242",
                            ":hover":{
                                bgcolor:"#dddddd"
                            },
                            ml:"auto",
                            mr:"auto",
                            mb: "20px"
                        }}>
                        Search
                    </Button>
                </Paper>
            </Box>
          
        </>
    )
}