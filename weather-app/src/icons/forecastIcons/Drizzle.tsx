const Drizzle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
  >
    <defs>
      <linearGradient
        id="b"
        x1="22.56"
        x2="39.2"
        y1="21.96"
        y2="50.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset=".45" stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
      <linearGradient
        id="a"
        x1="23.31"
        x2="24.69"
        y1="44.3"
        y2="46.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#4286ee" />
        <stop offset=".45" stopColor="#4286ee" />
        <stop offset={1} stopColor="#0950bc" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="30.31"
        x2="31.69"
        y1="44.3"
        y2="46.7"
        xlinkHref="#a"
      />
      <linearGradient
        id="d"
        x1="37.31"
        x2="38.69"
        y1="44.3"
        y2="46.7"
        xlinkHref="#a"
      />
    </defs>
    <path
      fill="url(#b)"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth=".5"
      d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
    />
    <path
      fill="none"
      stroke="url(#c)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M24.08 45.01l-.16.98"
    >
      <animateTransform
        attributeName="transform"
        dur="1.5s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        dur="1.5s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#d)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M31.08 45.01l-.16.98"
    >
      <animateTransform
        attributeName="transform"
        begin="-0.5s"
        dur="1.5s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.5s"
        dur="1.5s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#e)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M38.08 45.01l-.16.98"
    >
      <animateTransform
        attributeName="transform"
        begin="-1s"
        dur="1.5s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-1s"
        dur="1.5s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </path>
  </svg>
);

export default Drizzle;
