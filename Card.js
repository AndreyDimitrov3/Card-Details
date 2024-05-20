document.addEventListener('DOMContentLoaded', function(){

    let cardNumber = document.getElementById('cardNumber');
    let cardName = document.getElementById('cardName');
    let cardMonth = document.getElementById('cardMonth');
    let cardYear = document.getElementById('cardYear');
    let cardCvc = document.getElementById('cardCvc');
    let name = document.getElementById('name');
    let numbers = document.getElementById('numbers');
    let month = document.getElementById('month');
    let year = document.getElementById('year');
    let cvc = document.getElementById('cvc');
    let confirm = document.getElementById('confirm');
    let back = document.getElementById('back');

    document.getElementById('popup').classList.add('hidden');
    document.getElementById('main').classList.remove('hidden');
    confirm.addEventListener('click', clickListener)
    document.querySelectorAll('input').forEach(inp => {
    inp.addEventListener('focus', focusListener);
   });

    function isNameValid(){
        if(name.value === ""){    
            document.getElementById('emptyName').classList.remove('hidden');
            return false;
        } else{
            return true;
        }
    }

    function isCardValid(){
        if(numbers.value === ""){    
            document.getElementById('cardEmpty').classList.remove('hidden');
            return false;
        } else{
            return true;
        }
    }

    function isDateYearValid(){
        if(year.value === "" || month.value === ""){    
            document.getElementById('emptyDate').classList.remove('hidden');
            return false;
        } else{
            return true;
        }
    }

    function isCvcValid(){
        if(cvc.value === ""){    
            document.getElementById('emptyCvc').classList.remove('hidden');
            return false;
        } else{
            return true;
        }
    }


    function validate(){

        let nameValid = isNameValid();
        let cardValid = isCardValid();
        let  dateYearValid= isDateYearValid();
        let  cvcValid = isCvcValid();
        if (nameValid && cardValid && dateYearValid && cvcValid) return true;
        return false;
    }
        

    function focusListener(e){
        e.target.closest('.validation-parent').querySelector('.validation').classList.add('hidden');
    }

    name.addEventListener("keyup", responsiveName);
    function responsiveName() {
        cardName.innerHTML = name.value;
    }

    numbers.addEventListener("keyup", responsiveNumber);
    function responsiveNumber() {
        cardNumber.innerHTML = numbers.value;
    }

    month.addEventListener("keyup", responsiveMonth);
    function responsiveMonth() {
        cardMonth.innerHTML = month.value;
    }

    year.addEventListener("keyup", responsiveYear);
    function responsiveYear() {
        cardYear.innerHTML = year.value;
    }

    cvc.addEventListener("keyup", responsiveCvc);
    function responsiveCvc() {
        cardCvc.innerHTML = cvc.value;
    }

    
    function clickListener() {
        if (validate()){
            document.getElementById('popup').classList.remove('hidden');
            document.getElementById('main').classList.add('hidden');
        }
        else{
            return false
        }
    }

    back.addEventListener('click', clickListenerBack)

    function clickListenerBack(){
        document.getElementById('popup').classList.add('hidden');
        document.getElementById('main').classList.remove('hidden');

        name.value = "";
        numbers.value = "";
        month.value = "";
        year.value = "";
        cvc.value = "";
        cardName.innerHTML = "Jane Appleseed";
        cardNumber.innerHTML = "0000 0000 0000 0000";
        cardMonth.innerHTML = "00";
        cardYear.innerHTML = "00";
        cardCvc.innerHTML = "000";
    }

    new Cleave('#numbers', {
        creditCard: true
    })

    let arr = document.querySelectorAll(".prevent");
    arr.forEach((a) => {
        a.addEventListener("keypress", function (evt) 
        {
            if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) 
            {
                evt.preventDefault();
            }
        })
    }) 
});