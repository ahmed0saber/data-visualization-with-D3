var xValues = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"];
var yValues = [10, 15, 20, 25, 30, 44, 40, 60, 0];
new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: "#5177DB",
        data: yValues
        }]
    },
    options: {}
});

const closeSide = (e) => {
    btn.classList.remove("open")
    btn.classList.remove("fa-angle-left")
    btn.classList.add("fa-angle-right")
    el.classList.remove("open")
}
const openSide = (e) => {
    btn.classList.add("open")
    btn.classList.remove("fa-angle-right")
    btn.classList.add("fa-angle-left")
    el.classList.add("open")
}
let open = false
let el = document.getElementsByClassName("sidebar")[0]
let btn = document.getElementsByClassName("toggle-side")[0]
btn.onclick = function(){
    const myFunction = open ? closeSide() : openSide()
    open = !open
}
