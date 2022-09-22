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
        get reset(): void {
          video.pause();
          video.currentTime = 0;
          return;
        },
        get mute(): false | void {
          console.table(video.muted);
          return setVideo({ ...video, muted: true });
        },
        get posVolume(): false | void {
          return (
            currentVolume < 1 &&
            setVideo({ ...video, volume: (video.volume += 0.05) })
          );
        },
        get negVolume(): false | void {
          return (
            currentVolume > 0 &&
            setVideo({ ...video, volume: (video.volume -= 0.05) })
          );
        },
      };
      return obj;
    }
  };

  return <VideoPC video={video} getInstance={getInstance} play={play} />;
};

export default VideoCC;
