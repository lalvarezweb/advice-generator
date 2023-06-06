function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        const adviceElement = document.getElementById('advice')
        adviceElement.textContent = `"${data.slip.advice}"`
        const adviceIDElement = document.getElementById('id-advice')
        adviceIDElement.textContent = data.slip.id
    })
    .catch(error => console.log('Petition error', error))
}

const btnAdvice = document.getElementById('btn-advice')
btnAdvice.addEventListener('click', getAdvice)
