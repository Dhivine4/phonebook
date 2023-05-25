
//fetch data from local storage
// const contactDatabase = JSON.parse(localStorage.getItem('contactData'));
// console.log('my contact Database', contactDatabase);

//select the element that will be rendered to





document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const selectedContact = JSON.parse(decodeURIComponent(urlParams.get('contact')));
  
    // Access and display the selected contact's data as needed
    console.log(selectedContact._name);
    console.log(selectedContact._phone);

    const render = () => {
        const name = document.getElementById('contact-name');
        name.textContent = `${selectedContact._name}`;
        const number = document.getElementById('number');
        number.textContent = `${selectedContact._phone}`
    
        const placeholder = document.getElementById('placeholder-text');
        let initials = selectedContact._name.slice(0,1);
        placeholder.textContent = `${initials}`;
    
    }
    render();
  });



