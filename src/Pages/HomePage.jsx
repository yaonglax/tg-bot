import React from 'react';
import { useNavigate } from 'react-router-dom';


function HomePage() {

const navigate = useNavigate();
const toRegistration = () => {
  navigate('/registration')
}
const toSignIn = () => {
  navigate('/signin')
}

  return (
    <div>
     <button onClick={toRegistration}>Заключить договор</button>
     <button onClick={toSignIn}>Войти как клиент ТТК</button>
    </div>
  );
}

export default HomePage;
