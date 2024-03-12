document.addEventListener('click', e => {
  if (e.target.classList.contains('remove')) {
    const container = e.target.closest('.selectionContainer')

    if (container) {
      container.remove()
    }
  }
})
