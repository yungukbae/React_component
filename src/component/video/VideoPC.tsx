import React from "react";

interface Props {
  getInstance: (instance: HTMLVideoElement | null) => void;
}
const VideoPC: React.FC<Props> = ({ getInstance }) => (
  <video
    ref={(instance) => getInstance(instance)}
    controls={false}
    width="500px"
  >
    <source src="/assets/video_source.mp4" />
  </video>
);

export default VideoPC;
