export const Hamburger = () => (
  <svg
    className="icon"
    width="24px"
    height="24px"
    aria-labelledby="icon-mobile-hamburger"
    role="img"
    viewBox="0 0 24 24"
  >
    <title id="icon-mobile-hamburger">Open Main Navigation</title>
    <path
      fill="currentColor"
      d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
    />
  </svg>
);

export const ChevronDown = () => (
  <svg
    className="icon marketing-nav__arrow"
    width="24px"
    height="24px"
    aria-labelledby="icon-mobile-chevron"
    aria-hidden="true"
    focusable="false"
    role="img"
    viewBox="0 0 24 24"
  >
    <title id="icon-mobile-chevron">Open List</title>
    <path
      fill="currentColor"
      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
    />
  </svg>
);

export const Magnify = ({
  classname = "",
  hidden = "false",
  focus = "false",
  id = "",
  title = "",
}) => (
  <svg
    className={classname}
    width="24px"
    height="24px"
    aria-labelledby={id}
    aria-hidden={hidden}
    focusable={focus}
    role="img"
    viewBox="0 0 24 24"
  >
    <title id={id}>{title}</title>

    <path
      fill="currentColor"
      d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
    />
  </svg>
);

export const Dark = () => (
  <svg
    className="theme-mode-toggle-svg dark-to-light"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z"
    />
  </svg>
);

export const Sun = () => (
  <svg
    className="theme-mode-toggle-svg light-to-dark"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    <path
      fill="#EBAF26"
      d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13"
    />
  </svg>
);

export const Close = () => (
  <svg
    className="icon"
    aria-labelledby="cancel"
    viewBox="0 0 24 24"
    role="img"
    focusable="true"
  >
    <title id="cancel">Close Main Navigation</title>

    <path
      fill="currentColor"
      d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"
    />
  </svg>
);
