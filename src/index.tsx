import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import ThemeContextProvider from './app/providers/ThemeContext/ui/ThemeProvider';
import './shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
