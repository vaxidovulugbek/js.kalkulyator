let ekran = document.getElementById("ekran")
// let elone = document.querySelector(".btn");
let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let six = document.querySelector("#six")
let seven = document.querySelector("#seven")
let eight = document.querySelector("#eight")
let nine = document.querySelector("#nine")
let nul = document.querySelector("#nul")
let kopaytir = document.querySelector("#kopaytir")
let bol = document.querySelector("#bol")
let qosh = document.querySelector("#qosh")
let ayir = document.querySelector("#minus")
let teng = document.querySelector("#teng")
let icons = document.querySelector("#left-chevron")


let btnmath = document.querySelector("#btn-math")

let sum = ""

one.addEventListener("click", (e) =>{
  ekran.textContent = sum
  sum += one.textContent
  // var floor = Math.floor;
  // var x = floor(parseFloat(sum));
  // console.log(x);

})

qosh.addEventListener("click", (e) =>{
  ekran.textContent = sum
  sum += qosh.textContent
})

two.addEventListener("click", (e) =>{
  ekran.textContent = sum
  sum += two.textContent
})
// console.log(`${sum} + ${sum1}`);


icons.addEventListener("click", () =>{
  icons.classList.toggle("shovs")
  btnmath.classList.toggle("positions")
})

// one.addEventListener("click", chiqar
//   console.log("ok");
// )

// function chiqar (){
//   alert("ppppp")
// }



function equal(){
  if (cal.display.value == ""){
    var eq = "";
  }
  else{
    var eq = eval(cal.display.value);
  }
  cal.display.value = eq;
}




















// news.appendChild(newtext)
// let h1 = document.querySelector("#h1da")
// container.insertBefore(news, h1)
















































































