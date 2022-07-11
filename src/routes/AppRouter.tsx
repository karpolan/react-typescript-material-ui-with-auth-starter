import { FunctionComponent, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

/**
 * Router of the Application
 */
const AppRouter: FunctionComponent<PropsWithChildren<unknown>> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppRouter;
