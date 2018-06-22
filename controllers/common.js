
exports.setRoutes = function (next) {

    var NA = this,

        route = NA.webconfig.routes;

      route["/content.html"] = "content.htm";

      next();
};
