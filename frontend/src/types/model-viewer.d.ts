// Allows usage of <model-viewer> in JSX/TSX
declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      autoRotate?: boolean | string;
      cameraControls?: boolean | string;
      ar?: boolean | string;
      style?: React.CSSProperties;
    };
  }
}
