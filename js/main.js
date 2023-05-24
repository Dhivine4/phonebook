//create an array to store contact object 
const contactArr = [];

//get form element
const form = document.querySelector('#form');

//create a class and constructor for object template

class Contact {
    constructor(name, phone, email) {
        this._name = name;
        this._phone = phone;
        this._email = email;
    }

}

//function to create contact object
const createObj = () => {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const contactObj = new Contact (name, phone, email)
    return contactObj;
}

//store data in local storage
const storeData = (newContact) => {
    if (localStorage.getItem('contactData') === null){
        //add data to local storage with contactData key
        localStorage.setItem('contactData', JSON.stringify(contactArr));
    }
    else{
        //get key from local data and update the value
        const contactData = JSON.parse(localStorage.getItem('contactData'));
        //update contactData value
        contactData.push(newContact);
        localStorage.setItem('contactData', JSON.stringify(contactData));
    }
};

form.addEventListener('submit', function (add){
    add.preventDefault();//prevents the data from clearing
    const newContact = createObj();
    contactArr.push(newContact);
    storeData(newContact);
    console.log(contactArr);
    //form.reset();
});

