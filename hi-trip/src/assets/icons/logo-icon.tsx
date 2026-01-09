interface LogoProps {
  size?: number | string;
  className?: string;
}

export function LogoIcon({ size = 40, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 222 222"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <rect width="222" height="222" fill="url(#pattern0_10221_6802)" />
      <defs>
        <pattern
          id="pattern0_10221_6802"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_10221_6802"
            transform="scale(0.00149925)"
          />
        </pattern>
        <image
          id="image0_10221_6802"
          width="667"
          height="667"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..." // 기존 base64 데이터
        />
      </defs>
    </svg>
  );
}