export function createElementFromString(template: string , position: InsertPosition = 'beforeend') {
    const newElement = document.createElement('div')
    newElement.insertAdjacentHTML(position, template)
    return newElement
}