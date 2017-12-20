const postURL= "https://where-server-2.herokuapp.com/add";
const form= document.querySelector('form');
const responseArea= document.getElementById('response');


form.addEventListener('submit', postForm);

function  postForm(event) {
  event.preventDefault();
  const newSubmission = new FormData(event.target);
  const submission= {
          "eventname": newSubmission.get("name"),
          "location": newSubmission.get("location"),
          "time": newSubmission.get("time"),
          "scene": newSubmission.get("scene"),
          "cost": newSubmission.get("cost"),
          "price": newSubmission.get("price"),
          "link": newSubmission.get("link"),
          "date": newSubmission.get("date"),
        }
  sendPost(submission);
};

function sendPost(submission){
  fetch(postURL, {
    method: "POST",
    body: JSON.stringify(submission),
    headers: new Headers ({
      "Content-Type": "application/json"
    })
  }).then(response => response.json())
    .then(postResponse)
    .then(setTimeout(removeResponse, 4000))
    .catch(console.error)
};

function postResponse(response) {
  let success= response;
  let newResponse= document.createTextNode(success);
  responseArea.appendChild(newResponse);
};

function  removeResponse() {
  responseArea.innerHTML= "";
};
