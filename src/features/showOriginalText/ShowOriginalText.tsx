import EyeIcon from "../../shared/icons/EyeIcon";
import "./showOriginalText.css";

export default function ShowOriginalText() {
  return (
    <button type="button" className="toggleOriginalText">
      <EyeIcon />
      <span>English</span>
    </button>
  );
}
