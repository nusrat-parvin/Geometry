//function to get and value using id
function getInputValue(elementId){
    const inputFieldValue = document.getElementById(elementId).value;
    const convertValue = parseFloat(inputFieldValue);
    document.getElementById(elementId).value = '';
    return convertValue;
}
//function to get element title
function getCardName(titleId){
    const cardTitle = document.getElementById(titleId).innerText;
    return cardTitle;
}

//triangle
let serial = 0;
document.getElementById('btn-triangle').addEventListener('click' , function(e){
    //updating serial numbergit
    serial += 1;

    //getting card title and input field values
    const triangleTitle = e.target.parentNode.parentNode.children[0].innerText;
    const triangleValueOne = e.target.parentNode.parentNode.children[2].children[0].value;
    const triangleValuetwo = e.target.parentNode.parentNode.children[2].children[1].value;

    //empty input field after getting value
    e.target.parentNode.parentNode.children[2].children[0].value = '';
    e.target.parentNode.parentNode.children[2].children[1].value = '';

    //validation
    validation(triangleValueOne , triangleValuetwo);

    
    //calculate area of triangle
    const triangleArea = (0.5 * triangleValueOne * triangleValuetwo).toFixed(2);
    setAreaValue(triangleTitle , triangleArea);
});

//rectangle
document.getElementById('btn-rectangle').addEventListener('click' , function(e){
    serial += 1;
    const rectangleTitle = e.target.parentNode.parentNode.children[0].innerText;
    const rectangleValueOne = e.target.parentNode.parentNode.children[2].children[0].value;
    const rectangleValuetwo = e.target.parentNode.parentNode.children[2].children[1].value;

    //empty input field after getting value
    e.target.parentNode.parentNode.children[2].children[0].value = '';
    e.target.parentNode.parentNode.children[2].children[1].value = '';

    //validation
    validation(rectangleValueOne , rectangleValuetwo);

    //calculate the rectangle area
    const rectangleArea = (rectangleValueOne * rectangleValuetwo).toFixed(2);

    setAreaValue(rectangleTitle , rectangleArea);
});

//Parallelogram : calculate using id
document.getElementById('btn-parallelogram').addEventListener('click' , function(){
    //update serial number
    serial += 1;

    //get title
    const parallelogramTitle = getCardName('title-parallelogram');
    //get input values
    const parallelogramValueOne = parseFloat(getInputValue('parallelo_input_one'));
    const parallelogramValueTwo = parseFloat(getInputValue('parallelo_input_two'));

    //validation
    validation(parallelogramValueOne , parallelogramValueTwo);

    //calculate parallelogram area
    const parallelogramArea = (parallelogramValueOne * parallelogramValueTwo).toFixed(2);

    //set value
    setAreaValue(parallelogramTitle , parallelogramArea);
});

//Rhombus
document.getElementById('btn-rhombus').addEventListener('click' , function(e){
    //update serial number
    serial += 1;
    //get title
    const rhombusTitle = e.target.parentNode.parentNode.children[0].innerText;
    //get input values
    const rhombusValueOne = e.target.parentNode.parentNode.children[2].children[0].value;
    const rhombusValueTwo = e.target.parentNode.parentNode.children[2].children[1].value;

    //empty input field after getting value
    e.target.parentNode.parentNode.children[2].children[0].value = '';
    e.target.parentNode.parentNode.children[2].children[1].value = '';

    //validation
    validation(rhombusValueOne , rhombusValueTwo);

    //calculate the rectangle area
    const rhombusArea = (0.5 * rhombusValueOne * rhombusValueTwo).toFixed(2);

    //set value
    setAreaValue(rhombusTitle , rhombusArea);
});

//Pentagon
document.getElementById('btn-pentagon').addEventListener('click' , function(e){
    //update serial number
    serial += 1;
    //get title
    const pentagonTitle = e.target.parentNode.parentNode.children[0].innerText;
    //get input values
    const pentagonValueOne = e.target.parentNode.parentNode.children[2].children[0].value;
    const pentagonValueTwo = e.target.parentNode.parentNode.children[2].children[1].value;

    //empty input field after getting value
    e.target.parentNode.parentNode.children[2].children[0].value = '';
    e.target.parentNode.parentNode.children[2].children[1].value = '';

    //validation
    validation(pentagonValueOne , pentagonValueTwo);

    //calculate the rectangle area
    const pentagonArea = (0.5 * pentagonValueOne * pentagonValueTwo).toFixed(2);

    //set value
    setAreaValue(pentagonTitle , pentagonArea);
});

//Ellipse
document.getElementById('btn-ellipse').addEventListener('click' , function(e){
    //update serial number
    serial += 1;
    //get title
    const ellipseTitle = e.target.parentNode.parentNode.children[0].innerText;
    //get input values
    const ellipseValueOne = e.target.parentNode.parentNode.children[2].children[0].value;
    const ellipseValueTwo = e.target.parentNode.parentNode.children[2].children[1].value;

    //empty input field after getting value
    e.target.parentNode.parentNode.children[2].children[0].value = '';
    e.target.parentNode.parentNode.children[2].children[1].value = '';

    //validation
    validation(ellipseValueOne , ellipseValueTwo);

    //calculate the ellipse area
    const ellipseArea =  (3.14 * ellipseValueOne * ellipseValueTwo).toFixed(2);

    //set value
    setAreaValue(ellipseTitle , ellipseArea);
});
