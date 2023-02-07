const thank = document.getElementById('thank');
const rateButton = document.getElementById('submit');
const rateAgain = document.getElementById('submit-btn')
const ratingCard = document.getElementById('rating1')
const rateScore = document.querySelectorAll('.form-radio-input')
const rating = document.getElementById('result')



thank.style.display = 'none';

let ratingvalue = rateScore.forEach((input) => {
    input.addEventListener('click', function() {
        ratingValue = input.value;
    })
})



rateButton.addEventListener('click', function() {
    thank.style.display = 'block';
    ratingCard.style.display = 'none';
    rating.innerHTML = "You selected " + ratingValue + " out of 5"
})

rateAgain.addEventListener('click', function() {
    thank.style.display = 'none';
    ratingCard.style.display = 'block';
})