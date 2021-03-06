var docHeight = 9999,
  windowHeight = -1,
  thisY = 0,        
  lastY = 0,
  blocker = true,
  IE = document.all?true:false;

setDocHeight = function() {
  var d = document;
  window.setTimeout(function() {
    docHeight = Math.max(
      Math.max(d.body.scrollHeight, d.documentElement.scrollHeight),
      Math.max(d.body.offsetHeight, d.documentElement.offsetHeight),
      Math.max(d.body.clientHeight, d.documentElement.clientHeight))
  }, 0);
}
setWindowHeight = function() {
  window.setTimeout(function() {
    if (document.body && document.body.offsetWidth)
      windowHeight = document.body.offsetHeight;
    if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth )
      windowHeight = document.documentElement.offsetHeight;
    if (window.innerHeight && window.innerWidth)
      windowHeight = window.innerHeight;
  }, 0);
}
getYPosition = function() {
  if (self.pageYOffset) return self.pageYOffset;
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}
infiniteScroll = function() {
  thisY = getYPosition();

  if(thisY != lastY && blocker) 
    blocker = false;

  lastY = thisY;

  if(!blocker) {
    if(windowHeight + thisY +300 >= docHeight) {
      blocker = true;
      window.scroll(0, 0);
      lastY = 0;
    } else if(thisY === 0) {
      blocker = true;
      window.scroll(0, windowHeight);
      lastY = windowHeight;
    }   
  }
}
initialize = function() {
  setDocHeight();
  setWindowHeight();
  setInterval("infiniteScroll()", 1);
}

if(IE) {
  window.attachEvent('onresize', setWindowHeight);
  window.attachEvent('onload', initialize);
} else {
  window.addEventListener('resize', setWindowHeight, false);
  window.addEventListener('load', initialize, false);
}


$( ".link1" ).click(function() {
  $( ".picA,.picC" ).toggleClass('opacity');
});
$( ".link2" ).click(function() {
  $( ".picA,.picB" ).toggleClass('opacity');
});
$( ".link3" ).click(function() {
  $( ".picB,.picC" ).toggleClass('opacity');
});

