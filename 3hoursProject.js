
function saveToLocalStorage(event) {
    event.preventdefault();

 const chooseexpenseamount = event.target.chooseexpenseamount.value;

 const choosedescription = event.target.choosedescription.value;

 const choosecategory = event.target.choosecategory.value;


 localStorage.setItem('userdetails',JSON.stringify(object));

 
showUserOnScreen(Object,choosedescription); //object

}

function showUserOnScreen (object,choosedescription) {
    const parentElem = document.getElementById('list');
    const newUser  = document.createElement ('li');
newUser.textContent =  object.chooseexpenseamount + " ,"+object.choosedescription+" ," +object.choosecategory;


//create a deleteExpense button
//editexpense

var deleteExpenseBtn = document.createElement('input');
deleteExpenseBtn.type = 'button';
deleteExpenseBtn.value = 'delete';
deleteExpenseBtn.className = "btn btn-primary";

localStorage.removeItem(deleteExpenseBtn);
parentElem.appendChild(newUser);


//create a Editexpense button


var EditexpenseBtn = document.createElement('input');
EditexpenseBtn.type  = "button";
EditexpenseBtn.value = "Edit";
EditexpenseBtn.className  = "btn btn-info";

EditexpenseBtn.onclick  = () => {
    document.getElementById('chooose expenseamount').value  =object.chooseexpenseamount;
    document.getElementById('choose description').value = object.chooseexpenseamount;
    document.getElementById('chooose a category' ).value = object.chooseexpenseamount;
    localStorage.removeItem(choosedescription);
    parentElem.removeChild(newUser);

}
newUser.appendChild(EditexpenseBtn);
parentElem.appendChild(newUser);

}







