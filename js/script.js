function mCPF(cpf){
  cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return cpf
}

let formulario = document.querySelector("form");

let emailInputs = document.querySelectorAll("input[type=email]");
let senha = document.querySelector("input[type=password]");
let cpf = document.querySelector("input[name=cpf]");
let planos = document.querySelectorAll("input[name=plano]");

cpf.onkeyup = function(){
  cpf.value = mCPF(cpf.value);
}

formulario.onsubmit = function(evento){
  evento.preventDefault();
  console.log(evento);
  let inputOK = false;

  for(let input of planos){
    if(input.checked){
      inputOK = true;
    }
  }

  if((emailInputs[0].value !== emailInputs[1].value) ||
      emailInputs[0].value == ""){
    alert("Voce precisa digitar emails iguais!");
  }
  else if(senha.value.length < 8){
    alert("Sua senha precisa ter ao menos 8 caracteres");
  }
  else if(!inputOK){
    alert("Você precisa selecionar um plano"); 
  }
  else{
    formulario.submit();
  }
  
}
