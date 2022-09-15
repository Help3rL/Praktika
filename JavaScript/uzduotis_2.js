function u2task1(){
    alert('Mėgstu programuoti.Yey☺')
}
function u2task2(){
    var name = document.getElementById("name").value
    var price = document.getElementById("price").value
    var amount = document.getElementById("amount").value
    var outname = document.getElementById("u2name")
    var outtotal = document.getElementById("u2total")
    var outamount = document.getElementById("u2amount")

    outname.innerHTML = name
    outamount.innerHTML = amount;
    outtotal.innerHTML = Number(price) * Number(amount);
}
function u2task4(){
    var heroes = ["Caffeine","Bullfrog","Super Pooper","Platypus","Captain Puggleface","Twizzler","Lemon Lime","Fatigue","Ardent Sloth","Koala Man","Root Canal","Senor Fluffy Socks","McMuscles","Captain Crunch","Squirt","The Math Whisperer","Elaborate Man","Fast Forward","Plucky Duck","Home Boy","Torpid","Super Snail","High Fructose","The Masked Mama","Aardvark","The Bulk","Calliope","Anesthesia","Flash Fry","Sardine","Fighting Frito","Sasquatch","Wombat","Flouride","Fly Swatter","Ant Acid","Nutritious","Big Tuna","Super Noodle","Indegestion","Influenza","Quinoa","Captain Shenanigans","Turducken","The Furry Wonder"]
    var ourput = document.getElementById("heros")
    var temphold;
    var j;
    heroes.forEach(element => {
        if(i==0){
            temphold += "<li class=\"bluetext\">"+element+"</li>"
            i++
        }else{
            temphold += "<li class=\"whitetext\">"+element+"</li>"
            i--
        }
    });
    ourput.innerHTML = temphold 
}
