import { Modal } from './classes/Modal'

const button = document.querySelector('button')

const modal = new Modal('#modal-container')

button.addEventListener('click', () => {
    modal.openModal()
})
