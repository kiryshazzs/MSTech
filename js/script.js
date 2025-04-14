let feedback = document.querySelector('.feedback-form')
let nameUser = document.querySelector('#name')
let emailUser = document.querySelector('#email')
let btnForm = document.querySelector('.feedback-form__btn')
let errorName = document.querySelector('#error-name')
let errorEmail = document.querySelector('#error-mail')
let errorCheckbox = document.querySelector('#error-checkbox')
let checkbox = document.querySelector('.feedback-form__checkbox')
let success = document.querySelector('#success')


btnForm.addEventListener('click', (e) => {
  e.preventDefault();

  let nameValue = nameUser.value.trim();
  let emailValue = emailUser.value.trim();
  let checkboxChecked = checkbox.checked

  if (!nameValue) {
    errorName.textContent = 'Please enter your name';
    errorName.classList.add('active');
  } else if (nameValue.length < 4) {
    errorName.textContent = 'The name must contain at least 4 characters'
    errorName.classList.add('active')
  } else {
    errorName.textContent = '.'
    errorName.classList.add('error')
  }

  if(!emailValue) {
    errorEmail.textContent = 'Please enter your email'
    errorEmail.classList.add('active')
  } else {
    errorEmail.textContent = '.'
    errorEmail.classList.add('error')
  }

  const emailPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
  if(!emailValue) {
    errorEmail.textContent = 'Please enter your email'
    errorEmail.classList.add('active')
  } else if (!emailPattern.test(emailValue)) {
    errorEmail.classList.add('error')
    errorEmail.textContent = 'Email is invalid'
  }

  if (!checkboxChecked) {
    errorCheckbox.textContent = 'You must accept the privacy policy'
    errorCheckbox.classList.add('active')
  } else {
    errorCheckbox.textContent = '.'
    errorCheckbox.classList.add('error')
  }

  if(nameValue && emailValue && checkboxChecked) {
    feedback.classList.add('success')
    success.classList.add('success-active')

    setTimeout(() => {
      feedback.classList.remove('success')
      success.classList.remove('success-active')
    }, 3000);

    nameUser.value = ''
    emailUser.value = ''
    checkbox.checked = false
  }
})