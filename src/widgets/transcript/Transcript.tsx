import { StatusIndicator } from "../../features/status/StatusIndicator";
import "./transcript.css";

export default function Transcript() {
  return (
    <>
      <StatusIndicator />
      <h2 className="temp">
        좋은 아침입니다, 성도 여러분. 오늘 주님 앞에 나아가며 우리의 마음을
        엽시다.
      </h2>
    </>
  );
}
