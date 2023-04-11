const modalTemplate = require('../templates/modal.html').default

export class Modal {
  private modalTemplate: HTMLElement;

  constructor(private container: string) {
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = modalTemplate;
    this.modalTemplate = modalContainer;
    this.initActionButtons();
  }

  private initActionButtons() {
    const addButton = this.modalTemplate.querySelector("#add");
    const cancelButton = this.modalTemplate.querySelector("#cancel");
    const closeButton = this.modalTemplate.querySelector("#close");
    addButton.addEventListener("click", (e: Event) => {
      this.hideModal();
    });
    cancelButton.addEventListener("click", () => {
      this.hideModal();
    });
    closeButton.addEventListener("click", () => {
      this.hideModal();
    });
  }

  openModal() {
    this.modalTemplate
      .querySelector("#addTaskModal")
      .classList.remove("hidden");
    this.render();
  }

  hideModal() {
    this.modalTemplate.querySelector("#addTaskModal").classList.add("hidden");
    this.render();
  }

  private render() {
    document.querySelector(this.container).append(this.modalTemplate);
  }
}
