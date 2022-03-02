const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");

const movieSelect = document.getElementById("movie");

let ticketPrice = parseInt(movieSelect.value);

// update total and count
const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    const seatsIndex = [...selectedSeats].map((seat, index) => {
        return [...seats].indexOf(seat)
    })

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

    const selectedSeatsCount = selectedSeats.length

    count.innerText = selectedSeatsCount
    total.innerText  = selectedSeatsCount * ticketPrice
    
}
// movie select event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = parseInt(e.target.value)
    updateSelectedCount()
})

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
      e.target.classList.toggle('selected')

      updateSelectedCount()
  }
});
