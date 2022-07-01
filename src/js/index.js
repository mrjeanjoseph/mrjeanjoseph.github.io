const navigateTo = function (url) {
    history.pushState(null, null, url);
    router();
}

const router = async function () {
    const routes = [
        //{path: "/", view: dashboard},
    ];

    const potentialMatches = routes.map(function (route) {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }
    const view = new match.route.view();
};
window.addEventListener("popstate", router);
/*
    document.addEventListener("DOMContentLoaded", function () {
        document.body.addEventListener("click", function (event) {
            if (event.target.matches("[data-link]")) {
                event.preventDefault();
                navigateTo(event.target.href);
            }
        });
        router();
    });
*/


