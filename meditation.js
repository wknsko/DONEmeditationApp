

let duration = 10;
let typeOfSound = "beach";

function playFor2min() {
  const min10 = document.getElementById("10min");
  const min2 = document.getElementById("2min");
  const min5 = document.getElementById("5min");
  duration = 2;
  if(min10.classList.contains("active-button")) {
    min10.classList.remove("active-button");
  } else {min5.classList.remove("active-button"); }
  min2.classList.add("active-button");
  return duration;
}
function playFor5min() {
  const min10 = document.getElementById("10min");
  const min2 = document.getElementById("2min");
  const min5 = document.getElementById("5min");
  duration = 5;
  if(min10.classList.contains("active-button")) {
    min10.classList.remove("active-button");
  } else { min2.classList.remove("active-button"); }
  min5.classList.add("active-button");
  return duration;
}
function playFor10min() {
  const min10 = document.getElementById("10min");
  const min2 = document.getElementById("2min");
  const min5 = document.getElementById("5min");
  duration = 10;
  if(min5.classList.contains("active-button")) {
    min5.classList.remove("active-button");
  } else { min2.classList.remove("active-button"); }
  min10.classList.add("active-button");
  return duration;
}
function chooseRain() {
  let beach = document.getElementById("beach-butt");
  let rain = document.getElementById("rain-butt")
  typeOfSound = "rain";
  beach.classList.remove("active-butt");
  rain.classList.add("active-butt");
  return typeOfSound;


}
function chooseBeach() {
  let beach = document.getElementById("beach-butt");
  let rain = document.getElementById("rain-butt")
  typeOfSound = "rain";
  rain.classList.remove("active-butt");
  beach.classList.add("active-butt");
  typeOfSound = "beach";
  return typeOfSound;

}
function click() {
  if(document.getElementById("triangle").style.opacity === "1"){
  document.getElementById("triangle").style.opacity = "0";
  document.getElementById("pause").style.opacity = "1";
  switch(duration) {
    case 10:
  document.getElementById(typeOfSound).play();
  console.log("10");
  setTimeout(function() {
    document.getElementById(typeOfSound).pause();
    document.getElementById(typeOfSound).currentTime = 0;
  }, 600000)
     break;
     case 2:
    document.getElementById(typeOfSound).play();
    console.log("2");
    setTimeout(function() {
      document.getElementById(typeOfSound).pause();
      document.getElementById(typeOfSound).currentTime = 0;
    }, 120000)
    break;
    case 5:
    document.getElementById(typeOfSound).play();
    console.log("5");
    setTimeout(function() {
      document.getElementById(typeOfSound).pause();
      document.getElementById(typeOfSound).currentTime = 0;
    }, 300000)
    break;
   }
  console.log("a");
} else {
  document.getElementById("triangle").style.opacity = "1";
  document.getElementById("pause").style.opacity = "0";
  document.getElementById(typeOfSound).pause();
  console.log("b");
}
}
