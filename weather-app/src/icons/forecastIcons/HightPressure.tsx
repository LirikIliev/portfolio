const HighPressure = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path
      fill="none"
      stroke="#ef4444"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M32 44V20l-5.79 6.89L32 20l5.78 6.89"
    >
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="1.5s"
        keyTimes="0.0; 0.5; 0.9; 1.0"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 0; 0 -9; 0 -9"
      />
      <animate
        attributeName="opacity"
        dur="1.5s"
        keyTimes="0.0; 0.3; 0.8; 0.9; 1.0"
        repeatCount="indefinite"
        values="0; 1; 1; 0; 0"
      />
    </path>
  </svg>
);

export default HighPressure;