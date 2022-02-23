
function resultDate(){
    let today = new Date;
    var todaydt = today.getFullYear();
    var youDate = document.getElementById('dt').value;
    var age = todaydt - youDate;
    document.getElementById("result").innerHTML=age;
}