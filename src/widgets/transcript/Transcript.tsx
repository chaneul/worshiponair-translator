import LiveTranslationSource from "../../features/translation/LiveTranslationSource";
import { StatusIndicator } from "../../features/status/StatusIndicator";

export default function Transcript() {
  return (
    <>
      <LiveTranslationSource>
        <StatusIndicator />
      </LiveTranslationSource>
    </>
  );
}
