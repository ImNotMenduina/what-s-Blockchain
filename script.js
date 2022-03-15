document.getElementById("hamburguer_menu").onclick = function(){
    document.getElementById("wrapper_menu").classList.toggle("openMenu") ; 
    document.getElementById("linha1").classList.toggle("openMenu");
    document.getElementById("linha2").classList.toggle("openMenu");
    document.getElementById("linha3").classList.toggle("openMenu");
    document.getElementById("mainImg").classList.toggle("openMenu");
}

var aboutUs_object = {
    "Missão" : "Nossa missão é ajudar você a entender cada termo complicado desse novo mundo tecnológico que estamos vivendo.Queremos mudar a vida da população e inserir os marginalizados em um mundo de possibilidades. Você vai ser capaz de trabalhar com a Blockchain. Tenha contato com tecnologia de alto nível, venha trabalhar conosco.",
    "História":"A YouOnBlock foi criada em 2022 pelo nosso fundador chefe Lucas Menduiña. Seguimos em busca de sucesso e reconhecimento, assim, democratizando e popularizando a blockchain."
}

var single_tabs = document.getElementsByClassName("single-tab");
for(var i=0; i<single_tabs.length; i++){
    single_tabs[i].onclick = function(){

        for(var i=0; i<single_tabs.length;i++){
            single_tabs[i].style["background-color"] = "transparent";
            single_tabs[i].style["font-weight"] = "normal";
            single_tabs[i].style["box-shadow"] = "none";
        }

        this.style["background-color"] = "black";
        this.style["font-weight"] = "bold";
        this.style["box-shadow"] = "1px 1px 5px blue";

        for(var prop in aboutUs_object){
            if(this.innerHTML == prop){
                document.getElementById("box_content").innerHTML = aboutUs_object[prop];
                document.getElementById("box_content").style["background-color"] = "black"
            }
        }

        
    }
}

let btn = document.getElementById("submit_btn");

window.setInterval(function(){


    setTimeout(function(){
        btn_resize();
    },1000)


    btn.style["transform"] = "scale(1.1)";


},2000)

function btn_resize(){
    btn.style["transform"] = "scale(1)";
}

setInterval(function(){

    setTimeout(function(){
        console.log("1sec")
    },1000);

    console.log("5sec");
},5000);

document.getElementById("participe_btn").onclick = function(){

    document.getElementById("formulario").classList.toggle("subscribe");
    this.classList.toggle("subscribe") ; 
    
}