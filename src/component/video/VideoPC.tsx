import React from "react";
import Controls from "./Controls";

interface Props {
  video: HTMLVideoElement | null;
  getInstance: (instance: HTMLVideoElement | null) => void;
  play: Record<string, Promise<void> | void> | null;
}
const VideoPC: React.FC<Props> = ({video, play, getInstance}) => <>
    <video ref={(instance) => getInstance(instance)} controls={false} width="500px">
      <source src="/assets/video_source.mp4" />
    </video>
   {play && <Controls video={video} play={play}/>}
   </>


export default VideoPC;
