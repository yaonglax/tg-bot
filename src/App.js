import { useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form';
const tg = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tg.ready();
  }, [])
  const onClose = () => {
    tg.close()
  }

  return (
    <div className="form-wrapper">
      <Form />
    </div>
  );
}

export default App;
