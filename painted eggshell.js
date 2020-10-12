var e, i;

e = document.getElementById("control")

i = 0;

e.onclick = function(){
  
  if (i == 0){
      alert("wulalaala");
      i++;
  } else if (i == 1){
      alert("wululululu");
      i++;
  } else {
      alert("wuwuwuwuwuw");
      i = 0;
  }
  
  return false;

}
