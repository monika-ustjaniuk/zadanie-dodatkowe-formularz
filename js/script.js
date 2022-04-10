

const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const city = document.getElementById('city');


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    if (isValid() === true){
        form.submit();
    }
    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isNumber (e){
    var keyCode = (e.which) ? e.which : e.keyCode;

if (keyCode > 31 && (keyCode < 48 || keyCode > 57))
{
return false;
}
return true;
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const cityValue = city.value.trim();

 

    if(usernameValue === '') {
        setError(username, 'Wpisz imię');
    } else {
        setSuccess(username);
    }

    if(emailValue ==='' || !email.value.match(/^[^@\s]+@([^@\s])+$/)){
        setError(email, 'example@gmail.com');
    } else {
        setSuccess(email);
    }

    if(phoneValue ==='' || phone.value.length < 6){
        setError(phone, 'Wpisz numer telefonu');
    } else {
        setSuccess(phone);
    }

    if(cityValue === ''){
        setError(city, 'Wybierz miasto');
    } else {
        setSuccess(city);
    }

    
}

function isValid(){
    const allInputs = document.querySelectorAll('.input-control');
    let result = true
    allInputs.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        } else {
            result = true;
        }
        
    })
    return result;
}
