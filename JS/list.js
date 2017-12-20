const favoriteList= document.getElementById('favorite-list');
const reset= document.getElementById('reset');
const eventList = document.querySelector(".event-list")
const submitButton = document.querySelector(".submit-button")
const url = "https://where-server-2.herokuapp.com/events"
const sceneChoice = document.querySelector(".scene-choice")
const pickCost = document.querySelector("pick-cost")
const eventsArray= [];
var chosenScene;
var chosenCost;

submitButton.onclick = pressButton();

function pressButton (){
chosenScene = sceneChoice.value
chosenCost = pickCost.value
getData();
populateList();
}

function getData (){
  fetch (url)
    .then((resp) => resp.json())
    .then(function (resp){
      eventsArray = resp.events
    .catch(console.error)
    })
}

function populateList (){
  for (i=0, i< eventsArray.length; i++){
    if (eventsArray[i].scene === chosenScene && eventsArray[i].cost === chosenCost){
    var newEventCard = document.createElement("div")
    var eventName = document.createElement("h1")
    eventName.innerText = eventsArray[i].eventname
    newEventCard.appendChild(eventName)
    var eventLocation = document.createElement("h2")
    eventLocation.innerText = eventsArray[i].eventLocation
    newEventCard.appendChild(eventLocation)
    var time = document.createElement("h3")
    time.innerText = eventsArray[i].time
    newEventCard.appendChild(time)
    var cost = document.createElement("h3")
    cost.innerText = eventsArray[i].price
    newEventCard.appendChild(cost)
    var link = document.createElement("h3")
    link.innerText = eventsArray[i].link
    newEventCard.appendChild(link)
    eventList.appendChild(newEventCard)
    }
  }
}

function saveQuestionsList() {
  for (var i = 0; i < localStorage.length; i++) {
    let listQuestion= document.createElement('li');
    let remove= document.createElement('span');
    remove.innerHTML = "remove";
    remove.className += 'remove ';
    remove.id +=  i;
    remove.addEventListener('click', removeQuestion);
    listQuestion.innerHTML= localStorage.getItem(i+1);
    listQuestion.appendChild(remove);
    listQuestion.setAttribute('id', i);
    favoriteList.appendChild(listQuestion);
  }
}

saveQuestionsList();

function removeQuestion(event){
  let questionID= event.target.id;
  questionToRemove= document.getElementById(questionID);
  favoriteList.removeChild(questionToRemove);
}

reset.addEventListener('click', resetList);

function resetList() {
  while (favoriteList.hasChildNodes()) {
      favoriteList.removeChild(favoriteList.lastChild);
  }
  localStorage.clear();
}
