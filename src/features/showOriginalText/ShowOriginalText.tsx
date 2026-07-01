import EyeIcon from "../../shared/icons/EyeIcon";
import { useShowOriginal } from "../../shared/lib/ShowOriginalContext";
import "./showOriginalText.css";

export default function ShowOriginalText() {
  const { showOriginal, toggleShowOriginal } = useShowOriginal();

  return (
    <button
      type="button"
      className={`toggleOriginalText${showOriginal ? " active" : ""}`}
      onClick={toggleShowOriginal}
    >
      <EyeIcon />
      <span>English</span>
    </button>
  );
}
