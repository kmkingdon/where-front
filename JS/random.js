const theAPI = 'https://where-server-2.herokuapp.com/events';


fetch(theAPI)
  .then(res => res.json())
  .then(findMostPopularEvent)
  .then(displayMostPopularEvent)
  .catch(console.error)


function findMostPopularEvent(obj) {
  var eventContainer = document.querySelector('#popular-event');
  for (var i = 0; i < obj.length; i++) {
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
    <h2>what: ${partyName}</h2>
    <h3>location: ${theLocation}</h3>
    <h3>time: ${time}</h3>
    <p>price: $ ${price}</p>
    <a href=${link} target="_blank">More Info</a>
    `
}
