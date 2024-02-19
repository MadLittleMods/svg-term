import { load, Cast, LoadOptions } from "load-asciicast";

export { LoadOptions as LoadCastOptions };
export { Cast as LoadedCast, Frame as LoadedFrame } from "load-asciicast";;

export function loadCast(input: string, options: LoadOptions = {}): Cast {
  if (!input) {
    throw new TypeError(`svg-term.reder: missing input`);
  }

  const { width, height, idle, fps } = options;
  return load(input, {
    // eric: via https://github.com/marionebl/svg-term-cli/issues/78
    width: width ? width : undefined,
    height: height ? height : undefined,
    idle: idle ? idle / 1000 : undefined,
    fps
  });
}
