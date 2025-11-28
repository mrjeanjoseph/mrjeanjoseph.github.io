(function () {
    // Minimal sunrise/sunset calculation using NOAA algorithm approximation
    // Source adapted from public domain formulas
    function toRadians(deg) { return deg * Math.PI / 180; }
    function toDegrees(rad) { return rad * 180 / Math.PI; }
    function dayOfYear(d) {
        var start = new Date(d.getFullYear(), 0, 0);
        var diff = d - start + (start.getTimezoneOffset() - d.getTimezoneOffset()) * 60000;
        return Math.floor(diff / 86400000);
    }
    function solarDeclination(N) {
        return 0.40927971 * Math.sin(2 * Math.PI / 365 * (N - 81));
    }
    function equationOfTime(N) {
        return 9.87 * Math.sin(2 * 2 * Math.PI / 365 * N) - 7.53 * Math.cos(2 * Math.PI / 365 * N) - 1.5 * Math.sin(2 * Math.PI / 365 * N);
    }
    function hourAngle(lat, decl) {
        var cosH = (Math.cos(toRadians(90.833)) / (Math.cos(toRadians(lat)) * Math.cos(decl))) - Math.tan(toRadians(lat)) * Math.tan(decl);
        // Clamp to [-1,1]
        cosH = Math.max(-1, Math.min(1, cosH));
        return Math.acos(cosH);
    }
    function sunriseSunset(date, lat, lng) {
        var N = dayOfYear(date);
        var decl = solarDeclination(N);
        var eqt = equationOfTime(N); // minutes
        var H = hourAngle(lat, decl); // radians
        var tzOffset = -date.getTimezoneOffset() / 60; // hours
        // Solar noon in local time
        var solarNoon = (720 - 4 * lng - eqt) / 60; // hours
        var delta = toDegrees(H) * 4 / 60; // hours difference
        var sunriseHour = solarNoon - delta;
        var sunsetHour = solarNoon + delta;
        function toDate(hour) {
            var h = Math.floor(hour);
            var m = Math.floor((hour - h) * 60);
            var s = Math.floor(((hour - h) * 60 - m) * 60);
            var d = new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m, s);
            return d;
        }
        return { sunrise: toDate(sunriseHour), sunset: toDate(sunsetHour) };
    }

    function setThemeBySun(lat, lng) {
        var now = new Date();
        var ss = sunriseSunset(now, lat, lng);
        var isNight = now < ss.sunrise || now > ss.sunset;
        document.body.classList.toggle('dark-mode', isNight);
    }

    function fallback() {
        // Fallback: day 7:00-19:00 local
        var now = new Date();
        var h = now.getHours();
        var isNight = !(h >= 7 && h < 19);
        document.body.classList.toggle('dark-mode', isNight);
    }

    function init() {
        if (!('geolocation' in navigator)) {
            fallback();
            return;
        }
        navigator.geolocation.getCurrentPosition(function (pos) {
            var lat = pos.coords.latitude;
            var lng = pos.coords.longitude;
            try { setThemeBySun(lat, lng); } catch (e) { fallback(); }
        }, function () { fallback(); }, { timeout: 3000 });
    }

    // Run early at page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
