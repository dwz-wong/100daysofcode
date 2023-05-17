const ping__form = document.getElementById("ping__form")
const ping__input = document.getElementById("ping__input")
const ping__error = document.getElementById("ping__error")

ping__form.addEventListener('submit', function(event){
    event.preventDefault()
    let ping__form_value = ping__form.ping__input.value
    const regex = /^[A-Za-z0-9-_.]+@[a-z0-9]+\.[a-z0-9]+$/;

    if (ping__form_value === "") {
        ping__error.style.display = "block"
        ping__input.style.borderColor = "red"
    } else {
        if (ping__form_value.match(regex)) {
            alert(ping__form_value)

            if (ping__error.style.display === "block") {
                ping__error.style.display = "none"
                ping__input.style.borderColor = "blue"
            }
        } else {
            ping__error.style.display = "block"
            ping__input.style.borderColor = "red"
        }
    }
})


