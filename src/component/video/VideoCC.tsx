import { useState } from "react";
import VideoPC from "./VideoPC";

const VideoCC = () => {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);

  const getInstance = (instance: HTMLVideoElement | null) => {
    !!instance && setVideo(instance);
  };

  const play = () => {
    if (!!video?.canPlayType) {
      const currentVolume = Math.floor(video.volume * 10) / 10;
      let obj = {
        get ppBtn(): Promise<void> | void {
          return video.paused || video.ended ? video.play() : video.pause();
        },
        get reset(): number {
          video.pause();
          return (video.currentTime = 0);
        },
        get mute(): void {
          return setVideo({ ...video, muted: (video.muted = !video.muted) });
        },
        get posVolume(): void {
          const volume =
            currentVolume < 1 ? (video.volume += 0.1) : video.volume;
          return setVideo({ ...video, volume: volume });
        },
        get negVolume(): void {
          const volume =
            currentVolume > 0 ? (video.volume -= 0.1) : video.volume;
          return setVideo({ ...video, volume: volume });
        },
      };
      return obj;
    }
  };

  return <VideoPC video={video} getInstance={getInstance} play={play} />;
};

export default VideoCC;
