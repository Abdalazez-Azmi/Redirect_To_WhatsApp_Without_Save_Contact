let f_inp= document.getElementById("f_inp");
let v_inp = f_inp.value;
let url ="https://api.whatsapp.com/send?phone=962"
let num  ;


const reffer=()=>{
    num = f_inp.value;
if (f_inp.value.length === 10 && (f_inp.value[0] === "0"))  {
    f_inp.value= f_inp.value.substring(1)
    console.log(f_inp.value[0].substring(1))
    location.href=url+num

}else{
   alert("Sorry The Number is not correct please re-check")
    console.log(f_inp.value.length)
}
}