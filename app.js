const API_KEY = `dde669c54dbec53c562abad52d716702`
const BASE_URL = `https://api.openweathermap.org/data/2.5`


const inp = document.querySelector('.input')
console.log(inp);
const but = document.querySelector('.button')

async function getData(city){
    const data = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`)

    const response = await data.json()

    return response;
}

const clearInput = () =>{
    let getInput = document.querySelector('.input')
    if(getInput != ''){
        getInput.value = ''
    }
}
// const deleteCard = () =>{
//     let getCard = document.querySelector('.container')
//     if(getCard != ''){
//         getCard.innerHTML = ''
//     }
// }
function klik(){
getData(inp.value).then((res) =>{
        console.log(res);
        UI(res)
        let inp = document.querySelector('.input').value
        // let container = document.querySelector('.container').innerHTML
        clearInput();
        deleteCard();
    })
}

    function UI(response){
        try{

            let container = document.querySelector('.container')
            
            let card = document.createElement('div')
            card.className = "card";

            if(container.firstChild){
                container.removeChild(container.firstChild);
            }
            
            let city = document.createElement('h2')
            city.innerHTML = response.name
            
            let icon = document.createElement('img')
            icon.src = `http://openweathermap.org/img/w/${response.weather[0].icon}.png`
            
            let temp = document.createElement('p')
            temp.innerHTML = response.main.temp
            
            let clouds = document.createElement('p')
            clouds.innerHTML  = response.clouds.all
            
            card.appendChild(city)
            card.appendChild(icon)
            card.appendChild(temp)
            card.appendChild(clouds)
            
            container.appendChild(card)
            
        } catch(e){ 
            console.log(e);
        }
    }

