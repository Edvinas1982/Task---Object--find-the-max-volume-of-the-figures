var figures = [
    {lenght: 2, width: 5, height: 3},
    {lenght: 3, width: 2, height: 6},
    {lenght: 1, width: 5, height: 5}
];
// variables
var first_button = document.getElementById('first_button');
var dataTbody = document.querySelector('#data tbody');
var volumesTbody = document.querySelector('#volumes tbody');
var second_button = document.getElementById('second_button');
var  volumes = [];
var third_button = document.getElementById('third_button');

 // initial data button, take data from figures array, create table and put those data in table
 first_button.addEventListener('click', function () {
    for (var i = 0; i < figures.length; i++) {
        var tr = document.createElement('tr');
        var lenghtTd = document.createElement('td');
        lenghtTd.innerHTML = figures[i].lenght;
        var widthTd = document.createElement('td');
        widthTd.innerHTML = figures[i].width;
        var heightTd = document.createElement('td');
        heightTd.innerHTML = figures[i].height;
        tr.appendChild(lenghtTd);
        tr.appendChild(widthTd);
        tr.appendChild(heightTd);
        dataTbody.appendChild(tr);
        var volume = figures[i].lenght * figures[i].width * figures[i].height; 
        volumes.push(volume);
    }
});
// find MAX button, searching maximum hight of volume, create table and put all volumes in table, and adding "red" class to highest value 
second_button.addEventListener('click', function () {
    var max = Math.max(...volumes);
    for (var i = 0; i < volumes.length; i++) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        if (max == volumes[i]) {
            td.classList.add('red')
        }
        td.innerHTML = volumes[i];
        tr.appendChild(td);
        volumesTbody.appendChild(tr);
    }
});
// reset button