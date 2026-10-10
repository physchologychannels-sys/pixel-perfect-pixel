/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Subfolder prefix (e.g. "/portfolio-website") set only by the GitHub Pages build. */
  readonly VITE_BASE_PATH?: string;
}
