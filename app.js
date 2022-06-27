const button1 = () => {
    document.getElementById('button1').style.backgroundColor = "rgba(96, 96, 96, 1)";
    document.getElementById('button1').style.color = "rgba(224, 224, 224, 1)";

    document.getElementById('button2').style.backgroundColor = "rgba(224, 224, 224, 1)";
    document.getElementById('button2').style.color = "rgba(96, 96, 96, 1)";
    document.getElementById('button3').style.backgroundColor = "rgba(224, 224, 224, 1)";
    document.getElementById('button3').style.color = "rgba(96, 96, 96, 1)";

    document.getElementById("container").className = 'layout1';
}

const button2 = () => {
    document.getElementById('button2').style.backgroundColor = "rgba(96, 96, 96, 1)";
    document.getElementById('button2').style.color = "rgba(224, 224, 224, 1)";

    document.getElementById('button1').style.backgroundColor = "rgba(224, 224, 224, 1)";
    document.getElementById('button1').style.color = "rgba(96, 96, 96, 1)";
    document.getElementById('button3').style.backgroundColor = "rgba(224, 224, 224, 1)";
    document.getElementById('button3').style.color = "rgba(96, 96, 96, 1)";

    document.getElementById("container").className = "layout2";
}

const button3 = () => {
    document.getElementById('button3').style.backgroundColor = "rgba(96, 96, 96, 1)";
    document.getElementById('button3').style.color = "rgba(224, 224, 224, 1)";

    document.getElementById('button1').style.backgroundColor = "rgba(224, 224, 224, 1)";
    document.getElementById('button1').style.color = "rgba(96, 96, 96, 1)";
    document.getElementById('button2').style.backgroundColor = "rgba(224, 224, 224, 1)";
    document.getElementById('button2').style.color = "rgba(96, 96, 96, 1)";

    document.getElementById('container').className = 'layout3'
}