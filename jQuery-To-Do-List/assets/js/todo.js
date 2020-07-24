//check off specific Todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
//click on X to delete todo
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").on("keypress", function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        //create a new li and add to ul
        if($(this).val() != "")
            $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span>" + todoText + "</li>")
        $(this).val("");
    }
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
}); 