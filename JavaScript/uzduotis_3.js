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
    var name = document.getElementById("playerName").value
    var surname = document.getElementById("playerSurname").value
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
    for (var i=0; i < arr.length; i++){
        var explorer = JSON.parse(localStorage.getItem(arr[i]))
        temphold +=  '<tr><td>' + explorer.name + '</td><td>' + explorer.surname +'</td><td>'+ explorer.height+ '</td><td>'+ explorer.age+ '</td><td>'+explorer.speed+'</td></tr>'
    }
    document.getElementById("players").innerHTML = temphold
}