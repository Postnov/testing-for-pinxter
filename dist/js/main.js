/*
    Javascript files including like this:
*/

document.addEventListener('DOMContentLoaded', function() {
    var fields = document.querySelectorAll('.js-form-field'),
        bar = document.querySelector('.js-form-bar'),
        setBarField = document.querySelector('.js-set-bar-field'),
        setBarBtn = document.querySelector('.js-set-bar-btn'),
        setBar = document.querySelector('.js-set-bar'),
        saveBtn = document.querySelector('.js-form-save'),
        increaseWidth = 100 / fields.length;

    //Check fill field
    fields.forEach(function(item) {
        item.addEventListener('focusout', function() {
            this.classList.remove('valid', 'invalid')

            if (this.value.length > 0) {
                this.classList.add('valid');
            }
            else {
                this.classList.add('invalid');
                this.placeholder = 'Заполните поле!';
            }

            var validField = document.querySelectorAll('.js-form-field.valid');
            barLineWidth = validField.length * increaseWidth;

            changeBar(bar, barLineWidth);

        });
    });


    setBarBtn.addEventListener('click', function() {
        var percent = +setBarField.value;

        if (percent < 0) {
            percent = 0;
            setBarField.value = 0;
        }

        if (percent > 100) {
            percent = 100;
            setBarField.value = 100;
        }

        changeBar(setBar, percent);
    })

}); //end load

function changeBar(barElem, value) {
    barElem.style.width = value + '%';

    barElem.classList.remove('lightgreen', 'yellow', 'green');

    if (value > 67) {
        barElem.classList.add('green');
    }else if (value > 34) {
        barElem.classList.add('lightgreen');
    }else {
        barElem.classList.add('yellow');
    }
}
