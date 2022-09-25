import { useVideoControls } from "../../hook/useVideoControls";
import Controls from "./Controls";
import { VideoContainer } from "./style";
import VideoPC from "./VideoPC";

const VideoCC = () => {
  const { video, controls, setVideo } = useVideoControls();

  const getInstance = (instance: HTMLVideoElement | null) => {
    setVideo(instance);
  };

  return (
    <VideoContainer>
      <VideoPC getInstance={getInstance} />
      {controls && video && <Controls video={video} controls={controls} />}
    </VideoContainer>
  );
};

export default VideoCC;
