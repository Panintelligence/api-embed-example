# Login with JWT

## Keys
To login with JWT you need a private/public key pair. If you sign the JWT with your private key and provide
the matching public key to the Dashboard the trust is established and you can issue login tokens. You need to set
one of the supported claims:
'https://www.panintelligence.com/claims/usercode', 'https://www.panintelligence.com/claims/email'

For this demo if you haven't generated keys use keys/createKeys.sh on linux to generate test keys.

## Demo

### Prerequisites to run this demo
- Setup trusted hosts in your Dashboard to allow embedding from http://localhost:8081
- Add the public key from signing_key.pub to the Dashboard on the admin screen (strip the header and footer)
- Check that auth.js contains valid dashboard and loginAs values

### Running the demo
To run the demo use run.sh, it uses npx to launch a webserver and you can open localhost:8081 in a browser.
If all the setup is correct you should be logged in to the Dashboard as that user.

## Important Notes
- Don't expose your private key in production, it needs to be kept secret!
- The jwt creation code would typically be run server side, this is just an example!
- You can also post your JWT to `pi/auth/jwtLogin` prior to redirecting the user if you wish to not include the JWT as part of the URL
