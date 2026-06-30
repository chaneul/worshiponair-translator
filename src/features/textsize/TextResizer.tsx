import { useTextSize } from "../../shared/lib/TextSizeContext";
import "./textResizer.css";

export default function TextResizer() {
  const { size, setSize } = useTextSize();
  return (
    <div className="text-resizer">
      <button
        type="button"
        aria-label="Small text"
        aria-pressed={size === "small"}
        onClick={() => setSize("small")}
        className="text-size-button -small"
      >
        A
      </button>

      <button
        type="button"
        aria-label="Medium text"
        aria-pressed={size === "medium"}
        onClick={() => setSize("medium")}
        className="text-size-button -medium"
      >
        A
      </button>

      <button
        type="button"
        aria-label="Large text"
        aria-pressed={size === "large"}
        onClick={() => setSize("large")}
        className="text-size-button -large"
      >
        A
      </button>
    </div>
  );
}
