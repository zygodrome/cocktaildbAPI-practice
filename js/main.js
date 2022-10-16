//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
let search = function(){
    let cocktailQuery = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` + document.getElementById("cocktailQuery").value;

    fetch(cocktailQuery)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector("h2").innerHTML = data.drinks[0].strDrink;
        document.querySelector("h3").innerHTML = data.drinks[0].strInstructions;
        document.querySelector("img").src = data.drinks[0].strDrinkThumb;
        
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
//PUSH HW IS TO TRY AND MAKE IT SWITCH BETWEEN ALL DRINKS RETURNED
//NON PUSH IS TO MAKE IT WITHOUT A TEMPLATE LITERAL