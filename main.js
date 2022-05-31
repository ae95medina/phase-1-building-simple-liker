// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const likeHearts = document.querySelectorAll('like-glyph').addEventListener

function likeAction(e) {
  const heart = e.target
  mimicServerCall()
  heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
      for (const glyph of articleHearts) {
        glyph.addEventListener("click", likeCallback);
      }
    }

// element.addEventListener("click", myFunction);
// function myFunction() {
//   document.getElementsByClassName("like-glyph")
// }
// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
