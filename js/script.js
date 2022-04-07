
 let newsletterForm = document.getElementById('newsletter');

const validate = (event) => {
    let name = document.getElementById('txt');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let city = document.getElementById('city');
    let errors = document.getElementById('error-name');
    let errorsEmail = document.getElementById('error-email');
    let errorsPhone = document.getElementById('error-phone');
    let errorsCity = document.getElementById('error-city')
    
         errors.innerHTML = '';
   if (name.value.trim() === ''){
       name.classList.add('error');
        let errorLi = document.createElement('li');
        errorLi.innerText = 'Wpisz imię';
        errors.appendChild(errorLi);
    } else {name.classList.remove('error');}

        errorsEmail.innerHTML = '';
    if (email.value.trim() === '' || /* !email.value.includes('@')  */ !email.value.match(/^[^@\s]+@([^@\s])+$/)){
        email.classList.add('error');
        let errorLi = document.createElement('li');
        errorLi.innerText = 'example@gmail.com';
        errorsEmail.appendChild(errorLi);
    } else {email.classList.remove('error');}

        errorsPhone.innerHTML ='';
    if (phone.value.trim() === '' || phone.value.length < 6)  {
        phone.classList.add('error');
        let errorLi = document.createElement('li');
        errorLi.innerText = 'Wpisz numer telefonu';
        errorsPhone.appendChild(errorLi);
    } else {phone.classList.remove('error');}

        errorsCity.innerHTML='';
    if (city.value === "") {
         city.classList.add('error');
        let errorLi = document.createElement('li'); 
        errorLi.innerText = 'Wybierz miasto';
        errorsCity.appendChild(errorLi);
    } else {city.classList.remove('error');}
     
    if (isFormValid === false){
        event.preventDefault();
    } else {
        newsletterForm.submit();
    }

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
   
 function isFormValid(){
    const inputContainer = newsletterForm.querySelectorAll('.input-group');
    const selectGroup = newsletterForm.querySelector('.select-group');
    let result = true;
    inputContainer.forEach((container) => {
        if (container.classList.contains('error')){
            result = false
        }
    });
    if (selectGroup.classList.contains('error')){
        result = false;
    }

    return result;
 }

  newsletterForm.addEventListener('submit',validate);


/*  newsletterForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    validate();
    if (isFormValid() === true){
        newsletterForm.submit();
    }
 }); */