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
      
        const index = contactDatabase.indexOf(contact);
        if (index % 2 === 0) {
          listItem.classList.add('even');
        } else {
          listItem.classList.add('odd');
        }
      
        listItem.addEventListener('click', function() {
          // Handle click event, e.g., navigate to a specific page
          console.log('Clicked contact: ' + contact._name);
        });
      
        contactList.appendChild(listItem);
      }
    }
  
  render();

  
