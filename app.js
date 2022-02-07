let printers = [
    {
        status: "Ur funktion",
        name: "Bengt",
        type: "Prusa i3 MK3S"
    },
    {
        status: "Ur funktion",
        name: "Mimmi",
        type: "Prusa i3 MK3S"
    },
    {
        status: "Ledig",
        name: "Sauron",
        type: "Prusa i3 MK3S"
    },
    {
        status: "Printar...",
        name: "Dan",
        type: "Prusa i3 MK3S"
    },
    {
        status: "Ur funktion",
        name: "Hammaren",
        type: "Prusa i3 MK3S"
    },
    {
        status: "Ledig",
        name: "Pär",
        type: "Prusa i3 MK3S"
    },
    {
        status: "Ledig",
        name: "Fredrik",
        type: "Ultimaker 3"
    },
    {
        status: "Printar...",
        name: "Åke",
        type: "Ultimaker 3"
    },
    {
        status: "Ur funktion",
        name: "Amanda",
        type: "Ultimaker 2+"
    },
    {
        status: "Ledig",
        name: "Anna",
        type: "Ultimaker 2+"
    }
]

function displayPrinter(printers){
    let newPrinter = document.createElement("div");
    newPrinter.classList.add("printer");

    let newStatus = document.createElement("div");
    newStatus.classList.add("printerStatus");
    newStatus.innerHTML = printers.status;
    newPrinter.append(newStatus);

    let newName = document.createElement("h1");
    newName.classList.add("printerName");
    newName.innerHTML = printers.name;
    newPrinter.append(newName);

    let newType = document.createElement("h2");
    newType.classList.add("printerType");
    newType.innerHTML = printers.type;
    newPrinter.append(newType);

    return newPrinter
}

let main = document.querySelector(".gridContainer");

for (let i = 0; i < printers.length; i++) {   
    main.append(displayPrinter(printers[i]));
}