let b_button = false;
let w_button = false;

//black button onclick
document.getElementById('id_black').onclick = () => {
  if(!b_button){
    b_button=true;
    w_button=false;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: setBackGroundColorblack
      });
    });
    console.log("if of black");
  }else{
    alert('background is already black!')
    console.log("else of black");
    w_button=false;
  }
}

//white button onclick
document.getElementById('id_white').onclick = () => {
  if(!w_button){
    w_button=true;
    b_button=false
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: setBackGroundColorwhite
      });
    });
    console.log("if of white");
  }else{
    alert('bachground is already white!')
    console.log("else of white");
    b_button=false;
  }
}

// blacktowhite function
function setBackGroundColorwhite() {
  document.querySelector('html').style.filter = "invert(0) hue-rotate(0deg)"
  let media = document.querySelectorAll("img, picture, video");
  media.forEach((mediaItem) => {
    mediaItem.style.filter = "invert(0) hue-rotate(0deg)"
  })
}

//whitetoblack function
function setBackGroundColorblack() {
  document.querySelector('html').style.filter = "invert(1) hue-rotate(180deg)"
  let media = document.querySelectorAll("img, picture, video");
  media.forEach((mediaItem) => {
    mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
  })
}
