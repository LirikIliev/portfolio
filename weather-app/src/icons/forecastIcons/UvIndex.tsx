const UvIndex = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
      <linearGradient
        id="b"
        x1="26.75"
        x2="37.25"
        y1="22.91"
        y2="41.09"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset=".45" stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <clipPath id="a">
        <path
          fill="none"
          d="M33.5 48.5v-9a6 6 0 016-6h17v-26h-49v49h28V53a6 6 0 01-2-4.5z"
        />
      </clipPath>
    </defs>
    <g strokeMiterlimit={10} clipPath="url(#a)">
      <circle
        cx={32}
        cy={32}
        r="10.5"
        fill="url(#b)"
        stroke="#f8af18"
        strokeWidth=".5"
      />
      <path
        fill="none"
        stroke="#fbbf24"
        strokeLinecap="round"
        strokeWidth={3}
        d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"
      >
        <animateTransform
          attributeName="transform"
          dur="45s"
          repeatCount="indefinite"
          type="rotate"
          values="0 32 32; 360 32 32"
        />
      </path>
    </g>
    <path
      fill="#374151"
      d="M41.69 46.56A1.87 1.87 0 0043 47c1.17 0 1.76-.52 1.76-1.56v-5.87a.66.66 0 01.12-.45.64.64 0 01.44-.12h1.12a.46.46 0 01.57.57v5.77A3.5 3.5 0 0146 48a4.17 4.17 0 01-3 1 4.14 4.14 0 01-3-1 3.5 3.5 0 01-1-2.68v-5.75a.46.46 0 01.57-.57h1.12a.6.6 0 01.43.12.66.66 0 01.12.45v5.83a1.47 1.47 0 00.45 1.16zM57.44 39.56l-3.17 9a.72.72 0 01-.25.38.81.81 0 01-.45.1h-1.13a.89.89 0 01-.45-.09.63.63 0 01-.24-.36l-3.19-9c-.14-.37 0-.56.37-.56h1a1.6 1.6 0 01.73.11.67.67 0 01.3.41l1.63 5.25c.06.23.13.48.19.77s.1.5.13.67v.25h.11a9.3 9.3 0 01.35-1.67l1.6-5.27a.61.61 0 01.3-.41 1.51 1.51 0 01.71-.11h1c.48-.03.6.16.46.53z"
    />
  </svg>
);

export default UvIndex;
