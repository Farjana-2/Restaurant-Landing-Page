// Menu Filter
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  
  // Reservation Form Handler
  document.getElementById("reservationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
  
    const message = `Thanks, ${name}! Your table for ${guests} guest(s) on ${date} at ${time} is reserved.`;
    document.getElementById("reservationMessage").textContent = message;
  
    this.reset();
  });
  
