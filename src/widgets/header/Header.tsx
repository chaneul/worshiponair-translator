import LanguageSelector from "../../features/language/LanguageDropdown";
import { PulseDot } from "../../shared/icons/pulseDot/PulseDot";
import { GrayDotIcon } from "../../shared/icons/grayDot/GrayDotIcon";
import type { Service } from "../../entities/service";
import "./header.css";

export default function Header(service: Service) {
  return (
    <header className="header">
      <div className="header-top">
        <span className="header-live">
          {service.isLive ? <PulseDot /> : <GrayDotIcon />}
          {service.isLive ? "LIVE" : "OFFLINE"}
        </span>

        <LanguageSelector />
      </div>

      <div className="header-titles">
        <h1 className="header-title">{service.title}</h1>
        <p className="header-subtitle">
          {service.speaker} · {service.church}
        </p>
      </div>
    </header>
  );
}
