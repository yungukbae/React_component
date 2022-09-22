import React, { Dispatch, useEffect } from "react";

interface Props {
  video: HTMLVideoElement | null;
  getInstance: (instance: HTMLVideoElement | null) => void;
  play: () =>
    | {
        ppBtn: void | Promise<void>;
        reset: string;
        mute: void;
        posVolume: false | void;
        negVolume: false | void;
      }
    | any;
}
const VideoPC: React.FC<Props> = ({ video, getInstance, play }) => (
  <div>
    <video ref={(instance) => getInstance(instance)} width="500px">
      <source src="/assets/video_source.mp4" />
    </video>
    <div id="video-controls" className="controls" data-state="hidden">
      <button
        id="playpause"
        onClick={() => play().ppBtn}
        type="button"
        data-state="play"
      >
        Play/Pause
      </button>
      <button
        id="stop"
        onClick={() => play().reset}
        type="button"
        data-state="stop"
      >
        Stop
      </button>
      {/* <div className="progress">
          <progress id="progress" value="0" min="0">
            <span id="progress-bar"></span>
          </progress>
        </div> */}
      <button
        id="mute"
        onClick={() => play().mute}
        type="button"
        data-state="mute"
      >
        Mute/Unmute
      </button>
      <button
        id="volinc"
        onClick={() => play().posVolume}
        type="button"
        data-state="volup"
      >
        Vol+
      </button>
      <button
        id="voldec"
        onClick={() => play().negVolume}
        type="button"
        data-state="voldown"
      >
        Vol-
      </button>
      <button id="fs" type="button" data-state="go-fullscreen">
        Fullscreen
      </button>
    </div>
    <div></div>
    <div>{video && <h1>{video.volume}</h1>}</div>
    <div>{video && <h1>{video.muted}</h1>}</div>
  </div>
);

export default VideoPC;
