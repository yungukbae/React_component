import React from "react";
import { Video } from "../../hook/types";
import Controls from "./Controls";

interface Props {
  video: Video;
  getInstance: (instance: HTMLVideoElement | null) => void;
  controls: Record<string, Promise<void> | void | number> | null;
}
const VideoPC: React.FC<Props> = ({ video, controls, getInstance }) => (
  <>
    <video
      ref={(instance) => getInstance(instance)}
      controls={false}
      width="500px"
    >
      <source src="/assets/video_source.mp4" />
    </video>
    {controls && <Controls video={video} controls={controls} />}
  </>
);

export default VideoPC;
