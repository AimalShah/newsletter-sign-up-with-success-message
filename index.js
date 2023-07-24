const submitBtn = document.getElementById('submit');
const form = document.querySelector('.form-section')
const msgSucces =  document.querySelector('.msg-success');
const input    = document.getElementById('email')

console.log(input)

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


const validate = () => {
  const result = document.getElementById('result');
  const email = document.getElementById('email').value;
  result.textContent = '';

  if (validateEmail(email)) {
    form.style.display= "none";
    msgSucces.style.display= "block";
  } else {
    result.textContent ='Your email is invalid.';
    result.style.color = 'red';
  }
  return false;
};
submitBtn.addEventListener('click', validate)

