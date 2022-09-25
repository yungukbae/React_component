import { useEffect, useState } from "react";
import { Video } from "./types";

export const useVideoControls = () => {
  const [video, setVideo] = useState<Video | null>(null);
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const currentVolume = Math.floor((video?.volume ?? 0) * 10) / 10;

  const controls = video && {
    get ppBtn(): Promise<void> | void {
      setIsPlay(video.paused);
      return video.paused || video.ended ? video.play() : video.pause();
    },
    get reset(): void {
      video.pause();
      video.currentTime = 0;
      return setVideo({ ...video, currentTime: 0 });
    },
    get mute(): void {
      return setVideo({ ...video, muted: (video.muted = !video.muted) });
    },
    get posVolume(): void {
      const volume = currentVolume < 1 ? (video.volume += 0.01) : video.volume;
      return setVideo({ ...video, volume: volume });
    },
    get negVolume(): void {
      const volume = currentVolume > 0 ? (video.volume -= 0.01) : video.volume;
      return setVideo({ ...video, volume: volume });
    },
    get fullScreen(): Promise<void> | void {
      if (video.requestFullscreen) return video.requestFullscreen();
      else if (video.webkitRequestFullScreen)
        return video.webkitRequestFullScreen();
      else if (video.mozRequestFullScreen) return video.mozRequestFullScreen();
      else if (video.msRequestFullscreen) return video.msRequestFullscreen();
      else return alert("지원하지 않는 브라우저 입니다.");
    },
  };

  useEffect(() => {
    if (!!video && isPlay) {
      const executeCallback = () => {
        console.log("play");
        setVideo({ ...video, currentTime: video.currentTime });
      };
      const timeInterval = setInterval(executeCallback, 100);
      if (video.ended || video.paused) {
        setIsPlay(!isPlay);
      }
      return () => clearInterval(timeInterval);
    }
  }, [video, isPlay]);

  return { video, controls, setVideo };
};
