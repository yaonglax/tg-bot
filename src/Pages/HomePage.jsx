import React from 'react';
import { useNavigate } from 'react-router-dom';


function HomePage() {

const navigate = useNavigate();
const toRegistration = () => {
  navigate('/registration')
}

  return (
    <div>
     <button onClick={toRegistration}>на форму регистрации</button>
    </div>
  );
}

export default HomePage;
