import React from "react";
import { IconButton, Slider, Stack } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import StopIcon from "@mui/icons-material/Stop";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";

import { Video } from "../../hook/types";

interface Props {
  video: Video;
  controls: Record<string, Promise<void> | void>;
}

const Controls: React.FC<Props> = ({ video, controls }) => (
  <>
    <div id="video-controls" className="controls" data-state="hidden">
      <IconButton
        id="playpause"
        size="small"
        color="primary"
        onClick={() => controls.ppBtn}
      >
        {video.paused ? <PlayArrowIcon /> : <PauseIcon />}
      </IconButton>
      <IconButton
        id="stop"
        size="small"
        color="primary"
        onClick={() => controls.reset}
        type="button"
      >
        <StopIcon />
      </IconButton>
      {/* <div className="progress">
          <progress id="progress" value="0" min="0">
            <span id="progress-bar"></span>
          </progress>
        </div> */}
      <VolumeIcon video={video} controls={controls} />
      <button
        id="volinc"
        onClick={() => controls.posVolume}
        type="button"
        data-state="volup"
      >
        Vol+
      </button>
      <button
        id="voldec"
        onClick={() => controls.negVolume}
        type="button"
        data-state="voldown"
      >
        Vol-
      </button>
      <button
        id="fs"
        onClick={() => controls.fullScreen}
        type="button"
        data-state="go-fullscreen"
      >
        Fullscreen
      </button>
    </div>
    <div>
      {/* <hr style={{
          width: `calc(${
            Math.ceil((video.) * 10) / 10
          }px * 30)`,
        }}/> */}
      <hr
        style={{
          width: `calc(${
            Math.ceil((video.currentTime as number) * 10) / 10
          }px * 30)`,
        }}
      />
    </div>
    <div>{video && <h1>{Math.ceil(video.volume * 100) / 100}</h1>}</div>
    <div>{video && `${video.muted}`}</div>
    <div>{video && Math.ceil((video.currentTime as number) * 10) / 10}</div>
  </>
);

const VolumeIcon: React.FC<Props> = ({ video, controls }) => {
  const volume = (input: number) => {
    const getVolume = Math.floor(input * 10);
    if (getVolume > 5) {
      return <VolumeUpIcon />;
    } else if (getVolume !== 0) {
      return <VolumeDownIcon />;
    } else {
      return <VolumeMuteIcon />;
    }
  };

  //🤮
  // const handleChange = (event: Event, newValue: number | number[]) => {
  //   // setValue(newValue as number);
  //   let ef = (newValue as number) - video.volume * 10;

  //   for (let i = 0; i < Math.abs(ef); i++) {
  //     return ef > 0 ? controls.posVolume : controls.negVolume;
  //   }
  // };

  return (
    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
      <IconButton
        id="mute"
        onClick={() => controls.mute}
        type="button"
        data-state="mute"
      >
        {video.muted ? <VolumeOffIcon /> : volume(video.volume)}
      </IconButton>
      {/* <Slider
        aria-label="Volume"
        value={video.volume * 10}
        onChange={handleChange}
      /> */}
    </Stack>
  );
};

export default Controls;
