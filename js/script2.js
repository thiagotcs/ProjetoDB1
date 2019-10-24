function contar(){
    let txt = document.getElementById('txt')
    let msg = document.querySelector('div#msg')
    if(txt.value.length == 0){
        window.alert("[ERRO] Digite um Texto!!!")
  
    }else{
        
            msg.innerHTML = `O texto digitado ${txt.value} tem:<br>`
            msg.innerHTML += `O total de caracteres de texto ${txt.value.length}<br>`
            msg.innerHTML += `O total de espaço em branco no texto ${""}<br>`
            msg.innerHTML += `O total de vogais no texto ${""}`   
        };
    };
    
    