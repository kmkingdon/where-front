const theAPI = 'https://where-server-2.herokuapp.com/events';


fetch(theAPI)
  .then(res => res.json())
  .then(findMostPopularEvent)
  .then(displayMostPopularEvent)
  .catch(console.error)


function findMostPopularEvent(obj) {
  var eventContainer = document.querySelector('#popular-event');
  for (var i = 0; i < obj.length; i++) {
    console.log(obj[i]['interest'], 'interest score???')
    if (Math.max(obj[i]['interest'])) {
      var mostPopular = obj[i];
    }
  }
  return mostPopular;
}


function displayMostPopularEvent(mostPopular) {
  var eventContainer = document.querySelector('#popular-event');
  var partyName = mostPopular['eventname'];
  var theLocation = mostPopular['location'];
  var time = mostPopular['time'];
  var price = mostPopular['price'];
  var link = mostPopular['link'];
  return eventContainer.innerHTML = `
    <h1>what: ${partyName}</h1>
    <h2>location: ${theLocation}</h2>
    <h2>time: ${time}</h2>
    <p>price: ${price}</p>
    <a href=${link} target="_blank">More Info</a>
    `
}
