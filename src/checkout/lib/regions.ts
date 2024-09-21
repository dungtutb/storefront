export const locales = ["vi-VN"] as const;

export const DEFAULT_LOCALE = "vi-VN";

export type Locale = (typeof locales)[number];
