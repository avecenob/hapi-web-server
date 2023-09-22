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
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return h.response("Page not found").code(404);
        }
    }
]

module.exports = routes;