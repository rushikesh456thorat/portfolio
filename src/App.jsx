
import WelcomePage from './assets/components/welcomePage';
import './App.css';
import { useState } from 'react';
import MainPage from './assets/components/mainPage';

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  const handleAnimationEnd = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome ? (
        <WelcomePage onAnimationEnd={handleAnimationEnd} />
      ) : (
        <>
        
           <div tabIndex="-1"><MainPage/></div>
        </>
      )}
    </>
  );
}

export default App;
