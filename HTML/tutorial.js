document.addEventListener('DOMContentLoaded', function() {

    //this function will occur as soon as form is submitted
    /*
    Instead of doing a long process by:

    function name() {
        const name = document.querySelector('#name').value;
        alert(`Hello my friend ${name}`);
    }

    document.querySelector('form').onsubmit = name;
    */
    document.querySelector('form').onsubmit = function() {
        const name = document.querySelector('#name').value;
        alert(`Hello my friend ${name}`);
    };

    //Change color to Red
    document.querySelector('#red').onclick = function() {
        document.querySelector('#color2').style.color = "red";
    };

    //Change color to Green
    document.querySelector('#green').onclick = function() {
        document.querySelector('#color2').style.color = "green";
    };

    //Change color to Blue
    document.querySelector('#blue').onclick = function() {
        document.querySelector('#color2').style.color = "blue";
    };

    //Change color to Red/green/blue depending upon the dataset property of that element
    /*
    function get_buttons() {
        return document.querySelectorAll('#s3 button');
    }

    function iterate(buttons) {
        forEach(buttons,function)
    }

    function initialize() {
        let buttons = get_buttons();
        
    }
    */
    document.querySelectorAll('#s3 button').forEach(function(button) {
        button.onclick = function() {
        document.querySelector('#color3').style.color = button.dataset.color;
        }
    });

    document.querySelector('#s4 select').onchange = function() {
        document.querySelector('#s4 h2').style.color = this.value;      //this.value <==> document.querySelector('#s4 select').value
    }; 

    document.querySelector('#s5 form').submit.disabled = true;
    
    document.querySelector('#s5 form').task.onkeyup = function() {
        if (this.value.length > 0) {
            document.querySelector('#s5 form').submit.disabled = false;       
        }
        else {
            document.querySelector('#s5 form').submit.disabled = true;
        }
    }
    

    document.querySelector('#s5 form').onsubmit = function() {
        event.preventDefault();
        const new_task = this.task.value;
        console.log(new_task);
        const li = document.createElement('li');
        li.innerHTML = new_task;
        document.querySelector('#s5 ol').append(li);       
        return false;       //prevents the form to get submitted to server and reloading event.
    };

    let counter1 = 0;
    setInterval(function() {
        ++counter1;
        document.querySelector('#s6 h2').innerHTML = counter1;
    },1000)

    document.querySelector('#s6 button').onclick = function() {
        ++counter1;
        document.querySelector('#s6 h2').innerHTML = counter1;
    }


    if(!localStorage.getItem('counter2')) {
        localStorage.setItem('counter2',0);
    }
    else {
        document.querySelector('#s7 h2').innerHTML = localStorage.getItem('counter2');
    }
    

    document.querySelector('#s7 button').onclick = function() {
        let counter2 = localStorage.getItem('counter2');
        ++counter2;
        document.querySelector('#s7 h2').innerHTML = counter2;
        localStorage.setItem('counter2',counter2);
    }
    
});