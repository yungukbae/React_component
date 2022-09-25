import { useState } from "react";
import VideoPC from "./VideoPC";

const VideoCC = () => {
  const [video, setVideo] = useState<
    | (HTMLVideoElement & {
        webkitEnterFullscreen?: () => void;
        webkitExitFullscreen?: () => void;
      })
    | null
  >(null);

  const getInstance = (instance: HTMLVideoElement | null) => {
    setVideo(instance);
  };

  const currentVolume = Math.floor((video?.volume ?? 0) * 10) / 10;

  const controls = video && {
    get ppBtn(): Promise<void> | void {
      return video.paused || video.ended ? video.play() : video.pause();
    },
    get reset(): void {
      video.currentTime = 0;
      return video.pause();
    },
    get mute(): void {
      return setVideo({ ...video, muted: (video.muted = !video.muted) });
    },
    get posVolume(): void {
      const volume = currentVolume < 1 ? (video.volume += 0.1) : video.volume;
      return setVideo({ ...video, volume: volume });
    },
    get negVolume(): void {
      const volume = currentVolume > 0 ? (video.volume -= 0.1) : video.volume;
      return setVideo({ ...video, volume: volume });
    },
    get fullScreen(): Promise<void> | void {
      if (video.requestFullscreen) {
        return video.requestFullscreen();
      } else {
        if (video.webkitEnterFullscreen) return video.webkitEnterFullscreen();
        else return console.log("지원되지 않습니다.");
      }
    },
  };

  return (
    <>
      <VideoPC video={video} getInstance={getInstance} controls={controls} />
    </>
  );
};

export default VideoCC;
