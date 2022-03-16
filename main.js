let ekran = document.getElementById("output")
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

let sin = document.getElementById("sin")
let cos = document.getElementById("cos")
let tan = document.getElementById("tan")
let factori = document.getElementById("factori")
let pii = document.getElementById("pi")
let ellog = document.getElementById("log")
let elleftqavs = document.getElementById("leftqavs")
let elrightqavs = document.getElementById("rightqavs")
let elildiz = document.getElementById("ildiz")
let ele = document.getElementById("e")
let elfoiz = document.getElementById("foiz")
let eldaraja = document.getElementById("daraja")



let btnmath = document.querySelector("#btn-math")

let sum = ""



// one.addEventListener("click", (e) =>{
  //   ekran.textContent = sum
  //   sum += one.textContent
  //   // var floor = Math.floor;
  //   // var x = floor(parseFloat(sum));
//   // console.log(x);
// })

// qosh.addEventListener("click", (e) =>{
//   ekran.textContent = sum
//   sum += qosh.textContent
// })

// two.addEventListener("click", (e) =>{
  //   ekran.textContent = sum
//   sum += two.textContent
// })
// console.log(`${sum} + ${sum1}`);


icons.addEventListener("click", () =>{
  icons.classList.toggle("shovs")
  btnmath.classList.toggle("positions")
})


let input = "";
function showValue(btn) {
  input += btn.value;
    document.getElementById('output').innerHTML = input;
  }
  function doMath(){
    document.getElementById('output').innerHTML = eval(input)
    input ="";
  }
  function reset(){
    document.getElementById('output').innerHTML = "0";
    input="";
}



sin.addEventListener("click", () =>{
  ekran.innerHTML=Math.sin(ekran.innerHTML);
})
cos.addEventListener("click", () =>{
  ekran.innerHTML=Math.cos(ekran.innerHTML);
})
tan.addEventListener("click", () =>{
  ekran.innerHTML=Math.tan(ekran.innerHTML);
})
factori.addEventListener("click", () =>{
  // ekran.innerHTML=Math.factorial(ekran.innerHTML);
  function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  ekran.innerHTML=(factorialize(ekran.innerHTML));
})
pii.addEventListener("click", () =>{
  ekran.innerHTML=(ekran.innerHTML * 3.14159265359);
})
ellog.addEventListener("click", () =>{
  ekran.innerHTML=Math.log(ekran.innerHTML);
})
elleftqavs.addEventListener("click", () =>{
  ekran.innerHTML= "(";
})
elrightqavs.addEventListener("click", () =>{
  ekran.innerHTML= ")";
})
elildiz.addEventListener("click", () =>{
  ekran.innerHTML=Math.sqrt(ekran.innerHTML);
})
ele.addEventListener("click", () =>{
  ekran.innerHTML=Math.E(ekran.innerHTML);
})
ele.addEventListener("click", () =>{
  ekran.innerHTML=(ekran.innerHTML * 2.718);
})
eldaraja.addEventListener("click", () =>{
  ekran.innerHTML=Math.pow(ekran.innerHTML,ekran.innerHTML);
})








































function rem1(){
    input = input.replace(/.$/, "");
    document.getElementById('output').innerHTML = input;
}








































































