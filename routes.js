const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Homepage";
        }
    },
    {
        method: "*",
        path: "/",
        handler: (request, h) => {
            return h.response("Page cannot be accessed with that method").code(400);
        }
    },
    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "About page";
        }
    },
    {
        method: "*",
        path: "/about",
        handler: (request, h) => {
            return h.response("Page cannot be accessed with that method").code(400);
        }
    },
    {
        method: "GET",
        path: "/hello/{name?}",
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            const { lang } = request.query;

            if (lang === "id") {
                return `Hai, ${name}`;
            }

            return `Hello, ${name}`;
        }
    },
    
    // This route is used to demonstrate request.payload usage
    {
        method: "POST",
        path: "/login",
        handler: (request, h) => {
            const { username, password } = request.payload;

            return `Hello, ${username}`;
        }
    },
    {
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return h.response("Page not found").code(404);
        }
    }
]

module.exports = routes;