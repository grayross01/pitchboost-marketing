/** Where the home page's buttons lead. */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
export const SIGNUP_URL = `${APP_URL}/signup`;
/** Signing up to redesign a file: the app opens on the upload step. */
export const SIGNUP_REBUILD = `${APP_URL}/signup?intent=rebuild`;
export const TEMPLATES_URL = `${APP_URL}/templates`;
