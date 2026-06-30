import Header from "../widgets/header/Header";
import Transcript from "../widgets/transcript/Transcript";
import Footer from "../widgets/footer/Footer";
import { LanguageProvider } from "../shared/lib/LanguageContext";
import { TextSizeProvider } from "../shared/lib/TextSizeContext";
import "./mainPage.css";

export default function Main() {
  return (
    <LanguageProvider>
      <TextSizeProvider>
        <div className="container">
          <Header />
          <Transcript />
          <Footer />
        </div>
      </TextSizeProvider>
    </LanguageProvider>
  );
}
