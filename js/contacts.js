//fetch data from local storage
const contactDatabase = JSON.parse(localStorage.getItem('contactData'));
console.log('my contact Database', contactDatabase);

//select the element that will be rendered to
const contactList = document.getElementById('contact-list');

const render = () => {
    const orderedList = document.createElement('ol');
    orderedList.classList.add('list-group', 'list-group-numbered');
    orderedList.style.margin = '10px';
    
    for (const contact of contactDatabase) {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = `${contact._name} ${contact._phone}`;
        listItem.addEventListener( 'click', function(){
            const selectedContact = encodeURIComponent(JSON.stringify(contact));
            window.location.href = `../pages/view-contact.html?contact=${selectedContact}`;

        });
        
      orderedList.appendChild(listItem);
    }
    
    contactList.appendChild(orderedList);
  };
  
  render();

  
  
