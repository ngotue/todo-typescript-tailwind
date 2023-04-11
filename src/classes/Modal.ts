import { STATUS, Task } from "./Task";
import { DataBase } from "./DataBase";

const modalTemplate = require("../templates/modal.html").default;

export class Modal {
  private modalTemplate: HTMLElement;
  private title : HTMLInputElement
  private desc : HTMLTextAreaElement
  private status: HTMLSelectElement

  constructor(private container: string) {
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = modalTemplate;
    this.modalTemplate = modalContainer;
    this.title = this.modalTemplate.querySelector("#title") as HTMLInputElement;
    this.status = this.modalTemplate.querySelector("#status") as HTMLSelectElement;
    this.desc = this.modalTemplate.querySelector("#description") as HTMLTextAreaElement;
    this.initActionButtons();
  }

  private initActionButtons() {
    const addButton = this.modalTemplate.querySelector("#add");
    const cancelButton = this.modalTemplate.querySelector("#cancel");
    const closeButton = this.modalTemplate.querySelector("#close");
    addButton.addEventListener("click", (e: Event) => {
      const submitted = this.submit();
      if (submitted) {
        this.title.value = ''
        this.desc.value = ''
        this.status.value = STATUS.CONCEPT
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
    this.render();
  }

  private render() {
    document.querySelector(this.container).append(this.modalTemplate);
  }

  private submit() {
    const title = this.title.value;
    const status = this.status.value;
    const desc = this.desc.value;
    if (!title || !desc) {
      alert("title or description is not defined");
      return false;
    }
    const task = new Task(title, desc, status as STATUS);
    DataBase.addToStorage(task);
    return true;
  }
}
