//I can go with this or
$.getScript("src/js/content.js", function(){
    //alert("Running content.js");
});

//I can go with that
//$('body').append('<script type="text/javascript" src="src/js/content.js"></script>');

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



$(document).ready(function () {
    $("#toTopBtn").text("Back to top!")

    $(window).scroll(function () {
        var showAfter = 100;
        if ($(this).scrollTop() > showAfter) {
            $('#toTopBtn').fadeIn();
        } else {
            $('#toTopBtn').fadeOut();
        }
    });

    $('#toTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 200);
        return false;
    });

    function globalMessage() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
      }
});
