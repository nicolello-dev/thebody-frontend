import { useEffect, useState } from "react";

export function useIsFullScreen(): boolean {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  useEffect(() => {
    function handleFullScreenChange() {
      const fsElement = document.fullscreenElement;
      setIsFullScreen(!!fsElement);
    }
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("MSFullscreenChange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullScreenChange
      );
    };
  }, []);

  return isFullScreen;
}
