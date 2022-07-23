           
var images = ["https://eldiario.com/wp-content/uploads/2019/07/0_5Tj_q8jrcbW55pcs.jpg.webp",
"https://i.ytimg.com/vi/nKIOkmRvXMA/hqdefault.jpg", 
"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AC367DCCEE7CC343A41524B67A7A42C176D83DB8F3C8D1AECE7DD6BCCE2C6005/scale?width=1200&aspectRatio=1.78&format=jpeg" , 
"https://www.ecartelera.com/carteles/5100/5147/001_m.jpg",
 "https://zmol.cl/wp-content/uploads/2021/06/Taken.jpg"];
           
var names = ["El Rey León",
"El Diablo viste a la moda", 
"Viernes de Locos", 
"El Exorcista", 
"Busqueda implacable"];
          
var i = 0;
function update()
{
     i++;
     
     if(i > 4)
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}