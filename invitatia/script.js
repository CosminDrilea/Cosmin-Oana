function openEnvelope(){
  document.querySelector('.envelope').classList.add('open');
  setTimeout(()=>{
    document.getElementById('envelope').style.display='none';
    document.getElementById('content').style.display='block';
  },1000);
}

// COUNTDOWN
const target = new Date("2026-09-05T00:00:00").getTime();
setInterval(()=>{
  const now = new Date().getTime();
  const d = target - now;
  document.getElementById("countdown").innerHTML =
    Math.floor(d/(1000*60*60*24)) + " zile";
},1000);
