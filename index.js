let f_inp= document.getElementById("f_inp");
let v_inp = f_inp.value;
let url ="https://wa.me://send?phone="
let num ;


const reffer=()=>{
    num = f_inp.value;
if (f_inp.value.length === 10 ) {
    location.href=url+num

}else{
   alert("Sorry The Number is not correct please re-check")
    console.log(f_inp.value.length)
}
}