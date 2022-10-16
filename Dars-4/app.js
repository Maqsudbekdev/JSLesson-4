let people = ["Mustafo", "Maqsudbek", "Dilbaroy", "Jaloliddin", "Foruhbek", "Murtzoali", "Madina"]
console.log(people[people.length - 1]);

let boxDiv = document.querySelector(".box");
let boxBtn = document.querySelector("#btn")
let boxBtn2 = document.querySelector(".btn2")
let boxBtn3 = document.querySelector(".btn3")
let boxBtn4 = document.querySelector(".btn4")

boxBtn.addEventListener('click', () =>{
    boxDiv.style.display = "block" 
    boxDiv.style.transform(scale) = "1"
    boxBtn.style.display = "none" 
    boxBtn2.style.display = "block"
} ) 

boxBtn2.addEventListener('click', () =>{
    boxDiv.style.display = "none" 
    boxBtn2.style.display = "none"
    boxBtn.style.display = "block"

} ) 
 boxBtn3.addEventListener('click', () =>{
     boxDiv.style = "transform:scale(1.2);background:dodgerblue;display:block;"

 })

// 1- WAY
// document.body.style.margin = "0"
// boxDiv.style.width = "200px"
// boxDiv.style.height = "200px"
// boxDiv.style.backgroundColor = "dodgerblue"

// 2-WAY

// document.body.style = "margin:0; padding:0; box-sizing:border-box;"
// boxDiv.style = "height: 200px; width: 200px; background-color: red;"


