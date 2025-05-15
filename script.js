document.addEventListener('DOMContentLoaded',function(){
   const aumentaFonteBotao = document.getElementById('aumentar-fonte');
   const diminuirFonteBotao = document.getElementById('diminuir-fonte');


   let tamanhoAtualfonte = 1;

   aumentaFonteBotao.addEventListener('click',function(){
    tamanhoAtualfonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualfonte}rem`


   })

   diminuirFonteBotao.addEventListener('click',function(){
      tamanhoAtualfonte -= 0.1;
      document.body.style.fontSize = `${tamanhoAtualfonte}rem`
  
  
     })
  

})