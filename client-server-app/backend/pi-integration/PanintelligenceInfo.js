class PanintelligenceInfo {
    constructor(url, adminUsername, adminPassword) {
        this.url = url;
        const host = this.url.split("://")[1].split('/')[0];
        this.host = host.split(':')[0];
        this.port = host.split(':')[1] || null;
        this.protocol = this.url.split("://")[0];
        this.credentials = {
            username: adminUsername,
            password: adminPassword
        };
    }
}

// Here we're initializing the class with a URL, an admin username and password that come from the environment variables.
// You can keep these wherever you want as long as you can get to them at runtime.
module.exports = new PanintelligenceInfo(process.env["PI_URL"], process.env["PI_USERNAME"], process.env["PI_PASSWORD"]);