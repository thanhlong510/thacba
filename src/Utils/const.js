const BASE_URL = import.meta.env.VITE_BASE_URL;

const DEFAULT_API_URL = "https://api.dulieuthuyloivietnam.vn/api/";

const FALLBACK_URL = import.meta.env.VITE_FALLBACK_URL || DEFAULT_API_URL;

export { BASE_URL, DEFAULT_API_URL, FALLBACK_URL };