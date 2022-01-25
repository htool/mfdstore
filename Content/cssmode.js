async function asyncData() {
  var dayOrNight;
  try {
    const response = await fetch('http://mfdstore.navico.com:3000/signalk/v1/api/vessels/self/environment/mode/value/');
    dayOrNight = await response.json(); //extract JSON from the http response
    console.log("dayOrNight: " + dayOrNight);
  } catch (err) {
    console.log("Failed to retrieve from SignalK. Setting to day");
    dayOrNight = 'day';
  }

  var cssmode = document.createElement('link');
  cssmode.type = 'text/css';
  cssmode.rel = 'stylesheet';
  cssmode.href = '/Content/cssmode_' + dayOrNight + '.css?ver=' + Math.floor(Math.random() * 100);
  document.head.appendChild(cssmode);
}
asyncData();
