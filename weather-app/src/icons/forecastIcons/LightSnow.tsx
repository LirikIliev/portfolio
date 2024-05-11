const LightSnow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
  >
    <defs>
      <linearGradient
        id="a"
        x1="26.75"
        x2="37.25"
        y1="22.91"
        y2="41.09"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset=".45" stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={24}
        x2={40}
        y1="18.15"
        y2="45.85"
        xlinkHref="#a"
      />
    </defs>
    <g>
      <circle
        cx={32}
        cy={32}
        r="7.5"
        fill="none"
        stroke="url(#a)"
        strokeMiterlimit={10}
        strokeWidth={6}
      />
      <path
        fill="none"
        stroke="url(#b)"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={6}
        d="M45 39.5l-6.5-3.75m-13-7.5L19 24.5M32 17v7.5M32 47v-7.5m-6.5-3.75L19 39.5m26-15l-6.5 3.75"
      />
      <animateTransform
        attributeName="transform"
        dur="18s"
        repeatCount="indefinite"
        type="rotate"
        values="0 32 32; 360 32 32"
      />
    </g>
  </svg>
);

export default LightSnow;
