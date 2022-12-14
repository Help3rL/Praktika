function capitalizeFirstLetter(str) {

    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}
class footballer {
    constructor(name, surname, speed, height, age) {
        this.name = name
        this.surname = surname
        this.speed = speed
        this.height = height
        this.age = age
    }
    get getlist() {
        return {
            name: this.name,
            surname: this.surname,
            height: this.height,
            age: this.age,
            speed: this.speed
        }
    }
}

function addFootballPlayer() {
    var name = capitalizeFirstLetter(document.getElementById("playerName").value)
    var surname = capitalizeFirstLetter(document.getElementById("playerSurname").value)
    var height = document.getElementById("playerHeight").value
    var age = document.getElementById("playerAge").value
    var speed = document.getElementById("playerSpeed").value
    var player = new footballer(name, surname, speed, height, age)
    localStorage.setItem('player'+name+surname, JSON.stringify(player.getlist))
}
function loadPlayers(){
    var arr = []
    for (var i = 0; i < localStorage.length; i++){
        if (localStorage.key(i).substring(0,6) == 'player') {
            arr.push(localStorage.key(i));
        }
    }
    var temphold;
    arr.sort()
    for (var i=0; i < arr.length; i++){
        var explorer = JSON.parse(localStorage.getItem(arr[i]))
        temphold +=  '<tr><td>' + explorer.name + '</td><td>' + explorer.surname +'</td><td>'+ explorer.height+ '</td><td>'+ explorer.age+ '</td><td>'+explorer.speed+'</td></tr>'
    }
    document.getElementById("players").innerHTML = temphold
}

class car{
    constructor(carname, carspeed){
        this.carname = carname
        this.carspeed = carspeed
    }
    get getlist(){
        return {
            name: this.carname,
            speed: this.carspeed
        }
    }
    saveLocal() {
        localStorage.setItem('car'+this.carname, JSON.stringify(this.getlist))    
    }
    getLocal(){
        return JSON.parse(localStorage.getItem(this.carname))
    }
}
function createFiveCars(){
    var a = new car('Toyota',50)
    var b = new car('Mercedes',100)
    var c = new car('BMW',150)
    var d = new car('Audi',200)
    var e = new car('Renaunt',250)
    var arr = [a,b,c,d,e];
    arr.forEach(element => {
        element.saveLocal()
    });
}
function addcar(){
    var carname = capitalizeFirstLetter(document.getElementById("carName").value)
    var carSpeed = capitalizeFirstLetter(document.getElementById("carSpeed").value)
    var max = new car(carname, carSpeed)
    max.saveLocal()
}
function loadcars(){
    var arr = []
    for (var i = 0; i < localStorage.length; i++){
        if (localStorage.key(i).substring(0,3) == 'car') {
            arr.push(localStorage.key(i));
        }
    }
    var temphold;
    arr.sort()
    for (var i=0; i < arr.length; i++){
        var explorer = JSON.parse(localStorage.getItem(arr[i]))
        temphold +=  '<tr><td>' + explorer.name + '</td><td>' + explorer.speed+ '</td><td>'+ (document.getElementById("time").value * explorer.speed) + '</td><td>' + "temp" + '</td></tr>'
    }
    document.getElementById("carTable").innerHTML = temphold
}