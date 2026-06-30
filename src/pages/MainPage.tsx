import Header from "../widgets/header/Header";
import Transcript from "../widgets/transcript/Transcript";
import Footer from "../widgets/footer/Footer";
import { LanguageProvider } from "../shared/lib/LanguageContext";
import "./mainPage.css";

export default function Main() {
  return (
    <LanguageProvider>
      <div className="container">
        <Header />
        <Transcript />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
