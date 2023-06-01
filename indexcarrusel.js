var mainimg=document.querySelector("img")
    var images=["kawasaki_ninja_650_2020_3.jpg","kawayr6.webp","motos.avif"]
    var num=0

    function adelante(){
        num++;
        if(num>=images.length){
            num=0
            mainimg.src.images[num]
        }else{
            mainimg.src=images[num]
        }
 
    };
    function atras(){
        num--;
        if(num<0){
            num=images.length-1;
            mainimg.src=images[num]
         } else{
            mainimg.src=images[num]
         }

    }
    