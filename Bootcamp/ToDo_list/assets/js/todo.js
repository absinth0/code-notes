$(".list").on("click", "li", function () {
    $(this).toggleClass("done");
});

$(".list").on("click", ".dlt", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    })
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function (e) {
    if (e.which === 13) {
        var newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span class='dlt'><i class='far fa-trash-alt'></i></span> " + newTodo + "</li>")
    }
});

$(".plus").on("click", function(){
    $("input[type='text']").fadeToggle(200, function(){
        $(this).toggleClass("hide");
    });
});
