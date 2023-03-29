window.onload = function (){
    
    // let square = document.getElementById("myShape");
    // let button = document.getElementById("hoverBtn");
    // button.onclick = clickThis;
    
    var pika_poke_container = document.getElementById("pika-pokeball");
    var eevee_poke_container = document.getElementById("eevee-pokeball");
    var turtwig_poke_container = document.getElementById("turtwig-pokeball");

    var pokeball_1 = document.getElementById("pokeball-1"); 
    var pokeball_2 = document.getElementById("pokeball-2"); 
    var pokeball_3 = document.getElementById("pokeball-3"); 

    var pikachu = document.getElementById("pikachu");
    var eevee = document.getElementById("eevee");
    var turtwig = document.getElementById("turtwig");

    var welcome_message = document.getElementById("welcome-message");

    var pikachu_msg = document.getElementById("pikachu-message");
    var eevee_msg = document.getElementById("eevee-message");
    var turtwig_msg = document.getElementById("turtwig-message");

    var refreshButton = document.getElementById("refresh-button");

    pokeball_1.onclick = chose_pokeball_1;
    pokeball_2.onclick = chose_pokeball_2;
    pokeball_3.onclick = chose_pokeball_3;



    function chose_pokeball_1(){
        pikachu.style.display = "inline";
        pokeball_1.classList.toggle("pokeball-spin");
        pikachu.classList.toggle("grow");
        pika_poke_container.classList.toggle("move-to-left");
        pokeball_1.classList.remove("pokeball");
        welcome_message.style.display = "none";
        pikachu_msg.style.display = "block";
        pikachu_msg.classList.toggle("flip-message");
        refreshButton.style.display = "block";
        eevee_poke_container.style.display = "none";
        turtwig_poke_container.style.display = "none";
    }



    function chose_pokeball_2(){
        eevee.style.display = "inline";
        pokeball_2.classList.toggle("pokeball-spin");
        eevee.classList.toggle("grow");
        eevee_poke_container.classList.toggle("move-to-left");
        pokeball_2.classList.remove("pokeball");
        welcome_message.style.display = "none";
        eevee_msg.style.display = "block";
        eevee_msg.classList.toggle("flip-message");
        refreshButton.style.display = "block";
        pika_poke_container.style.display = "none";
        turtwig_poke_container.style.display = "none";
    }    


    function chose_pokeball_3(){
        turtwig.style.display = "inline";
        pokeball_3.classList.toggle("pokeball-spin");
        turtwig.classList.toggle("grow");
        turtwig_poke_container.classList.toggle("move-to-left");
        pokeball_3.classList.remove("pokeball");
        welcome_message.style.display = "none";
        turtwig_msg.style.display = "block";
        turtwig_msg.classList.toggle("flip-message");
        refreshButton.style.display = "block";
        pika_poke_container.style.display = "none";
        eevee_poke_container.style.display = "none";
    }




    function refreshPage(){
        window.location.reload();
    }  
    
}