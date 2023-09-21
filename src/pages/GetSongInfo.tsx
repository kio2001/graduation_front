import React,{useState, useEffect} from "react";
import { Box, Paper ,TextField, Button} from "@mui/material";
import axios from 'axios';

export function GetSongInfo () {

    const [name, setName] = useState('');
    const [songName, setSongName] = useState('');
    const [songData, setSongData] = useState<any>([]);

    const searchSongInfo = async () => {
        try {
            if(name !== '' && songName !== ''){
                const response = await axios.get(`http://127.0.0.1:8083/get_track_info?artist_name=${name}&track_name=${songName}`);
                setSongData(response.data);
            }else{
                setSongData([]);
                console.log("空で送るなぼけ");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (songData) {
            
            console.log("結果", songData);
        } else {
            console.log("アーティストデータが空です。");
        }
    }, [songData]);

    
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
                    <p className="Subheading">Song Info Search</p>
                    <TextField
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
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
                            mt: "30px",
                            ml: "auto",
                            mr: "auto",
                            mb: "10px",
                            width:"80%",
                        }}
                    />
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
                            mb: "50px",
                            width:"80%",
                        }}
                    />
                    <Button variant="contained"
                        onClick={searchSongInfo}
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