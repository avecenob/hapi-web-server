const Hapi = require("@hapi/hapi");

const init = async () => {

    const server = Hapi.server({
        port: 5000,
        host: "localhost"
    });

    server.route([
        {
            method: "GET",
            path: "/",
            handler: (request, h) => {
                return "Homepage";
            },
        },
        {
            method: "GET",
            path: "/about",
            handler: (request, h) => {
                return "About page";
            }
        }
    ])

    await server.start();
    console.log(`Server is running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {

    console.log(err);
    process.exit(1);
});

init();