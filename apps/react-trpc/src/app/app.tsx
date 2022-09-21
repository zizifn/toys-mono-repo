// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import './js-trpc-client'

export function App() {
  return (
    <>
      <NxWelcome title="react-trpc" />
      <div />
    </>
  );
}

export default App;
