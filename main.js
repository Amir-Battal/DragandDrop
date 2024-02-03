// at the first i want when the user add any text to the bar this word go to the first box
// i want to catch the add button, user input and all boxes 
let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxes = document.querySelectorAll('.box');
// they are a many boxes so i use querySelectorAll 

// when i should use the drag 
let drag = null;

// I want when there was any text in teh inp get to the first box
btn.onclick = function(){
    // i want to validate if the data is exist or no 
    if(inp.value != ''){
        // in the first box 
        boxes[0].innerHTML += `
        <p class="item" draggable="true">${inp.value}</p>
        `
        // i want to use drag so i turn on the draggable
        // don't forgee the += not a = because if just = they was delete all elements
        // i wnat when i add any element the data in the inp is clear
        inp.value = ''; 
    }

    // i want to callback this function here
    dragItem();
}

function dragItem(){
    // i want to catch all <p>'s element in variable  
    let items = document.querySelectorAll('.item');
    // for enter for all elemet i can use for or foreach
    items.forEach(item =>{
        // the item here figured every single item
        // we want use 5 events 4 is for drag and 1 for drop
        item.addEventListener('dragstart', function(){
            // what is the dragstart?
            // console.log('drag start'); to check what the dragstart is it is when i start drag :)
            // when i use dragstart the drag is the same item 
            drag = item;
            // i want to add some customize 
            item.style.opacity = '0.5'; 
        })
        
        item.addEventListener('dragend', function(){
            // console.log('drag end'); to check what the dragend is it is when is end the drag :)
            // when i use dragend the drag is null
            drag = null;
            item.style.opacity = '1'; 
        })
        
        // now i want to enter this item to any other box i should use loop inside foreach loop
        boxes.forEach(box =>{
            // this box figure every single box in all four boxes
            // i want to use the first event
            box.addEventListener('dragover', function(e){
                // i add e to fix the prolem and cancel the default value for dragover function
                e.preventDefault();
                // console.log('drag over') to check what is dragover is it is when i catch the item and when it
                // touch any boxes the counter will increase in console he turn on when the mouse on the box and i
                // make drag to the element
                // this here figure the box that i stop on it
                this.style.background = '#090';
                this.style.color = '#fff';
                //  i notice that the boxes affect and change the color when i drag over on it by item 
                // but i want when i stop on the box this affect turn on and when go away this affect will turn off
                
            })

            // i use this function to revers the affect from dragover   
            box.addEventListener('dragleave', function(){
                this.style.background = '#fff';
                this.style.color = '#000';
                // that is what i want but every thing i do for drag i want to do that on drop
            })

            // we want to make the drop
            box.addEventListener('drop', function(){
                // here the important of drag in the top of the code let drag
                // when i do the drop i want the drag value and put it in the box 
                // this here figure the box i stoped on it or box instead of this
                // i want to add the item in the drag
                box.append(drag); 
                // but there is a problem that when i catch the item and try to put it in other box nothing happen
                // this problem is from dragover and i want to cancle the default value in it put e inside the parameter 
                // and type this e.preventDefault()
                
                // another problem that when the item is drop successfully the affect of dragover will steal founded
                //  to fix this problem a copy the affect and past it here
                this.style.background = '#fff';
                this.style.color = '#000';
            })
        })
    })
}