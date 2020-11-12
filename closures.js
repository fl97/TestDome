function registerHandlers() {
    var as = document.getElementsByTagName('a');
    for (var i = 0; i < as.length; i++) {
        as[i].onclick = function (i) {
            return function () {
                alert(i);
                return false;
            }
        }(i);
    }
}