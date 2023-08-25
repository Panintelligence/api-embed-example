import { SignJWT, importPKCS8 } from "https://cdnjs.cloudflare.com/ajax/libs/jose/4.14.4/index.bundle.min.js";

const dashboard = 'http://localhost:8224';
const loginAs = 'admin';
const algorithm = 'RS512' // or RS384 or RS256 currently supported

async function loginWithJWTAndIframe(){
    await grabPrivateKeyString(async function (privateKeyString) {
        const privateKey = await importPKCS8(privateKeyString, algorithm);
        const jwt = await createJWT(privateKey, algorithm);
        await initIframe(jwt);
    })
}

async function grabPrivateKeyString(onLoad) {
    const keyFile = new XMLHttpRequest();
    keyFile.open("GET", "keys/signing_key.pkcs8", true);
    keyFile.onreadystatechange = async function() {
        if (keyFile.readyState === 4 && keyFile.status === 200) {
            const keyText = keyFile.responseText;
            onLoad(keyText);
        }
    }
    await keyFile.send();
}

async function createJWT(privateKey, algorithm){
    /* Supported claims are
    pi:dashboard_username, pi:dashboard_email and pi:dashboard_userid */
    return new SignJWT({'pi:dashboard_username': loginAs})
        .setProtectedHeader({alg: algorithm})
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(privateKey);
}

async function initIframe(jwt){
    document.getElementById("dashboardIframe").src = `${dashboard}/pi/?jwt=${jwt}`
}

loginWithJWTAndIframe();


