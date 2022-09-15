var id;
class footballer{
    constructor(name, surname, speed, height, age){
        this.name = name
        this.surname = surname
        this.speed = speed
        this.height = height
        this.age = age
    }
    get list(){
        return {name: this.name, surname: this.surname, height: this.height, age: this.age, speed: this.speed}
    }
}
function addFootballPlayer(){
    var name = document.getElementById("playerName").value
    var surname = document.getElementById("playerSurname").value
    var height = document.getElementById("playerHeight").value
    var age = document.getElementById("playerAge").value
    var speed = document.getElementById("playerSpeed").value
    var player = new footballer(name, surname, speed, height, age)
    localStorage.setItem(id, player.list())
    id++
}
