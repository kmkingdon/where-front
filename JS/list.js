const eventList = document.querySelector(".event-list");
const form = document.querySelector("form");
const url = "https://where-server-2.herokuapp.com/events";
const sceneChoice = document.querySelector(".scene-choice");
const pickCost = document.querySelector(".pick-cost");

form.addEventListener("submit", pressButton);

function pressButton (event){
  event.preventDefault();
  localStorage.setItem('scene', event.target[0].value);
  localStorage.setItem('cost', event.target[1].value);
  location.href = "eventlist.html";
}

if(location.href.split("/")[3] === "eventlist.html") {
  getData();
}

function getData (){
  fetch (url)
    .then((resp) => resp.json())
    .then(fetchdata)
    .catch(console.error);
}
function fetchdata(resp){
  let scene= localStorage.getItem("scene");
  let cost= localStorage.getItem("cost");
  let sceneArray= []
  let finalArray= []


  for (var i= 0; i < resp.length; i++){
    if (resp[i].scene === scene){
      sceneArray.push(resp[i])
    }
  }

  for (var i = 0; i < sceneArray.length; i++) {
    if(sceneArray[i].cost.toString() === cost)
      finalArray.push(sceneArray[i])
  }

  for (var i = 0; i < finalArray.length; i++) {
    var newEventCard = document.createElement("div");
    var eventName = document.createElement("h1");
    eventName.innerText = finalArray[i].eventname;
    newEventCard.appendChild(eventName);
    var eventLocation = document.createElement("h2");
    eventLocation.innerText = finalArray[i].location;
    newEventCard.appendChild(eventLocation);
    var time = document.createElement("h3");
    time.innerText = finalArray[i].time;
    newEventCard.appendChild(time);
    var costDisplay = document.createElement("h3");
    costDisplay.innerText = finalArray[i].price;
    newEventCard.appendChild(costDisplay);
    var link = document.createElement("h3");
    link.innerText = finalArray[i].link;
    newEventCard.appendChild(link);
    eventList.appendChild(newEventCard);
  }
}
