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

let queueList = [[], [], [], [], [], [], [], [], [], []];

const nameInput = document.querySelector(".nameInput");
const discordTagInput = document.querySelector(".discordTagInput");

function displayPrinter(printer, index) {
  let newPrinter = document.createElement("div");
  newPrinter.classList.add("printer");

  let newContainer = document.createElement("div");
  newContainer.classList.add("printerContainer");
  newPrinter.append(newContainer);

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
  newContainer.append(newStatus);

  let newName = document.createElement("h1");
  newName.classList.add("printerName");
  newName.innerHTML = printer.name;
  newContainer.append(newName);

  let newType = document.createElement("h2");
  newType.classList.add("printerType");
  newType.innerHTML = printer.type;
  newContainer.append(newType);

  let newList = document.createElement("ul");
  newList.classList.add("printerList");
  newContainer.append(newList);

  for (let i = 0; i < queueList[index].length; i++) {
    let queueEntry = document.createElement("li");
    queueEntry.classList.add("queueEntry");
    queueEntry.innerHTML = queueList[index][i];
    newList.append(queueEntry);
  }

  let newAddButton = document.createElement("div");
  newAddButton.classList.add("printerAddButton");
  newAddButton.setAttribute("data-printer-index", index);
  newAddButton.addEventListener("click", addToQueue);
  newContainer.append(newAddButton);

  return newPrinter;
}

function addToQueue(event) {
  if (nameInput.value.trim() != "" && discordTagInput.value.trim() != "") {
    queueList[event.target.getAttribute("data-printer-index")].push(
      nameInput.value + " - " + discordTagInput.value
    );

    refreshQueue(
      printerQueueLists[event.target.getAttribute("data-printer-index")],
      event.target.getAttribute("data-printer-index")
    );
  }
}

function refreshQueue(queue, index) {
  queue.innerHTML = "";

  for (let i = 0; i < queueList[index].length; i++) {
    let queueEntry = document.createElement("p");
    queueEntry.classList.add("queueEntry");
    queueEntry.innerHTML = queueList[index][i];
    queue.append(queueEntry);
  }
}

let main = document.querySelector(".gridContainer");

for (let i = 0; i < printers.length; i++) {
  main.append(displayPrinter(printers[i], i));
}

const printerQueueLists = Array.from(document.querySelectorAll(".printerList"));
