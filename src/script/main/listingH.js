var listHabits = [];
let i = 0;

addEventListener("load", ()=>{

    console.log(localStorage);
    for(let r=0;r<parseInt(localStorage.getItem("lenght"));r++){
        listHabits.push(localStorage.getItem(`${typeof(ELM)}${r}`))
    }
    
    listHabits.forEach((elm)=>{
        document.querySelector(".habit-body").append(elm);
    })
    console.log(listHabits);
});