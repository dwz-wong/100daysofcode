let arr = []

function ratingChecked(getBtnID) {
    if (arr.length === 1) {

        if (getBtnID !== arr[0]) {
            document.getElementById(arr[0]).style.color = "hsl(216, 12%, 54%)"
            document.getElementById(arr[0]).style.background = "hsl(213, 15%, 21%)"
            arr.pop()

            document.getElementById(getBtnID).style.color = "hsl(0, 0%, 100%)"
            document.getElementById(getBtnID).style.background = "hsl(216, 12%, 54%)"
            arr.push(getBtnID)
        }
        else if (getBtnID === arr[0]) {
            document.getElementById(getBtnID).style.color = "hsl(216, 12%, 54%)"
            document.getElementById(getBtnID).style.background = "hsl(213, 15%, 21%)"
            arr.pop()
        }

    } else {
        arr.push(getBtnID)
        document.getElementById(getBtnID).style.color = "hsl(0, 0%, 100%)"
        document.getElementById(getBtnID).style.background = "hsl(216, 12%, 54%)"
    }
}

function submitRating() {
    if (arr.length === 1) {
        let value = document.getElementById(arr[0]).textContent

        document.getElementById("rating__container").style.display = "none"

        document.getElementById("thankyou__rating-selected").textContent = 
        `You selected ${value} out of 5`

        document.getElementById("thankyou__container").style.display = "block"
    }
}
