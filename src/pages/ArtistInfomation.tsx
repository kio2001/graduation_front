import React,{useState, useEffect} from "react";
import { Box, Paper ,TextField, Button} from "@mui/material";
import axios from 'axios';

export function ArtistInfomation () {

    const [name, setName] = useState('');
    const [artistData, setArtistData] = useState<any>([]);

    const searchArtist = async () => {
        try {
            if(name !== ''){
                const response = await axios.get('http://127.0.0.1:8082/get_artist?name=' + name);
                setArtistData(response.data);
            }else{
                setArtistData([]);
                console.log("空で送るなぼけ");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (artistData && artistData.items && artistData.items.length > 0) {
            const artistName = artistData.items[0].name;
            console.log("artistName",artistName);
            console.log("結果", artistData);
        } else {
            console.log("アーティストデータが空です。");
        }
    }, [artistData]);

    
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
                    <p className="Subheading">Artist Image Search</p>
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
                            m: "50px auto",
                            width:"80%",
                        }}
                    />
                    <Button variant="contained"
                        onClick={searchArtist}
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
                {artistData && artistData.items && artistData.items.length > 0 && (
                    <Paper elevation={8}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center", 
                            width: "500px",
                            m: "100px auto",
                            borderRadius: "10px",
                            p: 1,
                        }}
                    >
                        <Box sx={{textAlign:"center", mb:"15px"}}>
                            <p className="Subheading">{artistData?.items[0]?.name}</p>
                            <img src={artistData?.items[0]?.images[1]?.url} alt="" />
                        </Box>

                    </Paper>
                )}
            </Box>
        </>
    )
}