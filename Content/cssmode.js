  const http = require('http');
  http.get('http://localhost:3000/signalk/v1/api/vessels/self/environment/mode/value/', (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      cssmode = data.replace(/['" ]+/g, '');
      console.log("cssmode: " + cssmode);
    });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  document.getElementsByTagName("head")[0].appendChild('<link href="/Content/${cssmode}.css" rel="stylesheet" type="text/css" />');
