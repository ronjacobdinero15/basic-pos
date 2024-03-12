const clear = document.getElementById('clear')
const paidAmount = document.getElementById('payAmount')
clear.addEventListener('click', () => {
  paidAmount.value = ''
})
