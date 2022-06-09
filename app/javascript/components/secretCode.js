const secretCode = () => {
  const pressedArray = [];
  const secretCode = process.env.SECRET_KEY; // to access the variable from .env
  const loginSignup = document.querySelector('#login-signup');
  function handleSecretCode(event){
      pressedArray.push(event.key);
      pressedArray.splice(-secretCode.length-1, pressedArray.length - secretCode.length);
      if(pressedArray.join('').includes(secretCode)){
          loginSignup.style.display = 'flex';
      };
  };
  if(loginSignup){
      window.addEventListener('keyup', handleSecretCode);
  };
};

export{ secretCode };
