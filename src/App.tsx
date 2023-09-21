import react,{useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ArtistInfomation } from './pages/ArtistInfomation';
import { GetSongInfo } from './pages/GetSongInfo';
import TopPage from './pages/TopPage';
import GetLyrics from './pages/GetLyrics';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box ,Paper} from '@mui/material';
import Transition from 'react-transition-group/Transition';
import { Link } from 'react-router-dom';

export function App () {
  
  const [onOff, setOnOff] = useState(false);

  const menuHandler = () => {
    if(onOff === false){
      setOnOff(true);
    }else{
      setOnOff(false);
    }
  }

  return (
    <BrowserRouter> {/* BrowserRouterを最上位に配置 */}
      <Box sx={{ height: "1300px", width: "100%", bgcolor: "#ffffff" }}>
        <header>
          <MenuRoundedIcon
            sx={{
              color: "#e1e1e1", fontSize: "50px",
              mt: "15px", ml: "15px"
            }}
            onClick={menuHandler}
          />
        </header>
        <Transition in={onOff} timeout={100}>
          {(state) => (
            <Paper sx={{
              width: "20%",
              position: "absolute",
              transition: 'opacity 0.1s ease-in',
              opacity: state === 'entered' ? 1 : 0,
              textAlign: "center",
              pb: "10px"
            }}>
              <div style={{ marginTop: "10px" }}>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontFamily: 'Noto Sans JP',
                  }}
                  to={"/ArtistInformation"}
                >
                  アー写検索
                </Link>
              </div>
              <div style={{ marginTop: "10px" }}>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontFamily: 'Noto Sans JP',
                  }}
                  to={"/GetLyrics"}
                >
                  歌詞検索
                </Link>
              </div>
              <div style={{ marginTop: "10px" }}>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontFamily: 'Noto Sans JP',
                  }}
                  to={"/GetSongInfo"}
                >
                  歌情報検索
                </Link>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontFamily: 'Noto Sans JP',
                  }}
                  to={"/"}
                >
                  topへ戻る
                </Link>
              </div>
            </Paper>
          )}
        </Transition>
        <Routes>
          <Route element={<TopPage />} path={"/"} />
          <Route element={<ArtistInfomation />} path={"/ArtistInformation"} />
          <Route element={<GetLyrics />} path={"/GetLyrics"} />
          <Route element={<GetSongInfo />} path={"/GetSongInfo"} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
};