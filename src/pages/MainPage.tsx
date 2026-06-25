import Header from "../widgets/header/Header";
import Transcript from "../widgets/transcript/Transcript";
import "./mainPage.css";

export default function Main() {
  return (
    <>
      <div className="container">
        <Header />
        <Transcript />
      </div>
    </>
  );
}
