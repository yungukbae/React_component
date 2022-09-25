import { useEffect, useState } from "react";
import { Video } from "./types";

export const useVideoControls = () => {
  const [video, setVideo] = useState<Video>(null);
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState(0);

  const currentVolume = Math.floor((video?.volume ?? 0) * 10) / 10;

  const controls = video && {
    get ppBtn(): Promise<void> | void {
      setIsPlay(video.paused);
      return video.paused || video.ended ? video.play() : video.pause();
    },
    get reset(): void {
      setCurrentTime(0);
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
      if (video.requestFullscreen) return video.requestFullscreen();
      if (video.webkitRequestFullScreen) return video.webkitRequestFullScreen();
      if (video.mozRequestFullScreen) return video.mozRequestFullScreen();
      if (video.msRequestFullscreen) return video.msRequestFullscreen();
      return;
    },
    currentTime: currentTime,
  };

  useEffect(() => {
    if (!!video && isPlay) {
      const executeCallback = () => {
        setCurrentTime(video.currentTime);
      };
      const timeInterval = setInterval(executeCallback, 100);
      return () => clearInterval(timeInterval);
    }
  }, [isPlay, video]);

  return { video, setVideo, controls };
};
