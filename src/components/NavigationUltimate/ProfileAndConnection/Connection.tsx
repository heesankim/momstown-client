import react, { useEffect } from 'react';
import styled from 'styled-components';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import store from 'src/stores';
import { setVideoConnected } from 'src/stores/UserStore';
import { useAppSelector } from 'src/hooks';
import { Audiotrack } from '@mui/icons-material';
import WebRTC from 'src/web/WebRTC';
import Game from 'src/scenes/Game';
import phaserGame from 'src/PhaserGame';
import Bootstrap from 'src/scenes/Bootstrap';
// styled.div with Shadow
const StyledAudioBox = styled.button<{pressed:boolean}>`
  display: flex;
  justify-content: center;
  width: 60px;
  height: 44px;
  color: ${ (props) => (props.pressed ? "#62D3A3": "#DD0000")};
  background-color: ${ (props) => (props.pressed ? "#D2CBFF": "#CAB8FF")};
  box-shadow: ${(props) => (props.pressed ?  "0" : " 3px 3px 3px 3px gray" )};
  font-size: 2rem;
  font-weight: 900;
  border: ${ (props) => (props.pressed ? "solid gray": "none")};
  &:hover{  
    background-color : #D2CBFF;
    color : #DD0000;
  }
`;

const StyledVideoBox = styled.button<{pressed:boolean}>`
  display: flex;
  justify-content: center;
  width: 60px;
  height: 44px;
  color: ${ (props) => (props.pressed ? "#62D3A3": "#DD0000")};
  background-color: ${ (props) => (props.pressed ? "#D2CBFF": "#CAB8FF")};
  box-shadow: ${(props) => (props.pressed ?  "0" : " 3px 3px 3px 3px gray" )};
  font-size: 2rem;
  font-weight: 900;
  border: ${ (props) => (props.pressed ? "solid gray": "none")};
  &:hover{  
    background-color : #D2CBFF;
    color : #DD0000;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;



export default function ConnectionStatus() {

const audioStatus = useAppSelector((state) => state.user.webcamAudioStatus);
const videoStatus = useAppSelector((state) => state.user.webcamVideoStatus);
const bootstrap = phaserGame.scene.keys.bootstrap as Bootstrap;

  return (
    <Wrapper>
      <StyledAudioBox onClick={() => bootstrap.network.webRTC?.toggleAudio()} pressed = {audioStatus}>
          {audioStatus ? <MicIcon fontSize="large" /> : <MicOffIcon fontSize="large" sx={{ color: "#DD0000" }}/>}
      </StyledAudioBox>
      <StyledVideoBox onClick={() => bootstrap.network.webRTC?.toggleVideo()} pressed = {videoStatus}>
        {videoStatus ? <VideocamIcon fontSize="large" /> : <VideocamOffIcon fontSize="large" sx={{ color: "#DD0000" }}/>}
      </StyledVideoBox>
    </Wrapper>
  );
}
