var data = prompt("Enter text in kebab-case");
alert(kebabTosnake(data));

function kebabTosnake(data) {
    while (true) {
        var i = data.indexOf("-");
        console.log(i);
        if (i == -1) {
            break;
        }
        else {
            data = data.slice(0, i) + "_" + data.slice(i + 1);
        }
    }

    return data;
}
function alt(data){
    // return data.replace();
}