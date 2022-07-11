import { AppStoreProvider } from './store';
import { AppRouter, Routes } from './routes';
import { ErrorBoundary } from './components';
import { AppThemeProvider } from './theme';

/**
 * Root Application Component
 * @class App
 */
const App = () => {
  return (
    <ErrorBoundary name="App">
      <AppStoreProvider>
        <AppThemeProvider>
          <AppRouter>
            <Routes />
          </AppRouter>
        </AppThemeProvider>
      </AppStoreProvider>
    </ErrorBoundary>
  );
};

export default App;
