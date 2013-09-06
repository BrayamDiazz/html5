$(
  function()      
    {
        $("p").text("otra cosa");
        $("#boton1").on("click", miBoton);
    }
    
    
    
 );
   function miBoton()
   {
       // $("#p3").toggle(500);
       $("#p3").css("background-color","white");
   }


