type AppModeType = "production" | "development";

const APP_MODE: AppModeType = "development";

export const IS_PRODUCTION = APP_MODE !== "development" ? true : false;
