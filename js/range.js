const slider = document.getElementById('calc__range');
const output = document.getElementById('zxc');

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value + " &#8381";
}

slider.addEventListener("touchmove", function(){
    console.log('hey');
    var x = slider.value / 601;
    var color = 'linear-gradient(90deg, #04b586 ' + x + '%, rgb(202, 202, 202) ' + x + '%)';
    slider.style.background = color;
})