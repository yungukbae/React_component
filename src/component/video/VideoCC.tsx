import { useVideoControls } from "../../hook/useVideoControls";
import VideoPC from "./VideoPC";

const VideoCC = () => {
  const { video, setVideo, controls } = useVideoControls();

  const getInstance = (instance: HTMLVideoElement | null) => {
    setVideo(instance);
  };

  return (
    <>
      <VideoPC video={video} getInstance={getInstance} controls={controls} />
    </>
  );
};

export default VideoCC;
