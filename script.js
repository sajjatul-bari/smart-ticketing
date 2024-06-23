function setBacgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-green-500");
}
let clickCount = 0;
function clickButtonPress(event) {
  //player click
  const playerPressed = event.target.innerHTML;
  console.log(playerPressed);
  const tableBody = document.getElementById("table-body");
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${playerPressed}</td>
                  <td>Economy</td>
                  <td>550</td>`;
  tableBody.appendChild(tr);
  setBacgroundColor(playerPressed);

  clickCount++;
  console.log(`Click count: ${clickCount}`);
  const clickTicket = document.getElementById("click-ticket");
  clickTicket.innerHTML = clickCount;

  if (clickCount >= 5) {
    alert("your seat is full fill");
  }

  const price = 550;
  const totalPrice = clickCount * 550;
  console.log(totalPrice);

  const totalTicPrice = document.getElementById("total-price");
  totalTicPrice.innerHTML = totalPrice;

  let finalDiscount = totalPrice;
  document
    .getElementById("input-value")
    .addEventListener("keyup", function (event) {
      const text = event.target.value;

      if (text === "Couple 20") {
        const discount20 = (totalPrice * 20) / 100;
        console.log(discount20);
        finalDiscount = totalPrice - discount20;
        console.log(finalDiscount);
      } else if (text === "NEW15") {
        const discount15 = (totalPrice * 15) / 100;
        console.log(discount15);
        finalDiscount = totalPrice - discount15;
        console.log(finalDiscount);
      } else {
        finalDiscount = totalPrice;
        console.log(finalDiscount);
      }
    });

  document.getElementById("apply").addEventListener("click", function () {
    const grandTotal = document.getElementById("grand-total");
    grandTotal.innerHTML = parseInt(finalDiscount) + " BDT";
    const inputValue = document.getElementById("input-value");
    inputValue.value = "";
  });
}

document
  .getElementById("seat-number")
  .addEventListener("click", clickButtonPress);
