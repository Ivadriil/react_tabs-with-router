import { createRoot } from 'react-dom/client';
import { HashRouter as Roter } from 'react-router-dom';
import { App } from './App';

const Root = () => (
  <Roter>
    <App />
  </Roter>
);

createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
