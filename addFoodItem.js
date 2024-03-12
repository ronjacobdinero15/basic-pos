// ADD FOOD ITEM
const foodItem = document.querySelector(".addItem");
const main = document.querySelector(".main");
foodItem.addEventListener("click", () => {
  const choice = document.createElement("div");
  choice.classList.add("selectionContainer");
  choice.innerHTML = `<label for="selection">Choice</label><br />
  <select name="selection" class="selection">
    <option value="60">Burger</option>
    <option value="50">Fries</option>
    <option value="20">Fishball</option>
    <option value="25">Kikiam</option>
  </select>
  <br /><br />

  <label for="quantity">Quantity</label><br />
  <input type="number" name="quantity" class="quantity" />`;

  const main = document.querySelector(".main");
  main.appendChild(choice);
});
