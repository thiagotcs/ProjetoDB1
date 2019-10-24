function contar(){
    let txtnum = document.getElementById('txtnum')
    let msn = document.querySelector('div#msg')
    if(txtnum.value.length == 0){
        window.alert("[ERRO] Digite um valor!!!")
  
    }else{
        let num = Number(txtnum.value)

        for (let divisor = 2; divisor < num; divisor++){
            if(num % divisor === 0){
                 ePrimo = "não é primo"
            };
          
        };
            ePrimo = "primo"
        
        if(num % 2 == 0 && num < 10){
            res = num * 2    

            msn.innerHTML = `O número ${num} é PAR o dobro é ${res} e não é maior que 10, é ${ePrimo}`    
        }else{
            res = num * 2    
            msn.innerHTML = `O número ${num} é IMPAR o dobro é ${res} é maior que 10, é ${ePrimo}`   
        };
    };
};
    
    