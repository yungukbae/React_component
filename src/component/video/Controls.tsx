import React from "react";
interface Props {
  video:
    | (HTMLVideoElement & {
        webkitEnterFullscreen?: () => void;
        webkitExitFullscreen?: () => void;
      })
    | null;
  controls: Record<string, Promise<void> | void>;
}

const Controls: React.FC<Props> = ({ video, controls }) => (
  <>
    <div id="video-controls" className="controls" data-state="hidden">
      <button
        id="playpause"
        onClick={() => controls.ppBtn}
        type="button"
        data-state="play"
      >
        Play/Pause
      </button>
      <button
        id="stop"
        onClick={() => controls.reset}
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
        onClick={() => controls.mute}
        type="button"
        data-state="mute"
      >
        Mute/Unmute
      </button>
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
    <div>{video && <h1>{Math.floor(video.volume * 10)}</h1>}</div>
    <div>{video && `${video.muted}`}</div>
  </>
);

export default Controls;
