function setBacgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-green-500");
}

let clickCount = 0;
let totalPrice = 0;
let finalDiscount = 0;

function clickButtonPress(event) {
  const playerPressed = event.target.innerHTML.trim();
  const tableBody = document.getElementById("table-body");
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${playerPressed}</td>
                  <td>Economy</td>
                  <td>550</td>`;
  tableBody.appendChild(tr);

  setBacgroundColor(playerPressed);

  clickCount++;
  const clickTicket = document.getElementById("click-ticket");
  clickTicket.innerHTML = clickCount;

  const seatLeft = document.getElementById("seat-left");
  const totalSeat = 40;
  const seatUseLeft = totalSeat - clickCount;
  seatLeft.innerHTML = seatUseLeft;

  if (clickCount >= 5) {
    alert("Your seat is full.");
  }

  totalPrice = clickCount * 550;
  const totalTicPrice = document.getElementById("total-price");
  totalTicPrice.innerHTML = totalPrice;

  applyDiscount();
}

function applyDiscount() {
  const text = document.getElementById("input-value").value.trim();

  if (text === "Couple 20") {
    const discount20 = (totalPrice * 20) / 100;
    finalDiscount = totalPrice - discount20;
  } else if (text === "NEW15") {
    const discount15 = (totalPrice * 15) / 100;
    finalDiscount = totalPrice - discount15;
  } else {
    finalDiscount = totalPrice;
  }

  const grandTotal = document.getElementById("grand-total");
  grandTotal.innerHTML = parseInt(finalDiscount) + " BDT";
}

document
  .getElementById("seat-number")
  .addEventListener("click", clickButtonPress);

document.getElementById("apply").addEventListener("click", function () {
  applyDiscount();
  document.getElementById("input-value").value = "";
});

function hideElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function sucess() {
  hideElement("main-section");
  showElement("success-section");
}
function continiue() {
  hideElement("success-section");
  showElement("main-section");
}

document
  .getElementById("next-button")
  .addEventListener("click", handleNextButtonClick);
document
  .getElementById("continue-button")
  .addEventListener("click", handleContinueButtonClick);


 