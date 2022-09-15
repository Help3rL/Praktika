function task1(){
    var taski1 
    taski1= document.getElementById("moku")
    taski1.innerHTML = "Valio pavyko"
    taski1.style.backgroundColor = "green"
    taski1.style.width = "300px"
    taski1.style.height = "300px"
    taski1.style.textAlign = "center"
}
function task2(){
    var taski2 
    taski2= document.getElementById("moku1");
    taski2.innerHTML = "Valio pavyko<br>";
    taski2.style.backgroundColor = "green";
    taski2.style.width = "300px";
    taski2.style.height = "300px";
    taski2.style.textAlign="center";

    var button = document.createElement("BUTTON");
    var buttontext = document.createTextNode("PressToRemove");
    button.appendChild(buttontext);
    button.id = "spaudaliukas"
    taski2.appendChild(button)

    button.onclick = function(){
        taski2.innerHTML = "";
        taski2.style.backgroundColor = "";
        taski2.style.width = "";
        taski2.style.height = "";
        taski2.style.textAlign="";
    }
}
var i = 0;
function task3(){
    var taski3 = document.getElementById("iframe")
    if (i == 0){
        taski3.innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jfKfPfyJRdk?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
        i++;
    } else if (i == 1){
        taski3.innerHTML = ""
        i--;
    }
}