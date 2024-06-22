
const form = document.getElementById('formulario');
const seuNome = document.getElementById('usuario');
const seuSaldo = document.getElementById('saldo');
const suaAposta = document.getElementById('valor');
const mensagemErro = document.querySelector ('.error');
const mensagemSucesso = document.querySelector ('.sucesso');

function validaNumero (seuSaldo,suaAposta) {
    return seuSaldo > suaAposta;    
}

form.addEventListener('submit', function(e){
    e.preventDefault();


    if (!validaNumero (seuSaldo.value,suaAposta.value)) {
        mensagemErro.innerHTML = "Ops! Voce não tem saldo suficiente para apostar esse valor.";
        mensagemErro.style.display = 'block';
        seuSaldo.style.border = '2px solid red';
        mensagemSucesso.style.display = 'none';
    }  
    else { 
        mensagemErro.style.display = 'none';
        seuSaldo.style.border = 'none';
        
        mensagemSucesso.innerHTML = "Apostas enviadas, Boa sorte!!";
        mensagemSucesso.style.display = 'block';                    
        seuSaldo.value = '';
        suaAposta.value = '';
        seuNome.value = '';
        document.getElementById('time1').checked = false; 
        document.getElementById('time2').checked = false; 
    }
})

