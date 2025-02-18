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