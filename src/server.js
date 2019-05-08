import ganache from 'ganache-core';

export default class Server {
    app;

    constructor() {
        this.app = ganache.server({
            gasPrice: "0x00",
            mnemonic: "retreat breeze symbol primary flag heart offer submit large gain luxury rude"
        });
    }

    listen(port) {
        const { app } = this;
        app.listen(port);
        console.log(`Listening to port : ${port}`);
    }
}
