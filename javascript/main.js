window.onload = function() {
    const deg = 6;
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    const sc = document.querySelector("#sc");
    setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;
        hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;

        if (7 <= new Date().getHours() && new Date().getHours() >= 20) {
            var bodyColor = document.getElementsByTagName("body")[0];
            bodyColor.style.backgroundColor = ' #373B44';

            var clockColor = document.getElementsByClassName('clock')[0];
            clockColor.style.backgroundColor = '#151515';
            clockColor.style.border = ' 20px solid white';

            var dateText = document.getElementsByClassName('month')[0];
            dateText.style.color = '#d6d6d6';
        }
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        document.getElementById('dayName').innerHTML = dayNames[day.getDay()];
        document.getElementById('date').innerHTML = monthNames[day.getMonth()] + ' ' + day.getDate() + ' ' + day.getFullYear();
    })
}