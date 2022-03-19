const showToast = () => {
 var x = document.querySelector(".toast").style;
 x.visibility = "visible"
 x.animation = "fadein 1s,fadeout 1.5s 3.5s";
 setTimeout(()=>{x.visibility="hidden";x.animation=""},4500)
}