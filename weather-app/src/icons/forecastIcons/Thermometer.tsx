const Thermometer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
      <linearGradient
        id="a"
        x1="23.73"
        x2="39.18"
        y1="19.16"
        y2="45.93"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#515a69" stopOpacity=".05" />
        <stop offset=".45" stopColor="#6b7280" stopOpacity=".05" />
        <stop offset={1} stopColor="#384354" stopOpacity=".1" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="23.48"
        x2="39.43"
        y1="18.73"
        y2="46.36"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset=".45" stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
    </defs>
    <circle cx={32} cy={42} r="4.5" fill="#ef4444" />
    <path
      fill="none"
      stroke="#ef4444"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M32 27v15"
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 1; 0 0"
      />
    </path>
    <path
      fill="url(#a)"
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M39 41.9a7 7 0 11-14 0 7.12 7.12 0 013-5.83v-17a4 4 0 118 0v17a7.12 7.12 0 013 5.83zM32.5 25H36m-3.5-4H36m-3.5 8H36"
    />
    <path
      fill="#374151"
      d="M42.44 35a2 2 0 11.56-1.47 2 2 0 01-.56 1.47zm-2-.79a.89.89 0 001.26 0 .88.88 0 000-1.25.83.83 0 00-.63-.27.86.86 0 00-.63.27.89.89 0 00-.26.63.85.85 0 00.21.57zM45 32.29a3.68 3.68 0 012.61-.85c1.75 0 2.87.68 3.35 2.06a.37.37 0 01-.26.54l-.67.23a.46.46 0 01-.34 0 .49.49 0 01-.19-.28 1.79 1.79 0 00-1.89-1.13 2.13 2.13 0 00-1.46.45 1.61 1.61 0 00-.52 1.3v2.73a1.62 1.62 0 00.52 1.3 2.08 2.08 0 001.46.46 1.78 1.78 0 001.88-1.1.53.53 0 01.21-.29.5.5 0 01.33 0l.66.24a.38.38 0 01.28.54c-.49 1.38-1.61 2.07-3.37 2.07a3.68 3.68 0 01-2.6-.85 3.09 3.09 0 01-.92-2.37v-2.7a3.07 3.07 0 01.92-2.35z"
    />
  </svg>
);

export default Thermometer;
