function Add() {
    let nb1=document.getElementById('nb1').value;
    let nb2=document.getElementById('nb2').value;
    document.getElementById('result').innerText=(nb1+nb2);
}
function Sub() {
    let nb1=document.getElementById('nb1').value;
    let nb2=document.getElementById('nb2').value;
    document.getElementById('result').innerText=(nb1-nb2).toFixed(1);
}
function Mul() {
    let nb1=document.getElementById('nb1').value;
    let nb2=document.getElementById('nb2').value;
    document.getElementById('result').innerText=(nb1*nb2).toFixed(1);
}
function Div() {
    let nb1=document.getElementById('nb1').value;
    let nb2=document.getElementById('nb2').value;
    document.getElementById('result').innerText=(nb1/nb2).toFixed(1);
}