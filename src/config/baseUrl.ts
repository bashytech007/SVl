import { IS_PRODUCTION } from "./appMode";

const TEST_BASE_URL = "http://localhost:3500/api/v1";
const LIVE_BASE_URL = "https://svl-backend.com/api/v1";

export const BASE_URL = IS_PRODUCTION ? LIVE_BASE_URL : TEST_BASE_URL;
