let list = document.getElementsByTagName(ul);


function getResponse() {
    
    // create xhr object
    var xhr = new XMLHttpRequest();
    // console.log(xhr);

    //open function
    xhr.open('GET', 'http://localhost:5000/submitted', true);
    xhr.send();

}