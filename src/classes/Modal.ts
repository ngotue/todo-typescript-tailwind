import { STATUS, Task } from "./Task";
import { DataBase } from "./DataBase";

const modalTemplate = require("../templates/modal.html").default;

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
      const submitted = this.submit();
      if (submitted) {
        this.hideModal();
      }
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
    console.log('rerenderred')
    this.render();
  }

  private render() {
    document.querySelector(this.container).append(this.modalTemplate);
  }

  private submit() {
    const title = document.querySelector("#title") as HTMLInputElement;
    const status = document.querySelector("#status") as HTMLSelectElement;
    const desc = document.querySelector("#description") as HTMLTextAreaElement;
    if (!title.value || !desc.value) {
      alert("title or description is not defined");
      return false;
    }
    const task = new Task(title.value, desc.value, status.value as STATUS);
    DataBase.addToStorage(task);
    return true;
  }
}
