export const LANGUAGES = ["Korean", "English", "French"] as const;

export type Language = (typeof LANGUAGES)[number];
