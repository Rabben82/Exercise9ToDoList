let userInput;
let addItems;
let listAdd = document.querySelector('#list-purchase');
const field1 = document.querySelector('#purchase');
const addBtn = document.querySelector('#button-purchase');
const output = document.querySelector('#output');


field1.addEventListener('change', function (){
    userInput = field1.value;
   //console.log(userInput);
});

field1.addEventListener('keydown', function(event) {
    if (event.key === 'Enter'){
        userInput = field1.value;
        event.preventDefault(); // Prevent form submission
        addToList();
    }
});

addBtn.addEventListener('click', function (){
    addToList();
});

listAdd.addEventListener('mouseup', function(e){
   /*  if(e.target && e.target.tagName === 'LI'){
    // e.target.textContent = 'new';
     e.target.classList.add('new');
    } */
    e.target.classList.toggle('new');
});

listAdd.addEventListener('dblclick', function (e){
    e.target.remove();
})

function addToList(){
    if(userInput){
        const listItem = document.createElement('li');
        listItem.textContent = userInput;
        listAdd.appendChild(listItem); 
        field1.value ='';
        userInput ='';
        output.innerHTML='';
    }
    else{
        output.innerHTML = 'fältet kan inte vara tomt';
    }
}