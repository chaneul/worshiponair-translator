import BibleIcon from "../../shared/icons/BibleIcon";
import "./verseBadge.css";

export default function VerseBadge({ reference }: { reference: string }) {
  return (
    <div className="verse-badge">
      <BibleIcon />
      <span>{reference}</span>
    </div>
  );
}
