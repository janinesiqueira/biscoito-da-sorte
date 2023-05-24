let imgBreak = document.querySelector(".break")
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
let button = document.querySelector("button")

imgBreak.addEventListener("click", openCookie)
button.addEventListener("click", handleClick)
document.addEventListener("keydown", enter)

function openCookie(){
  toggle()

  let number = Math.round(Math.random() * 10)
  switch(number){
    case 0: 
      screen2.querySelector("p").innerText = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
      break
    case 1:
      screen2.querySelector("p").innerText =
      "Nem todos os dias são bons, mas há algo bom em cada dia."
      break
    case 2:
      screen2.querySelector("p").innerText = 
      "Siga confiante na direção dos seus sonhos. Viva a vida que imaginar."
      break
    case 3:
      screen2.querySelector("p").innerText = 
      "Faça da alegria a maior certeza da sua vida, e o tempo se encarregará de permitir que grandes momentos te aconteçam todos os dias."
      break
    case 4:
      screen2.querySelector("p").innerText = 
      "Bom dia! Independentemente do que estiver sentindo, levante-se, vista-se e saia para brilhar."
      break
    case 5:
      screen2.querySelector("p").innerText = 
      "Acredite no seu valor e prove a você mesmo que todos os sonhos são possiveis de alcançar."
      break
    case 6:
      screen2.querySelector("p").innerText = 
      "Sinta carinho, goste, adore e ame! Mas, jamais precise de alguém para te fazer feliz, além de você mesmo."
      break
    case 7:
      screen2.querySelector("p").innerText = 
      "No tempo certo, tudo dará certo."
      break
    case 8:
      screen2.querySelector("p").innerText = 
      "Atitude é uma coisa pequena que faz toda a diferença."
      break
    case 9:
      screen2.querySelector("p").innerText = 
      "A persistência pode transformar um fracasso em um sucesso extraordinário!"
      break
    case 10:
      screen2.querySelector("p").innerText = 
      "Não esiste um caminho para a felicidade. A felicidade é o caminho."
      break
    default:
      break
  }
}

function handleClick(){
  toggle()  
}

function toggle(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enter(){
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
}