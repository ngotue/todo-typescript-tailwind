import { createElementFromString } from "../utils/functions";
import { DataBase } from "./DataBase";
import { Modal } from "./Modal";
import { STATUS, Task } from "./Task";

const itemTemplate = require("../templates/item.html").default;
const statusList = Object.values(STATUS);

export class Item {
  private template: HTMLDivElement;
  private deleteButton: HTMLButtonElement;
  private left: HTMLButtonElement;
  private right: HTMLButtonElement;
  private title: HTMLHeadingElement;

  constructor(private task: Task) {
    this.template = createElementFromString(itemTemplate);
    this.initActionButtons();
    this.template.querySelector("h1")!.innerHTML = this.task.title;
    this.template.querySelector("p")!.innerHTML = this.task.desc;
  }

  private initActionButtons() {
    this.deleteButton = this.template.querySelector("button[delete]");
    this.title = this.template.querySelector("h1");
    this.left = this.template.querySelector("button[left]");
    this.right = this.template.querySelector("button[right]");

    this.deleteButton.addEventListener("click", (e) => {
      DataBase.delete(this.task);
      alert(`task ${this.task.title} was removed`);
      location.reload();
    });
    this.title.addEventListener("click", () => {
      const modal = new Modal("#modal-container", this.task);
      modal.openModal();
    });
    this.left.addEventListener("click", () => {
      const step = statusList.indexOf(this.task.status);
      if (step > 0) {
        DataBase.delete(this.task);
        this.task.status = statusList[step - 1];
        DataBase.upsert(this.task);
        location.reload();
      }
    });
    this.right.addEventListener("click", () => {
      const step = statusList.indexOf(this.task.status);
      if (step < 3) {
        DataBase.delete(this.task);
        this.task.status = statusList[step + 1];
        DataBase.upsert(this.task);
        location.reload();
      }
    });
  }

  render(parentElement: HTMLElement) {
    if (this.task.status === STATUS.CONCEPT) this.left.classList.add("hidden");
    if (this.task.status === STATUS.COMPLETED)
      this.right.classList.add("hidden");
    return parentElement.appendChild(this.template);
  }
}
