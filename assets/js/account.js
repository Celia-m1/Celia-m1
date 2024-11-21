document.addEventListener('DOMContentLoaded', () => {
    const profileData = JSON.parse(localStorage.getItem('profileData')) || {
        username: '',
        email: '',
        mobilephone: '',
        location: ''
    };

    document.getElementById('displayUsername').innerText = `USER NAME: ${profileData.username}`;
    document.getElementById('displayEmail').innerText = `EMAIL: ${profileData.email}`;
    document.getElementById('displayMobile').innerText = `MOBILE PHONE: ${profileData.mobilephone}`;
    document.getElementById('displayLocation').innerText = `LOCATION: ${profileData.location}`;
});
  document.querySelector(".profile-pic img").addEventListener("click", () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
  
    fileInput.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          document.querySelector(".profile-pic img").src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
  
    fileInput.click();
  });
// Handle adding a new book
document.addEventListener("DOMContentLoaded", function () {
document.getElementById('add-book-button').addEventListener('click', function () {
    // Prompt the user for the new book's title
    const bookTitle = prompt('Enter the title of the new book:');

    if (bookTitle) {
        // Create a new book element
        const bookElement = document.createElement('a');
        bookElement.href = '#';

        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const figure = document.createElement('figure');

        const img = document.createElement('img');
        img.src = ''; // Add a placeholder or default image path if needed
        img.alt = 'Book Cover';

        const figcaption = document.createElement('figcaption');
        figcaption.textContent = `Title: ${bookTitle}`;

        // Append elements
        figure.appendChild(img);
        figure.appendChild(figcaption);
        bookDiv.appendChild(figure);
        bookElement.appendChild(bookDiv);

        // Find the last row or create a new one
        const booksContainer = document.getElementById('booksContainer');
        const rows = booksContainer.getElementsByClassName('row');
        let lastRow = rows[rows.length - 1];

        // Create a new row if the last one has 3 books
        if (lastRow && lastRow.children.length < 3) {
            lastRow.appendChild(bookElement);
        } else {
            const newRow = document.createElement('div');
            newRow.classList.add('row');
            newRow.appendChild(bookElement);
            booksContainer.appendChild(newRow);
        }
    } else {
        alert('Book title cannot be empty!');
    }
});
});
