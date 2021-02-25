import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { ThemeProvider } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
    </ThemeProvider>
  );
}

export default MyApp;
