interface Book {
    title: string;
    author: string;
    pages: number;
    cover: 'Miękka' | 'Twarda';
    price: number;
    description: string;
  }
  
  function createBookItem(book: Book, bookList: HTMLElement): HTMLElement {
    const listItem = document.createElement('li');
    listItem.className = 'book-item';
  
    // Tworzenie kontenera na tytuł książki
    const titleSpan = document.createElement('span');
    titleSpan.textContent = `Tytuł: ${book.title}`;
    titleSpan.className = 'book-title';
  
    // Tworzenie kontenera na autora
    const authorSpan = document.createElement('span');
    authorSpan.textContent = `Autor: ${book.author}`;
    authorSpan.className = 'book-author';
  
    // Tworzenie kontenera na liczbę stron
    const pagesSpan = document.createElement('span');
    pagesSpan.textContent = `Strony: ${book.pages}`;
    pagesSpan.className = 'book-pages';
  
    // Tworzenie kontenera na typ okładki
    const coverSpan = document.createElement('span');
    coverSpan.textContent = `Okładka: ${book.cover}`;
    coverSpan.className = 'book-cover';
  
    // Tworzenie kontenera na cenę
    const priceSpan = document.createElement('span');
    priceSpan.textContent = `Cena: ${book.price} zł`;
    priceSpan.className = 'book-price';
  
    // Tworzenie kontenera na opis
    const descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = `Opis: ${book.description}`;
    descriptionSpan.className = 'book-description';
  
    // Tworzenie przycisku "Usuń"
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Usuń';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function (event) {
      event.stopPropagation(); // Zatrzymanie propagacji kliknięcia do <li>
      if (confirm(`Czy chcesz usunąć książkę "${book.title}"?`)) {
        bookList.removeChild(listItem);
      }
    };
  
    // Dodanie elementów do listItem
    listItem.appendChild(titleSpan);
    listItem.appendChild(authorSpan);
    listItem.appendChild(pagesSpan);
    listItem.appendChild(coverSpan);
    listItem.appendChild(priceSpan);
    listItem.appendChild(descriptionSpan);
    listItem.appendChild(deleteButton);
  
    return listItem;
  }
  
  export default createBookItem;