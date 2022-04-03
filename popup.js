
document.getElementById('id_Red').onclick = () => {
 
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: setBackGroundColorblack
      });
    });
  
}

  document.getElementById('id_Blue').onclick = () => {
    
      button_white=true
      button_black=false
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          function: setBackGroundColorwhite
        });
      });
    
  }


  function setBackGroundColorwhite(){
    document.querySelector('html').style.filter = "invert(0) hue-rotate(0deg)"
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(0) hue-rotate(0deg)"
    })
  }


  function setBackGroundColorblack(){
    document.querySelector('html').style.filter = "invert(1) hue-rotate(180deg)"
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
    })
  }