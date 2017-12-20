const theAPI = 'https://where-server-2.herokuapp.com/events';

var partyName = '';
var theLocation = '';
var time = '';
var price = '';
var link = '';

//search through the events

//filter for the highest interest score

//return that single event object
    //Math.max(integers here)
    //returns the largest non-zero num
//append the object to the page


fetch(theAPI)
  .then(res => res.json())
  .then(findMostPopularEvent)
  .then(displayMostPopularEvent)
  .catch(console.error)


function findMostPopularEvent(obj) {
  var eventContainer = document.querySelector('#popular-event');
  // let interestScore = obj['interest'];
  console.log(obj, "this is the obj");
  for (var i = 0; i < obj.length; i++) {
    console.log(obj[i]['interest'], 'interest score???')
    if (Math.max(obj[i]['interest'])) {
      console.log(obj[i], "most popular party obj")
      // var partyName = obj[i]['eventname'];
      // var theLocation = obj[i]['location'];
      // var time = obj[i]['time'];
      // var price = obj[i]['price'];
      // var link = obj[i]['link'];
      var mostPopular = obj[i];
      console.log(mostPopular, "return obj that meets req");
      return mostPopular;
    }
  }
}

function displayMostPopularEvent(mostPopular) {
  console.log(mostPopular, "this is the single obj");
  var eventContainer = document.querySelector('#popular-event');
  return eventContainer.innerHTML = `
    <h1>what: Kevin O'Brien's [g70] House Party</h1>
    <h2>location: ${theLocation}</h2>
    <h2>time: 5:30pm</h2>
    <p>price: FREE</p>
    <a href="https://www.facebook.com/kevin.obrien.37853734" target="_blank">More Info</a>
    `
}
