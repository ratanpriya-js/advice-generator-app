const adviceId =  document.querySelector('.advice-id')
const adviceText = document.querySelector('.advice-text')
const diceButton = document.querySelector('.dice-btn')

async function getAdvice() {
    try{

        diceButton.classList.add('loading');
        diceButton.disabled = true;
       
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json()
        
        const id = data.slip.id
        const advice = data.slip.advice

        adviceId.textContent = "ADVICE #" + id;
        adviceText.textContent = '"' + advice + '"';
    }
    catch(error){
        adviceText.textContent = "Something went wrong. Try again!";
    }
    finally {
        diceButton.classList.remove('loading');
        diceButton.disabled = false;
  }
}


getAdvice();

diceButton.addEventListener('click', getAdvice);