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
        carousel(data.drinks);
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


let carousel = function(drinkArr){
    
    let count = 0;
    setInterval(() => {
        
        document.querySelector("h2").innerHTML = drinkArr[count].strDrink;
        document.querySelector("h3").innerHTML = drinkArr[count].strInstructions;
        document.querySelector("img").src = drinkArr[count].strDrinkThumb;
        count+=1;
        if (count >= drinkArr.length){
            count = 0;
        }
        
    }, 15000);
    
}

//PUSH HW IS TO TRY AND MAKE IT SWITCH BETWEEN ALL DRINKS RETURNED
//NON PUSH IS TO MAKE IT WITHOUT A TEMPLATE LITERAL