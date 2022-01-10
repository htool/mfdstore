# mfdstore
mfdstore replacement for B&G Store button.

Use dns to redirect the Vulcan/Zeus to a webbrower where you host your own content.

http://mfdstore.navico.com/login/ is called by the webegine.

Some obeservations:
 - The webengine seems to be QTwebengine.
 - You need to keep an exit button on the screen (window.close()) to be able to exit the browser. 5 minutes of inactivity also works.
 - Keyboard interactions seem to lock it up (maybe due to frame)
 - Monospace fonts seem to be missing. I've included a font list that is present on the device.
 
