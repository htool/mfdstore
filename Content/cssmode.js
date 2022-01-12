async function asyncData() {
  const response = await fetch('http://mfdstore.navico.com:3000/signalk/v1/api/vessels/self/environment/mode/value/');
  const dayOrNight = await response.json(); //extract JSON from the http response
  console.log("dayOrNight: " + dayOrNight);
  var cssmode = document.createElement('link');
  cssmode.type = 'text/css';
  cssmode.rel = 'stylesheet';
  cssmode.href = '/Content/cssmode_' + dayOrNight + '.css?ver=' + Math.floor(Math.random() * 100);
  document.head.appendChild(cssmode);
}
asyncData();
