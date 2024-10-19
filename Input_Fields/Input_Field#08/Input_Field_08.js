
const inputField = document.querySelector('.sliding-input');
inputField.addEventListener('mouseenter', () => { 
  inputField.focus();
});

inputField.addEventListener('mouseleave', () => { 
  inputField.blur(); 
});
