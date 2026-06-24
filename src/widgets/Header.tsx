import LanguageSelector from "../features/language/LanguageDropdown";
import "./header.css";

export default function Header() {
  return (
    <header className="stream-header">
      <div className="stream-header__top">
        <span className="stream-header__live">
          <span className="stream-header__live-dot" aria-hidden="true" />
          LIVE
        </span>

        <LanguageSelector />
      </div>

      <div className="stream-header__titles">
        <h1 className="stream-header__title">Sunday Service</h1>
        <p className="stream-header__subtitle">
          Pastor James Carter · Grace Community Church
        </p>
      </div>
    </header>
  );
}
