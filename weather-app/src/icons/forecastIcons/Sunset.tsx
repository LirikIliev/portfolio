const Sunset = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
      <linearGradient
        id="b"
        x1="26.75"
        x2="37.25"
        y1="29.91"
        y2="48.09"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbbf24" />
        <stop offset=".45" stopColor="#fbbf24" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <clipPath id="a">
        <path fill="none" d="M0 7.5h64v32H0z" />
      </clipPath>
    </defs>
    <g strokeMiterlimit={10} clipPath="url(#a)">
      <circle
        cx={32}
        cy={39}
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
        d="M32 22.71V16.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 54.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 39H9.5m45 0h-6.21"
      >
        <animateTransform
          attributeName="transform"
          dur="45s"
          repeatCount="indefinite"
          type="rotate"
          values="0 32 39; 360 32 39"
        />
      </path>
    </g>
    <path
      fill="none"
      stroke="#374151"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 42.5h11l5 4.5 5-4.5h11"
    />
  </svg>
);

export default Sunset;
