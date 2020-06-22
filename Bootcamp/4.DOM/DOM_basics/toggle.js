var btn = document.querySelector("button");

btn.addEventListener("click", function(){
    var body = document.querySelector("body");
    if(body.style.background === "pink"){
        body.style.background = "white";
    }else {
        body.style.background = "pink";
    }
});