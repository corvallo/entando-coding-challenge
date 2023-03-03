/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_FREESOUND_CLIENTID: string;
  readonly VITE_FREESOUND_API_KEY: string;
  readonly VITE_FREESOUND_API_SEARCH_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
s;
