let select=document.querySelectorAll(".currency")
//console.log(select);
let btn=document.getElementById("btn")
let input=document.getElementById("input")


fetch('https://api.frankfurter.app/currencies')
.then((data)=>(data.json()))
.then(data=>displaydropdown(data))


const displaydropdown=(data)=>{
    let currency=(Object.entries(data))
    //console.log(currency);
    for(let i=0;i<currency.length;i++){
        let opt=` <option value="${currency[i][0]}">${currency[i][0]}</option>`
        select[0].innerHTML+=opt
        select[1].innerHTML+=opt
       // console.log(opt)

    }
}

btn.addEventListener("click",()=>{
    let curr1=select[0].value
    let curr2=select[1].value
    let inputval=input.value
    if(curr1==curr2){
        alert("both cannot be same")
    }
    else{
        convert(curr1,curr2,inputval)
    }
})

let convert=(curr1, curr2 ,inputval)=>{
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputval}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    //console.log(Object.values(data.rates)[0]);
    document.getElementById("result").value=(Object.values(data.rates)[0])
  });
}