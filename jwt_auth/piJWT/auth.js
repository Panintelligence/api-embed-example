import {SignJWT, importPKCS8} from "https://cdnjs.cloudflare.com/ajax/libs/jose/4.14.4/index.bundle.min.js";

const dashboard = 'https://localhost:8224';
const algorithm = 'RS512'; // or RS384 or RS256 currently supported
const cookieName = "cookieName=test"; // An optional query parameter that defines the name of the cookie to be used for the session

export async function loginWithJWTAndIframe(usercode) {
    await grabPrivateKeyString(async function (privateKeyString) {
        const privateKey = await importPKCS8(privateKeyString, algorithm);
        const jwt = await createJWT(privateKey, algorithm, usercode);
        await initIframe(jwt);
    })
}

async function grabPrivateKeyString(onLoad) {
    const keyFile = new XMLHttpRequest();
    keyFile.open("GET", "keys/signing_key.pkcs8", true);
    keyFile.onreadystatechange = async function () {
        if (keyFile.readyState === 4 && keyFile.status === 200) {
            const keyText = keyFile.responseText;
            onLoad(keyText);
        }
    };

    keyFile.send();
}

async function createJWT(privateKey, algorithm, usercode) {
    // All claims are namespaced to 'https://www.panintelligence.com/claims/'
    // Available authentication claims: usercode, email
    // Additional claims: userSyncPayload (see https://panintelligence.atlassian.net/wiki/spaces/PD/pages/1664516098/Auto+User+Sync)
    return new SignJWT({'https://www.panintelligence.com/claims/usercode': usercode})
        .setProtectedHeader({alg: algorithm})
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(privateKey);
}

async function initIframe(jwt) {
    document.getElementById("dashboardIframe").src = `${dashboard}/pi/?jwt=${jwt}&${cookieName}`;
}
