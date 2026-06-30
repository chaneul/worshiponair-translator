import TextResizeer from "../../features/textsize/TextResizer";
import ShowOriginalText from "../../features/showOriginalText/ShowOriginalText";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <TextResizeer />
      <ShowOriginalText />
    </footer>
  );
}
