const inputNumber = document.querySelector("#number")
const buttonSearch = document.querySelector("#btn_pesquisar")
const adviceOfDay = document.querySelector("#advice")

async function showAdvice(id){

  if(id === ""){
    alert("Como voce quer um conselho sem pôr nada ai?")
    return;
  }

  try {
    const urlBase = `https://api.adviceslip.com/advice/${id}`
    const data = await fetch(urlBase)
    const response = await data.json();

    console.log(response)
    adviceOfDay.innerHTML = response.slip.advice

    limparCampo()

  } catch (error) {
    console.log("Erro ao consumir API " + error)
  }

}

function limparCampo(){
  inputNumber.value = ""
  inputNumber.focus()

}

buttonSearch.addEventListener("click", ()=> showAdvice(inputNumber.value))
