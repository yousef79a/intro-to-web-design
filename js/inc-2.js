
// for a tag
// copy all orignal color
var all_link = document.getElementsByTagName("a");
console.log(all_link); 
var copyAllLinks=[];
 for(let i=0; i<=all_link.length; i++)
 {
    copyAllLinks.push(all_link[i].classList[1]);
 }
console.log(copyAllLinks);

function LinkColorChange(LinkThingy){
    console.log(LinkThingy.value)
    if(LinkThingy.value === 'green'){
        GreenLink();
    }
    else if(LinkThingy.value === 'red'){
        RedLink();
    }
    else if(LinkThingy.value === 'reset'){
        ResetLinkColor();
    }    
}
function RedLink(){
    for (let i=0; i<=all_link.length; i++){
        all_link[i].classList.remove(all_link[i].classList[1]);
        all_link[i].classList.add('red-link');

    }
}

function  GreenLink(){
    for (let i=0; i<=all_link.length; i++){
        all_link[i].classList.remove(all_link[i].classList[1]);
        all_link[i].classList.add('green-link');
    }
}

function ResetLinkColor(){
    for (let i=0; i<= all_link.length; i++){
        all_link[i].classList.remove(all_link[i].classList[1]);
        all_link[i].classList.add(copyAllLinks[i]);
    }
}

