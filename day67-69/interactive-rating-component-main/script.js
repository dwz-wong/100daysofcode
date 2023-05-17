/*
const rating__form = document.getElementById("rating__form")
const rating_container = document.getElementById("rating__container")
const rating__item = document.querySelectorAll('.rating__item')
const rating__btn = document.getElementById("rating__btn")
const rbs = document.querySelectorAll('input[type="radio"]')
const thankyou__container = document.getElementById("thankyou__container")
const rating__result = document.getElementById("rating__result")

const ri_selected = document.getElementsByClassName("rating__item selected")

rating__btn.addEventListener('click', function(){
    if (ri_selected.length > 0) {
        rating__container.style.display = "none"
        thankyou__container.style.display = "block"
        rating__result.textContent = `You selected ${rating__form.rating.value} out of 5`
    }
})

for (let i = 0; i < rating__item.length; i++) {
    rating__item[i].addEventListener('click', function(){
        if (ri_selected.length > 0) {
            ri_selected[0].style.color = "hsl(217, 12%, 63%)"
            ri_selected[0].style.background = "hsl(213, 15%, 25%)"
            ri_selected[0].classList.remove("selected")

            rating__item[i].classList.add("selected")
            rating__item[i].style.color = "hsl(0, 0%, 100%)"
            rating__item[i].style.background = "hsl(217, 12%, 63%)"
            rbs[i].checked = true;

        } else {
            rating__item[i].classList.add("selected")
            rating__item[i].style.color = "hsl(0, 0%, 100%)"
            rating__item[i].style.background = "hsl(217, 12%, 63%)"
            rbs[i].checked = true;
        }
    })
}
*/

const rating__container = document.getElementById("rating__container")
const rating__form = document.getElementById("rating__form")
const rating__item = document.querySelectorAll('.rating__item')
const rating__result = document.getElementById("rating__result")
const thankyou__container = document.getElementById("thankyou__container")
const rbs = document.querySelectorAll('input[type="radio"]')
const ri_selected = document.getElementsByClassName("rating__item selected")

/* a submit event listener on the form */
rating__form.addEventListener('submit', (event) => {
    event.preventDefault() /* prevent default */
    let rating__form_value = rating__form.rating.value /* assign the form.rating.value to a new variable */

    if (ri_selected.length > 0) {
        rating__result.textContent = `You selected ${rating__form_value} out of 5` /* use that variable in the results */
        /* hide the form panel, show the results panel */
        rating__container.style.display = "none"
        thankyou__container.style.display = "block"
    }
})

for (let i = 0; i < rating__item.length; i++) {
    rating__item[i].addEventListener('click', function(){
        if (ri_selected.length > 0) {
            ri_selected[0].classList.remove("selected")
            rating__item[i].classList.add("selected")
            rbs[i].checked = true;
        } else {
            rating__item[i].classList.add("selected")
            rbs[i].checked = true;
        }
    })
}
