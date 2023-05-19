const popup = document.querySelector('.introduction__image')
const modal = document.querySelector('.modal')
const modalImage = document.querySelector('.modal__img')
popup.addEventListener('click', e=> {
    modal.classList.toggle('_active')
})
if (modal) {
    modal.addEventListener('click', e=> {
        modal.classList.remove('_active')
    })
    modalImage.addEventListener('click', e=> {
        e.stopPropagation()
        e.preventDefault()
    })
}
