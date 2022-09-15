function u0Count() {
    var x = document.getElementById("mary").value
    var y = document.getElementById("jony").value
    //document.getElementById("mary").value = Number(x)++
    //document.getElementById("jony").value = Numbery++
    var mar = Number(x);
    var jon = Number(y);
    var car;
    document.getElementById('totalOut').innerHTML = mar + jon;
    if (mar - jon > 0) {
        car = "mary"
    } else if (mar - jon < 0) {
        car = "jony"
    } else if (mar - jon == 0) {
        car = "edi"
    } else {
        car = "none"
    }
    switch (car) {
        case "mary":
            document.getElementById("most").innerHTML = "Maryte"
            console.log("mar")
            break;
        case "jony":
            document.getElementById("most").innerHTML = "Jonukas"
            console.log("jon")
            break;
        case "edi":
            document.getElementById("most").innerHTML = "Jie abu atidave Editai"
            break;
        default:
            break;
    }
    console.log("mar>jon" + mar > jon)
    console.log(mar + jon)

    var fruits = ["apple", "pear", "orange", "strawberry", "Pomegranite", "Banana", "Peach", "Olive", "Pineappple", "GrapeFruit", "Melon", "Pamelo"]
    //glpat-K6itzrU-eY9Dvui96DxJ
    document.getElementById("third").innerHTML = fruits[2]
    document.getElementById("fifth").innerHTML = fruits[4]
    let temphold = "";
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i])
        temphold += "<li>" + fruits[i] + "</li>"
    }
    document.getElementById("fruitlist").innerHTML = temphold
    switch (mar + jon) {
        case 0:
            document.getElementById("totallist").innerHTML = "Deja jus obuoliu neturite"
            break;
        case 1:
            document.getElementById("totallist").innerHTML = "Jus turite tik viena obuoli"
            break;
        case 2:
            document.getElementById("totallist").innerHTML = "Jus turite pora obuoliu"
            break;
        case 3:
            document.getElementById("totallist").innerHTML = "Jus turite tris obuolius"
            break;
        case 4:
            document.getElementById("totallist").innerHTML = "Jus turite keturis obuolius"
            break;
        case 5:
            document.getElementById("totallist").innerHTML = "Jus turite penkis obuolius"
            break;
        case 6:
            document.getElementById("totallist").innerHTML = "Jus turite sesis obuolius"
            break;
        case 7:
            document.getElementById("totallist").innerHTML = "Jus turite septynis obuolius"
            break;
        case 8:
            document.getElementById("totallist").innerHTML = "Jus turite astuonis obuolius"
            break;
        case 9:
            document.getElementById("totallist").innerHTML = "Jus turite devinys obuolius"
            break;
        case 10:
            document.getElementById("totallist").innerHTML = "Jus turite desimt obuolius"
            break;
        case 11:
            document.getElementById("totallist").innerHTML = "Jus turite venuolika obuolius"
            break;
        case 12:
            document.getElementById("totallist").innerHTML = "Jus turite dvilyka obuolius"
            break;
        case 13:
            document.getElementById("totallist").innerHTML = "Jus turite trilyka obuolius"
            break;
        case 14:
            document.getElementById("totallist").innerHTML = "Jus turite keturiolika obuolius"
            break;
        case 15:
            document.getElementById("totallist").innerHTML = "Jus turite penkiolika obuolius"
            break;
        case 16:
            document.getElementById("totallist").innerHTML = "Jus turite sesiolika obuolius"
            break;
        case 17:
            document.getElementById("totallist").innerHTML = "Jus turite septiniolika obuolius"
            break;
        case 18:
            document.getElementById("totallist").innerHTML = "Jus turite astuonolika obuolius"
            break;
        case 19:
            document.getElementById("totallist").innerHTML = "Jus turite deviniolika obuolius"
            break;
        default:
            document.getElementById("totallist").innerHTML = "Jus turite 20 ar daugiau obuoliu"
    }
}
//glpat-K6itzrU-eY9Dvui96DxJ