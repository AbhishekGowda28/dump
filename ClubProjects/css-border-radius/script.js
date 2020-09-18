const copy = document.getElementById("copy");
const topMarker = document.querySelector("div.marker.top input");
const bottomMarker = document.querySelector("div.marker.bottom input");
const leftMarker = document.querySelector("div.marker.left input");
const rightMarker = document.querySelector("div.marker.right input");
const parentContainer = document.getElementById("container");
const styleContainer = document.getElementById("style-container");
let text = `border-radius: ${Number(topMarker.value)}px ${Number(rightMarker.value)}px ${Number(bottomMarker.value)}px ${Number(leftMarker.value)}px;`;

styleContainer.innerText = text;

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(text);
});

parentContainer.addEventListener("input", (event) => {
    styleContainer.innerText = `
        border-radius: ${Number(topMarker.value)}px ${Number(rightMarker.value)}px ${Number(bottomMarker.value)}px ${Number(leftMarker.value)}px;
    `;
    text = styleContainer.innerText;
    parentContainer.style.borderTopLeftRadius = `${Number(topMarker.value)}px`
    parentContainer.style.borderTopRightRadius = `${Number(rightMarker.value)}px`
    parentContainer.style.borderBottomLeftRadius = `${Number(leftMarker.value)}px`
    parentContainer.style.borderBottomRightRadius = `${Number(bottomMarker.value)}px`
});


parentContainer.addEventListener("dragstart", (event) => {
    console.log("event Details", event);
    let currentValue = event.target.parentElement.style.left !== "" ? Number((event.target.parentElement.style.left).substring(0, event.target.parentElement.style.left.length - 1)) : 0;
    console.log("event.target", JSON.stringify(event.x));
    event.target.parentElement.style.left = `${currentValue + 1}%`;
});

parentContainer.addEventListener("drop", (dragEndEvent) => {
    console.log("Drag End", dragEndEvent);
});