const secretCode = () => {
  const pressedArray = [];
  const secretCode = process.env.SECRET_KEY; // to access the variable from .env
  const loginSignup = document.querySelector('#login-signup');
  const bodyTag = document.querySelector('#body');
  function handleSecretCode(event){
      pressedArray.push(event.key);
      pressedArray.splice(-secretCode.length-1, pressedArray.length - secretCode.length);
      if(pressedArray.join('').includes(secretCode)){
          loginSignup.style.display = 'flex';
      };
  };
  // si je suis logged, plus besoin de taper le secretCode (cf vue application.html.erb)
  if (bodyTag.dataset.logged === 'true') {
      loginSignup.style.display = 'flex';
  } else if (loginSignup && bodyTag.dataset.logged === 'false'){
      window.addEventListener('keyup', handleSecretCode);
  };
};

export{ secretCode };
