const respostaUsuario = document.getElementById("respostaUsuario");
const  butaoEnvio = document.getElementById("butaoEnvio");
const quantTentativas = document.getElementById("quantTentativas");
const retornoUsuario = document.getElementById("retornoUsuario");
const retornoUsuario2 = document.getElementById("retornoUsuario2");
const numeroMaximo = 100;
const numeroMinimo = 1;
let numero;
let respostaUsuario2 = " ";
let running = true;
let numeroAleatorio = gerarNumeroAleatorio();
let contTentativas2 = 0;

function gerarNumeroAleatorio() {
return Math.floor(Math.random() * 100) + 1;
}

    butaoEnvio.onclick = function () 
    {

        retornoUsuario2.textContent = '';

        respostaUsuario2 = respostaUsuario.value;
        numeroAleatorio = Number(numeroAleatorio);

        if (respostaUsuario2 < numeroAleatorio) {
            retornoUsuario2.textContent = `Você chutou muito baixo`;
       } 
       
       else if (respostaUsuario2 > numeroAleatorio){
           retornoUsuario2.textContent = `Você chutou muito alto`;
       }

        if (respostaUsuario2 < numeroMinimo || respostaUsuario2 > numeroMaximo) {
            retornoUsuario.textContent = `Resposta Invalida!`;
            }
            else if (respostaUsuario2 != numeroAleatorio) {
                retornoUsuario.textContent = `Resposta Incorreta! Tente novamente. 😣`;
                contTentativas2 = contTentativas2 + 1;
            }
                else {
                    retornoUsuario.textContent = `Resposta certa! 🥳`;
                    numeroAleatorio = gerarNumeroAleatorio();
                }
        
                quantTentativas.textContent = `Quantidade de tentativas: ${contTentativas2}`;
    }

