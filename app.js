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

  let newStatus = document.createElement("h1");
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

  let newName = document.createElement("h2");
  newName.classList.add("printerName");
  newName.innerHTML = printer.name;
  newContainer.append(newName);

  let newType = document.createElement("h3");
  newType.classList.add("printerType");
  newType.innerHTML = printer.type;
  newContainer.append(newType);

  let newList = document.createElement("ul");
  newList.classList.add("printerList");
  newContainer.append(newList);

  refreshQueue(newList, index);

  let newAddButton = document.createElement("button");
  newAddButton.classList.add("printerAddButton");
  newAddButton.classList.add("material-icons");
  newAddButton.innerHTML = "add_circle_outline";
  newAddButton.setAttribute("data-printer-index", index);
  newAddButton.setAttribute("tab-index", 0);
  newAddButton.addEventListener("click", addToQueue);
  newContainer.append(newAddButton);

  return newPrinter;
}

function addToQueue(event) {
  if (nameInput.value.trim() != "" && discordTagInput.value.trim() != "") {
    queueList[event.target.getAttribute("data-printer-index")].push(
      nameInput.value + " - " + discordTagInput.value
    );
    
    alert(false);

    refreshQueue(
      printerQueueLists[event.target.getAttribute("data-printer-index")],
      event.target.getAttribute("data-printer-index")
    );
  }
  else {
    alert(true);
  }
}

function alert(alert) {
  let alertBox = document.getElementById("alertBox");

  if (alert) {
    alertBox.classList.add("show");
  }
  else {
    alertBox.classList.remove("show");
  }
}

function refreshQueue(queue, index) {
  queue.innerHTML = "";

  for (let i = 0; i < queueList[index].length; i++) {
    let queueEntry = document.createElement("li");
    queueEntry.classList.add("queueEntry");
    
    let queueCopyButton = document.createElement("button");
    queueCopyButton.classList.add("queueButton");
    queueCopyButton.classList.add("material-icons");
    queueCopyButton.setAttribute("data-printer-index", index);
    queueCopyButton.setAttribute("data-queue-index", i);
    queueCopyButton.innerHTML = "content_copy";
    
    queueEntry.append(queueCopyButton);
    
    let queueName = document.createElement("p");
    queueName.classList.add("queueName");
    queueName.innerHTML = queueList[index][i];
    
    queueEntry.append(queueName);
    
    let queueDeleteButton = document.createElement("button");
    queueDeleteButton.classList.add("queueButton");
    queueDeleteButton.classList.add("material-icons");
    queueDeleteButton.setAttribute("data-printer-index", index);
    queueDeleteButton.setAttribute("data-queue-index", i);
    queueDeleteButton.innerHTML = "clear";
    
    queueEntry.append(queueDeleteButton);
    
    queueCopyButton.addEventListener("click", copyName);
    queueDeleteButton.addEventListener("click", deleteEntry);

    queue.append(queueEntry);
  }
}

function copyName(event) {
  navigator.clipboard.writeText(queueList[event.target.getAttribute("data-printer-index")][event.target.getAttribute("data-queue-index")]);
}

function deleteEntry(event) {
  event.target.getAttribute("data-printer-index")
  queueList[event.target.getAttribute("data-printer-index")].splice(event.target.getAttribute("data-queue-index"), 1);
  refreshQueue(printerQueueLists[event.target.getAttribute("data-printer-index")], event.target.getAttribute("data-printer-index"));
}

let main = document.querySelector(".flexContainer");

for (let i = 0; i < printers.length; i++) {
  main.append(displayPrinter(printers[i], i));
}

const printerQueueLists = Array.from(document.querySelectorAll(".printerList"));