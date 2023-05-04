var listHabits = [];
var compiledHTML = "";
let i = 0;

addEventListener("load", ()=>{

    console.log(localStorage);
    for(let r=0;r<=parseInt(localStorage.getItem("lenght"));r++){
        listHabits.push(localStorage.getItem(`row${r}`))
    }
    
    listHabits.forEach((elm)=>{
        compiledHTML += elm;
    })

    $('.habit-body').append(compiledHTML);

    console.log(listHabits);
});