import LanguageSelector from "../../features/language/LanguageDropdown";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <span className="header-live">
          <span className="header-live-dot" aria-hidden="true" />
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
