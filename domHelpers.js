const createElement = (tagName, textContent) => {
    const element = document.createElement(tagName);
    element.textContent = textContent;

    return element;
}

export default createElement