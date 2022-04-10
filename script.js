const loginInfo = document.querySelector('#input-login');
const passInfo = document.querySelector('#input-password');
const submitLogPas = document.querySelector('#btn-submit');
const agreeBtn = document.querySelector('#agreement');
const submitForm = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const counterTxt = document.querySelector('#counter');
const form = document.querySelector('#evaluation-form');
// const checkList = document.getElementsByName('subject');

counterTxt.innerHTML = 500;

function LogCheck() {
  if (loginInfo.value === 'tryber@teste.com' && passInfo.value === '123456') {
    return alert('Olá, Tryber!');
  } return alert('Login ou senha inválidos.');
}

function SubmitCheck(event) {
  if (event.target.checked === true) {
    submitForm.disabled = false;
  } else {
    submitForm.disabled = true;
  }
}

// i am gonna leave the commentated nightmare in there as a reminder to code smarter and not harder
function CounterCheck() {
  const howMuchTxt = textArea.value;
  const parsedTxt = parseInt(howMuchTxt.length, 10);
  /* if (e.keyCode === 8) {
    if (parseInt(counterTxt.innerHTML, 10) <= 500) {
      counterTxt.innerHTML = 500 - parsedTxt;
      return;
    } return;
  } else if (e.keyCode === 46) {
    if (parseInt(counterTxt.innerHTML, 10) <= 500) {
      counterTxt.innerHTML = parseInt(counterTxt.innerHTML, 10)+ 1;
      return;
    } return;
  } */
  counterTxt.innerHTML = 500 - parsedTxt;
}

function FormSubmit() {
  // event.preventDefault();
  const nome = document.querySelector('#input-name');
  const sobrenome = document.querySelector('#input-lastname');
  const email = document.querySelector('#input-email');
  const house = document.querySelector('#house');
  const families = document.querySelectorAll('.thefam');
  const materias = document.querySelectorAll('.subject');
  const grades = document.querySelectorAll('.grade');
  let family;
  let firstItem = true;
  for (const key of families) {
    if (key.checked === true) family = key.value;
  }
  // adds everything up until Families
  form.innerHTML = `<p>Nome: ${nome.value} ${sobrenome.value}</p><p>Email: ${email.value}</p><p> Casa: ${house.value}</p><p>Família: ${family}</p><p>`;
  form.innerHTML += 'Matérias: ';

  for (const key of materias) {
    if (key.checked === true && firstItem === true) {
      form.innerHTML += key.value;
      firstItem = false;
    } else if (key.checked === true) {
      form.innerHTML += `, ${key.value}`;
    }
  }
  form.innerHTML += '</p>';

  for (const key of grades) {
    if (key.checked === true) {
      form.innerHTML += `<p>Avaliação: ${key.value}</p>`;
      break;
    }
  }

  form.innerHTML += `<p>Observações: ${textArea.value}</p>`;
}

// VERY important that it is a keyup and not keydown or keypress, else the function will run before the textbox is updated
textArea.addEventListener('keyup', CounterCheck);
submitLogPas.addEventListener('click', LogCheck);
agreeBtn.addEventListener('click', SubmitCheck);
submitForm.addEventListener('click', FormSubmit);
