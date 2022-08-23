const slider = document.getElementById('calc__range');
const output = document.getElementById('zxc');

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value + " &#8381";
}

slider.addEventListener("mousemove", function(){
    console.log('hey');
    var x = slider.value / 601;
    var color = 'linear-gradient(90deg, red ' + x + '%, rgb(141, 141, 141) ' + x + '%)';
    slider.style.background = color;
})