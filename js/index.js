requirejs.config({
    paths : {
        jquery:"jquery-1.11.2"
    }
});
require(["jquery","dialog"], function ($,Dialog) {
    $("#btn").on("click", function () {
        var settings = {
            width:"400",
            height:"400",
            title:"�ҵĵ�����",
            content:"login.html"
        };
        var dialog = new Dialog(settings);
        dialog.open();
    });

});