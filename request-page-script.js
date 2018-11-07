function validate_form (){
  valid = true;

        if ( document.myForm.name.value == "" || document.myForm.company_name.value == "" || document.myForm.surname.value == "" 
             || document.myForm.position.value == "" ||  document.myForm.email.value == ""
             || document.myForm.telephone_number.value == "" || document.myForm.interesting_theme.value == "")
        {
                alert ( "Пожалуйста заполните поле 'Ваше имя'." );
                valid = false;
        }

        if (!/Ali/.test(document.myForm.name.value)){
        	alert ( "Напишите имя Ali" );
            valid = false;
        }

        if (!/\+?[0-9]{11}/.test(document.myForm.telephone_number.value)){
        	alert ( "Проверьте правильность ввода номера" );
            valid = false;
        }

        if (!/[a-z A-Z]{4,35}@[a-zA-Z]{4,35}.[a-z A-Z]{2,8}/.test(document.myForm.email.value)){
        	alert ( "Проверьте правильность ввода адреса почтового ящика" );
            valid = false;
        }
        return valid;
}