import type { Service } from "./types";

export function useService(): Service {
  return {
    title: "Sunday Service",
    speaker: "Pastor James Carter",
    church: "Grace Community Church",
    isLive: true,
  };
}
