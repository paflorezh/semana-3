
//modal inicio y tipo usuario 
let cerrar= document.querySelectorAll(".close")[0];
let cerrar1= document.querySelectorAll(".close1")[0];

let abrirR= document.querySelectorAll(".linkRegistro")[0];
let abrirR2= document.querySelectorAll(".linkRegistro2")[0];

let abrir3=document.querySelectorAll(".cta2")[0];
let abrir4=document.querySelectorAll(".cta3")[0]
let modal= document.querySelectorAll(".modal")[0];

let modalC= document.querySelectorAll(".modal-container")[0];
//modal de interambio
//let btn_enviarSesion= document.querySelectorAll(". btn_enviarSesion")[0];



let modalI= document.querySelectorAll(".modalI")[0];
let modalCI= document.querySelectorAll(".modal-container_intercambio")[0];
let cerrarI= document.querySelectorAll(".closeI")[0];


abrir3.addEventListener("click",function(e){
    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close")
})




cerrar.addEventListener("click",function(){
    modal.classList.toggle("modal-close");
 
    
    setTimeout(function(){

        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
        

    },900)
})





abrirR.addEventListener("click",function(e){


    modal.classList.toggle("modal-close");
 
    
    setTimeout(function(){

        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
        

    },900)
    e.preventDefault();
    modalCI.style.opacity="1";
    modalCI.style.visibility="visible";
    modalI.classList.toggle("modal-closeI")
   
})

abrirR2.addEventListener("click",function(e){


     modalI.classList.toggle("modal-closeI");

    setTimeout(function(){

        modalCI.style.opacity="0";
        modalCI.style.visibility="hidden";
      

    },900)

    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close")
})



//modal de interambio


abrir4.addEventListener("click",function(e){

    e.preventDefault();
    modalCI.style.opacity="1";
    modalCI.style.visibility="visible";
    modalI.classList.toggle("modal-closeI")
   
    

})

cerrarI.addEventListener("click",function(){
    
    modalI.classList.toggle("modal-closeI");
  
    setTimeout(function(){

        modalCI.style.opacity="0";
        modalCI.style.visibility="hidden";
        
    
        

    },900)
})




