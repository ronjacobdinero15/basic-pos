const payBtn = document.getElementById('payBtn')

payBtn.addEventListener('click', () => {
  let total = 0
  let selectionContainers = document.querySelectorAll('.selectionContainer')
  let paidAmount = parseInt(document.getElementById('payAmount').value)

  selectionContainers.forEach(container => {
    let selection = container.querySelector('.selection').value
    let quantity = container.querySelector('.quantity').value
    total += parseInt(selection) * parseInt(quantity)
  })

  alertOrder(paidAmount, total)
})

function alertOrder(paidAmount, total) {
  if ((isNaN(paidAmount) && isNaN(total)) || total === 0) {
    alert('Enter cash amount and specify order quantity')
  } else if (isNaN(paidAmount)) {
    alert('Enter cash amount')
    return
  } else if (isNaN(total) || total === 0) {
    alert('Please specify order quantity')
    return
  } else {
    if (paidAmount < total) {
      alert(`Short of $${total - paidAmount}`)
    } else {
      let change = paidAmount - total
      alert(`Order successful, change: $${change}`)
    }
  }
}
