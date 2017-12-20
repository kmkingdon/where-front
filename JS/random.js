const theAPI = 'https://where-server-2.herokuapp.com/events';

// var eventName = '';
// var eventLocation = '';
// var time = '';
// var price = '';
// var link = '';

//search through the events

//filter for the highest interest score

//return that single event object
    //Math.max(integers here)
    //returns the largest non-zero num
//append the object to the page


fetch(theAPI)
  .then(res => res.json())
  .then(displayMostPopularEvent)
  .catch(console.error)


function displayMostPopularEvent(obj) {
  var eventContainer = document.querySelector('.random-event');
  let interestScore = obj['interest'];
  console.log(obj, "this is the obj");
  for (var i = 0; i < obj.length; i++) {
    console.log(obj[i]['interest'], 'interest score???')
    if (Math.max(obj[i]['interest'])) {
      console.log(obj[i], "most popular party obj")
      eventName = obj[i]['eventname'];
      eventLocation = obj[i]['location'];
      time = obj[i]['time'];
      price = obj[i]['price'];
      link = obj[i]['link'];
      console.log(link, "herrrrrrrrr");
    }
  }
}

// function displayMostPopularEvent() {
//   var eventContainer = document.querySelector('.random-event');
//   eventContainer.innerHTML = `
//     <h1>what: Kevin O'Brien's [g70] House Party</h1>
//     <h2>location: 3087 West Highland Park Place Denver</h2>
//     <h2>time: 5:30pm</h2>
//     <p>price: FREE</p>
//     <a href="https://www.facebook.com/kevin.obrien.37853734" target="_blank">More Info</a>
//     `
// }
