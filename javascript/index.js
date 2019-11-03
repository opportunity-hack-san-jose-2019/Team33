//let name = document.getElementById('form_element_2');
let submit = document.getElementById('btn');
let formArr= new Array();
let formId;
let elementName;

submit.addEventListener("click", function(){
    event.preventDefault;
    for(let i = 0; i <= 1 ; i++ )
    {
        elementName = 'element_name'+i;
        formId= 'form_element_'+i;
        let name = document.getElementById(formId);
        let eleName = document.getElementById(elementName);
        console.log(eleName.textContent+':'+ ' ' + name.value);
    }
    
    // if form_element_value = null,stop
    //or less then the total number

});
