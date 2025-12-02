declare module 'vanta/dist/vanta.net.min' {
  interface VantaNetOptions {
    el: HTMLElement;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
  }

  function NET(options: VantaNetOptions): {
    destroy: () => void;
  };

  export default NET;
}

declare module 'vanta/dist/vanta.cells.min' {
  interface VantaCellsOptions {
    el: HTMLElement;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    color1?: number;
    color2?: number;
  }

  function CELLS(options: VantaCellsOptions): {
    destroy: () => void;
  };

  export default CELLS;
}