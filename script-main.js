/*
function newTodo() {

    var inputValue = document.getElementById('location').value;
    var inputValue = document.getElementById('date').value;
    var inputValue = document.getElementById('image').value;
    var inputValue = document.getElementById('details').value;

    var t1 = document.createTextNode(inputValue);
    var t2 = document.createTextNode(inputValue);
    var t3 = document.createTextNode(inputValue);
    var t4 = document.createTextNode(inputValue);



    location.appendChild(t1);
    date.appendChild(t2);
    image.appendChild(t3);
    details.appendChild(t4);
    

    if (inputValue === '') {
        alert('You must write something..')
    } else {
        //document.getElementById('location').appendChild(t1);
        //document.getElementById('date').appendChild(t2);
        //document.getElementById('image').appendChild(t3);
        //document.getElementById('details').appendChild(t4);


        document.getElementById('location').value='';
        document.getElementById('date').value='';
        document.getElementById('image').value='';
        document.getElementById('details').value=''

    }

}

*/

//----------------




function newTodo() {

    var inputLocation = document.getElementById('location').value;
    var inputDate = document.getElementById('date').value;
    var inputImage = document.getElementById('image').value;
    var inputDetails = document.getElementById('details').value;
    
    var text1 = document.createTextNode(inputLocation);
    var text2= document.createTextNode(inputDate);
    var text3 = document.createTextNode(inputImage);
    var text4 = document.createTextNode(inputDetails);


    inputLocation.appendChild(text1);
    inputDate.appendChild(text2);
    inputImage.appendChild(text3);
    inputDetails.appendChild(text4);
    
    
    if (inputLocation === '') {
        alert('You must write something..')
    } else {
        //document.getElementById('location').appendChild(t1);
        //document.getElementById('date').appendChild(t2);
        //document.getElementById('image').appendChild(t3);
        //document.getElementById('details').appendChild(t4);

        document.getElementById('location').value='';
    }

}

if (inputDate === '') {
    alert('You must write something..')
} else {
   
    document.getElementById('date').value='';
}

if (inputImage === '') {
    alert('You must write something..')
} else {
    
    document.getElementById('image').value='';  
}
if (inputDetails === '') {
    alert('You must write something..')
} else {
   
    document.getElementById('details').value=''

}

