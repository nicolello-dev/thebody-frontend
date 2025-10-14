import { useIsFullScreen } from "@/hooks/useIsFullScreen";
import { NavIcon } from "../navIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompress, faExpand } from "@fortawesome/free-solid-svg-icons";

export function FullscreenSwitcher() {
  const isFullScreen = useIsFullScreen();
  return (
    <NavIcon
      onClick={() => {
        if (isFullScreen) {
          document.exitFullscreen();
        } else {
          document.documentElement.requestFullscreen();
        }
      }}
    >
      <FontAwesomeIcon
        className="max-w-[40px] max-h-[40px]"
        icon={isFullScreen ? faCompress : faExpand}
        size="2x"
      />
    </NavIcon>
  );
}
