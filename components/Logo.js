import PropTypes from "prop-types";

const Logo = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.18 49.72">
    <g>
      <g fill={fill}>
        <path d="M1.85 15.16L3.8 16a9.22 9.22 0 01-.61 1.55c-.34 1.07-.46 1.64-.38 1.68l1 .49.82-2.72c.39.13 1 .39 1.85.76 0 .15-.3 1.06-.85 2.69.59.23 1.64.59 3.12 1.08 0 .26-.25 1.07-.63 2.43a25.11 25.11 0 01-5.63-2.12l-.82-.43c-1.16-.6-1.71-1-1.67-1a25.75 25.75 0 011.79-5.12zM4.52 11.54c1 .8 3.46 2.64 7.34 5.5.1.07-.27.73-1.08 2h-.06Q5 15 3.16 13.5a.9.9 0 01.28-.61zM9.41 6.93c1.16-.83 1.84-1.13 2-.9.69.84 1.92 3.51 3.71 8 .08.36-.23.83-.94 1.42-.52.42-.83.59-.91.49-2.57-2.15-4.73-3.87-6.5-5.17-.34-.41 0-1.2 1-2.37 1.06.83 2.35 1.89 3.87 3.2l.1-.08c-.68-1.41-1.46-2.94-2.36-4.59zM18 2.12l.84 1.93a7.82 7.82 0 01-1.38.95c-.73.52-1.07.85-1 1a1.92 1.92 0 00.11.37l.25.56h.08l2.36-1.58c.18.42.48 1 .87 1.74-.08.09-.76.54-2 1.36a.41.41 0 00-.26.58 1.65 1.65 0 01.21.38l.12.26h.09q.15-.06 2.58-1.77a11.52 11.52 0 011 1.83l.06.13a47.39 47.39 0 01-4.14 2.82c0 .05-.07.09-.18.13a11.47 11.47 0 01-2.33-3.86l-.11-.26C14.19 6.26 13.79 5 14 5a24.19 24.19 0 014-2.87zM32.68 1.16q-2.28 4.66-4.81 9.13a2.14 2.14 0 01-.5.08 1.87 1.87 0 01-1.61-1.25c.85-1.45 1.52-2.68 2-3.66a5.68 5.68 0 01-1.11-1.25c-.38-.58-.86-1.35-1.43-2.33C25.74.85 26.35.37 27 .38a17.4 17.4 0 002 2.88A22 22 0 0030.74 0a2.28 2.28 0 011.94 1.16zM37.81 10.69a4.28 4.28 0 01-1.94.34c-.23-.06-.3-1-.22-2.86a5.73 5.73 0 00-1.8-.17 16.12 16.12 0 01-1.41 2.37h-.14c-.3-.13-.8-.61-1.3-1.47a30.17 30.17 0 014-6.57 1.84 1.84 0 011.38-.57 5.69 5.69 0 011.57 0c.05.24-.03 3.18-.14 8.93zm-1.92-6.25h-.13a5.2 5.2 0 00-1 1.65h.11a7.88 7.88 0 00.95.14zM47.06 7.85a3.78 3.78 0 01-.36 1c-.59 1-1.68 1.36-3.26 1.18a18.27 18.27 0 011.09 3 .43.43 0 010 .2c-1 .61-1.62.8-2 .57l-1.3-3.66-.13.21a23 23 0 00-1.17 2.26c-.24-.07-1-.33-2.16-.8v-.06q2-3.57 2.81-4.95c1-1.68 1.64-2.44 1.85-2.32a5.61 5.61 0 013.32.91 2.38 2.38 0 011.31 2.46zm-4.63 0a1.78 1.78 0 002.15 0l.1-.17c.18-.29 0-.57-.4-.84s-1-.41-1.12-.14a6.81 6.81 0 00-.46.69zM51.58 10.07a4.59 4.59 0 01.86 5.51 7.45 7.45 0 01-1.34 1.56l-.08.07q-2.22 1.93-5.55 0a9.6 9.6 0 01-1.89-1.62v-.07q2.27-2.06 4.84-4.49l-.21-.23a.89.89 0 01-.21-.4c.56-.53 1-1 1.42-1.3l.35-.31.15-.18A6.29 6.29 0 0151.51 10zm-1.76 2.74c-.42.36-1.28 1.18-2.55 2.44a1.62 1.62 0 002.27 0l.2-.18a1.65 1.65 0 00.53-2 2.39 2.39 0 00-.29-.57zM58.18 20.33a8.37 8.37 0 01-2 .65l-.33-.69c-.33-.67-.65-.92-1-.76l-.13.06c-.21.1-.46.71-.76 1.86A3 3 0 0152.48 23c-1.44.69-2.88.15-4.36-1.64a1.26 1.26 0 01-.26-.41c0-.27.64-.71 1.74-1.3l.13-.06a4.12 4.12 0 01.67.8c.55.44 1 .59 1.28.44s.71-.88.91-2a2.5 2.5 0 011.17-1.46c1.37-.66 2.65-.06 3.87 1.78.09.18.25.49.5.91a1 1 0 01.05.27zM46.09 24.53c-.94-2.25-1.86-4.73-3.55-6.42a19.45 19.45 0 00-6.31-3.84 19.09 19.09 0 00-7.17-1.52c-2.49 0-4.82 1.07-7 2a18.43 18.43 0 00-6 3.83 18.85 18.85 0 00-4.24 5.88 18.75 18.75 0 00-1 7.15 18.62 18.62 0 001.13 7.12 19 19 0 003.94 6.12c1.69 1.69 4.11 2.46 6.35 3.39a17.54 17.54 0 006.89 1.31c2.49 0 5.14.6 7.31-.29s4.08-2.87 5.77-4.56 2.47-4 3.4-6.26 1.89-4.34 1.89-6.83a18.55 18.55 0 00-1.41-7.08zm-2.36 13.13a16 16 0 01-3.19 5.4 16.55 16.55 0 01-5.15 3.82c-1.9.78-4.14.25-6.33.25a15.66 15.66 0 01-6.13-.75 15.72 15.72 0 01-5.11-3.57 15.49 15.49 0 01-3.16-5.26c-.79-1.91-2.11-3.78-2.11-6a16.42 16.42 0 011.54-6.2A16.65 16.65 0 0117.43 20c1.49-1.49 3.69-2 5.66-2.79a15.18 15.18 0 016-1.42 15.37 15.37 0 016 1.39c2 .82 4 1.5 5.48 3A16.45 16.45 0 0144 25.4a16.18 16.18 0 011.39 6.18 15.93 15.93 0 01-1.66 6.08z" />
        <path d="M27.54 33.29l-2.15 1L14.51 29a14.31 14.31 0 00-.22 2l9.83 4-2.12.9-7.7-3.73a14.42 14.42 0 00.19 1.88l6.21 2.52-2.16 1-3.66-1.79a14.71 14.71 0 002.22 4.51l12-5.95 11.89 6a14.92 14.92 0 002.27-4.59l-3.66 1.79-2.16-1 6.21-2.52a14.6 14.6 0 00.19-1.88l-7.68 3.76-2.16-1 9.82-4a16.2 16.2 0 00-.21-2l-10.88 5.36-2.16-1 12.84-5.2a15.14 15.14 0 00-.58-1.88L29.2 31.46 15 27.08c-.1.33-.19.66-.28 1z" />
        <path d="M29.2 30.09l4.8-1.86a6 6 0 00-10 .24zM34.92 45.16a13.76 13.76 0 002.57-1.44L29 40.11l-8.49 3.56a15.2 15.2 0 002.61 1.47l5.92-2.94z" />
        <path d="M40.43 41L29 36.16 17.62 41a14.47 14.47 0 002 2l9.47-4.7 9.36 4.7a15.36 15.36 0 001.98-2zM29 44.05l-4.11 1.73a14.83 14.83 0 004.13.59 15.08 15.08 0 004.06-.57zM29.2 18.62c4 0 8 2.47 11.49 7l1.59-.62a14.78 14.78 0 00-26.82.8l1.65.51c3.45-4.97 7.72-7.69 12.09-7.69z" />
        <path d="M29.2 19.72c-3.92 0-7.79 2.44-11 6.9l1.94.6c2.56-3.65 5.72-5.67 9-5.67 2.95 0 6 1.85 8.55 5.2l1.93-.75c-3.21-4.06-6.89-6.28-10.42-6.28z" />
        <path d="M29.12 22.37c-2.9 0-5.76 1.82-8.13 5.11l1.7.52a7.3 7.3 0 0112.55-.31l1.63-.64c-2.39-3.05-5.12-4.68-7.75-4.68z" />
      </g>
    </g>
  </svg>
);

Logo.defaultProps = {
  fill: "#ffffff",
};

Logo.propTypes = {
  fill: PropTypes.string,
};

export default Logo;
