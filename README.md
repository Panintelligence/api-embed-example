# api-embed-example
An example application to help get started with the Pi API and embedding

To try this out, grab the latest release zip file and extract the api-embed-example into Dashboard/tomcat/webapps on a test instance of the Dashboard. 

Then to get started see <a href="README.html">README.HTML</a>


The security level applied by browsers for external webapps requires additional config. 
For a real-world type test use runServer.sh (you will need NodeJS) as follows:
1. Use your hosts file to add entries for the Dashboard and this server
eg 127.0.0.1 dashboard
   127.0.0.1 myapp
2. Configure the dashboard to allow embedding from myapp
3. Update values in html files from https://localhost to https://dashboard (as well as credentials if not default)
4. Run runServer.sh or equivalent
5. Open README.HTML and try some embedding!


## Post Message API
You can use the post message functionality to control the Dashboard interface when embedding. To utilise this you will need to have the Dashboard fully configured to support embedding.

You can read detail on postmessage in general at: https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage

If you have a Dashboard embedded in an Iframe you can send the following commands and you should see the actions reflected in the interface:

| message | action |
|--|--|
| `open-drawer:left` | Opens the left hand side drawer on the view |
| `open-drawer:right` | Opens the right hand side drawer on the view |
| `close-drawer:left` | Closes the left hand side drawer on the view |
| `close-drawer:right` | Closes the right hand side drawer on the view |
| `pin-drawer:left` | Pins the left hand side drawer on the view |
| `pin-drawer:right` | Pins the right hand side drawer on the view |
| `unpin-drawer:left` | Unpins the left hand side drawer on the view |
| `unpin-drawer:right` | Unpins the right hand side drawer on the view |



