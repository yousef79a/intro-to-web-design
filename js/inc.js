// Challenege 4 Color Picker
// get all buttons colors

// copy all orignal color
var all_Buttons = document.getElementsByTagName("button");
console.log(all_Buttons);
var copyAllButtons=[];
 for(let i=0; i<=all_Buttons.length; i++)
 {
    copyAllButtons.push(all_Buttons[i].classList[1]);
 }
console.log(copyAllButtons);

function buttonColorChange(buttonThingy){
    console.log(buttonThingy.value)
    if(buttonThingy.value === 'green'){
        buttonGreen();
    }
    else if(buttonThingy.value === 'red'){
        buttonRed();
    }
    else if(buttonThingy.value === 'reset'){
        buttonColorReset();
    }
    else if(buttonThingy.value === 'random'){
        randomColors();
    }
     
}

function buttonRed(){
    for (let i=0; i<=all_Buttons.length; i++){
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add('cust-btn-danger');

    }
}

function buttonGreen(){
    for (let i=0; i<=all_Buttons.length; i++){
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add('cust-btn-success');
    }
}

function buttonColorReset(){
    for (let i=0; i<= all_Buttons.length; i++){
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    var choices = ['cust-btn-danger', 'cust-btn-success', 'cust-btn-blue','cust-btn-grey'];
    for (let i=0; i<=all_Buttons.length; i++){
        let rand = Math.floor(Math.random()*4);
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add(choices[rand]);
    }
}


