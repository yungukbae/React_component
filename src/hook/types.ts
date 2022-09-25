interface FullScreen {
  requestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  webkitRequestFullScreen?: () => void;
  msRequestFullscreen?: () => void;
}

interface ExitFullScreen {
  exitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
  msExitFullscreen?: () => void;
}

export type Video = HTMLVideoElement & FullScreen & ExitFullScreen;
