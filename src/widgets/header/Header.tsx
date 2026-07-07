import LanguageSelector from "../../features/language/LanguageDropdown";
import { PulseDot } from "../../shared/icons/pulseDot/PulseDot";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <span className="header-live">
          <PulseDot />
          LIVE
        </span>

        <LanguageSelector />
      </div>

      <div className="header-titles">
        <h1 className="header-title">Sunday Service</h1>
        <p className="header-subtitle">
          Pastor James Carter · Grace Community Church
        </p>
      </div>
    </header>
  );
}
