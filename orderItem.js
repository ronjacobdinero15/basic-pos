// const payBtn = document.querySelector(".payBtn");
// payBtn.addEventListener("click", () => {
//   const selection = document.getElementById("selection").value;
//   const quantity = document.getElementById("quantity").value;

//   alert(calculateAmount(selection, quantity));
// });

// function calculateAmount(selection, quantity) {
//   return selection * quantity;
// }

// payBtn.addEventListener("click", () => {
//   let selectionContainer = document.querySelectorAll(".selectionContainer");
//   selectionContainer.forEach(() => {
//     const selection = document.getElementById("selection").value;
//     const quantity = document.getElementById("quantity").value;

//     alert(calculateAmount(selection, quantity));
//   });
// });
const payBtn = document.querySelector(".payBtn");

payBtn.addEventListener("click", () => {
  let total = 0;
  let selection = document.querySelectorAll(".selection").value;

  for (let i in selection) {
    total += selection[i];
  }
  alert(typeof selection);

  // selection.forEach((num) => {
  //   total += num;
  // });
  // alert(total);
});

class orderFood {
  constructor(selection, quantity) {
    this.selection = selection;
    this.quantity = quantity;
  }
}

new orderFood(selection, quantity);
