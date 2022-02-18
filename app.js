let printers = [
  {
    status: 2,
    name: "Bengt",
    type: "Prusa i3 MK3S",
  },
  {
    status: 2,
    name: "Mimmi",
    type: "Prusa i3 MK3S",
  },
  {
    status: 0,
    name: "Sauron",
    type: "Prusa i3 MK3S",
  },
  {
    status: 1,
    name: "Dan",
    type: "Prusa i3 MK3S",
  },
  {
    status: 2,
    name: "Hammaren",
    type: "Prusa i3 MK3S",
  },
  {
    status: 0,
    name: "Pär",
    type: "Prusa i3 MK3S",
  },
  {
    status: 0,
    name: "Fredrik",
    type: "Ultimaker 3",
  },
  {
    status: 1,
    name: "Åke",
    type: "Ultimaker 3",
  },
  {
    status: 2,
    name: "Amanda",
    type: "Ultimaker 2+",
  },
  {
    status: 0,
    name: "Anna",
    type: "Ultimaker 2+",
  },
];

let queueList = [
  ["hej", "då", "gustaf"],
  [],
  ["kebab", "pizza", "la", "grande"],
  [],
  [],
  [],
  ["poggers"],
  [],
  [],
  [],
];

function displayPrinter(printer, index) {
  let newPrinter = document.createElement("div");
  newPrinter.classList.add("printer");

  let newStatus = document.createElement("div");
  newStatus.classList.add("printerStatus");
  switch (printer.status) {
    case 0:
      newStatus.innerHTML = "Ledig";
      newStatus.classList.add("green");
      break;
    case 1:
      newStatus.innerHTML = "Printar...";
      newStatus.classList.add("blue");
      break;
    case 2:
      newStatus.innerHTML = "Ur funktion";
      newStatus.classList.add("red");
      break;

    default:
      break;
  }
  newPrinter.append(newStatus);

  let newName = document.createElement("h1");
  newName.classList.add("printerName");
  newName.innerHTML = printer.name;
  newPrinter.append(newName);

  let newType = document.createElement("h2");
  newType.classList.add("printerType");
  newType.innerHTML = printer.type;
  newPrinter.append(newType);

  let newList = document.createElement("ul");
  newList.classList.add("printerList");
  newPrinter.append(newList);

  for (let i = 0; i < queueList[index].length; i++) {
    let queueEntry = document.createElement("p");
    queueEntry.classList.add("queueEntry");
    queueEntry.innerHTML = queueList[index][i];
    newList.append(queueEntry);
  }

  let newButtonContainer = document.createElement("div");
  newButtonContainer.classList.add("printerButtonContainer");
  newPrinter.append(newButtonContainer);
  
  let newAddButton = document.createElement("button");
  newAddButton.classList.add("printerAddButton");
  newAddButton.innerHTML = "+";
  newButtonContainer.append(newAddButton);

  return newPrinter;
}

let main = document.querySelector(".gridContainer");

for (let i = 0; i < printers.length; i++) {
  main.append(displayPrinter(printers[i], i));
}

const printerStatusEl = document.querySelector("[data-printer-status]");
printerStatusEl.addEventListener("change", reflectPrinterStatusChange);

function reflectPrinterStatusChange(event) {
  console.log(event.target.value);
}
