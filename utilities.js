//function to set the table data in area calculation
function setAreaValue(cardTitle , area){
    const parentBody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${cardTitle}</td>
      <td>${area} cm<span class="ordinal">2</span></td>
      <td>
      <button class="btn bg-blue-500 text-white font-semibold">Convert to m2</button>
      </td>
    `;
    parentBody.appendChild(tr);
}

//function to validate input field
function validation(valueOne , valueTwo){
    if((valueOne === '') || (valueTwo === '')){
        return alert("Please fill both input field");
    }
    else if((valueOne < 0) || (valueTwo < 0)){
        return alert("Please input positive numbers");
    }
    else if((valueOne && valueTwo === '') || (valueOne && valueTwo < 0)){
        return  alert("Empty Field and negative numbers are not allowed");
    }
}

