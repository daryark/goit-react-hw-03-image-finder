import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: #212121;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  p,
h1,
h2,
h3 {
	margin-top: 0;
	margin-bottom: 0;
}
a {
	text-decoration: none;
	color: currentColor;
}
ul {
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
	list-style: none;
}
button {
	padding: 0;
	font-family: inherit;
	cursor: pointer;
}
img {
	display: block;
	max-width: 100%;
	height: auto;
}
svg {
	fill: currentColor;
}
`;
