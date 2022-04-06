
 let newsletterForm = document.getElementById('newsletter');

const validate = (event) => {
    let name = document.getElementById('txt');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let city = document.getElementById('city');
    let errors = document.getElementById('error-name');
    let errorsEmail = document.getElementById('error-email');
    let errorsPhone = document.getElementById('error-phone');
    
    
    let placeField = false

   
    
        errors.innerHTML = '';
   if (name.value.trim() === ''){
        let errorLi = document.createElement('li');
        errorLi.innerText = 'Wpisz imię';
        errors.appendChild(errorLi);
    } 

        errorsEmail.innerHTML = '';
    if (email.value.trim() === '' || /* !email.value.includes('@')  */ !email.value.match(/^[^@\s]+@([^@\s])+$/)){
        let errorLi = document.createElement('li');
        errorLi.innerText = 'example@gmail.com';
        errorsEmail.appendChild(errorLi);
    }

        errorsPhone.innerHTML ='';
    if (phone.value.trim() === '' || phone.value.length < 6)  {
        let errorLi = document.createElement('li');
        errorLi.innerText = 'Wpisz numer telefonu';
        errorsPhone.appendChild(errorLi);
        
    }

    if (city.value === '') {
        placeField = false;
        city.classList.add('red');
    } else {
        placeField = true;
        city.classList.remove('red');
    }

   event.preventDefault()
}

function isNumber(e)
{
var keyCode = (e.which) ? e.which : e.keyCode;

if (keyCode > 31 && (keyCode < 48 || keyCode > 57))
{
return false;
}
return true;
}  
   
 



newsletterForm.addEventListener('submit', validate);