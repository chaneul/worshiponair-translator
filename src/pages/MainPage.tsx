import Header from "../widgets/header/Header";
import Transcript from "../widgets/transcript/Transcript";
import Footer from "../widgets/footer/Footer";
import { LanguageProvider } from "../shared/lib/LanguageContext";
import { TextSizeProvider } from "../shared/lib/TextSizeContext";
import { ShowOriginalProvider } from "../shared/lib/ShowOriginalContext";
import "./mainPage.css";

export default function Main() {
  return (
    <LanguageProvider>
      <TextSizeProvider>
        <ShowOriginalProvider>
          <div className="container">
            <Header />
            <Transcript />
            <Footer />
          </div>
        </ShowOriginalProvider>
      </TextSizeProvider>
    </LanguageProvider>
  );
}
