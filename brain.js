// navbar = document.getElementById("navbar");
// sec = document.getElementById("sec");
// work = document.getElementById("works");
// quick = document.getElementById("quick");
// snack = document.getElementById("snack");
// lunch = document.getElementById("lunch");

remainTime = document.getElementById("remainTime");
atTime = document.getElementById("atTime");
text = document.customForm;

let countdown;
function returnValue()
{
  seconds = this.dataset.value;
  // console.log(seconds);
  timer(seconds);
}

function timer(seconds)
{
  clearInterval(countdown);
  // console.log(seconds);
  const now = Date.now();   // 1990 se abhi tak ka milliseconds

  var then = now + seconds*1000; //jab timer band krna hai tab ka time in ms

  displayTimer(seconds);// yha pe chalo thaki ek second bhi late na ho
  displayEndTime(then); // yha se come back wala function chalega
  //below code is for displaying time every seconds
   countdown =  setInterval(() => {
    const secondLeft = Math.round((then - Date.now())/1000);
    // then - updated time har second ka
    // divide by 1000 to convert millisecond to second

    if(secondLeft<=0)
    {
      clearInterval(countdown);
      return;  // ye setinterval ko khatam nhi karega bas console pe kuch dikhega nhi iske liye uper wala code hai [clearinterval]
    }
    displayTimer(secondLeft);
  }, 1000);

}

// Ye function kitna der bacha hai ye batayega
function displayTimer(seconds)
{
  const minutes = Math.floor(seconds/60);
  const reamaningSecond = seconds%60;
  display =  `${minutes<10?"0":""}${minutes}:${reamaningSecond < 10?"0":""}${reamaningSecond}`
  remainTime.textContent = display;

  document.title = display;
  
}

//Ye function kitna baje ana hai ye batayega
function displayEndTime(timeStamp){
  const end = new Date(timeStamp);
  const hour = end.getHours();
  const min = end.getMinutes();
  atTime.textContent = `Be Back at ${hour>12?hour-12:hour}:${min<10?"0":""}${min}`
}



allNavbarElement = [...navbar.querySelectorAll(".same")];

allNavbarElement.forEach(element => {element.addEventListener('click',returnValue)
  
});
text.addEventListener('submit',(e)=>{
  e.preventDefault();
  // const min = this.minutes.value;
  seconds = text.textInForm.value;
  
  timer(seconds*60);
   text.reset();
})








