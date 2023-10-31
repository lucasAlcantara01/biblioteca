const tbody = document.querySelector('tbody')
const addBooks = document.querySelector('.add-book')
const inputTitle = document.querySelector('.input-title')
const inputAutor = document.querySelector('.input-autor')
const inputIsbn = document.querySelector('.input-isbn')
const inputAno = document.querySelector('.input-ano')
const inputGenero = document.querySelector('.input-genero')

const fetchBooks = async () => {
    const res = await fetch('http://localhost:3333/livros');
    const books = await res.json()
    return books;
}

const addLivro = async (event) => {
    event.preventDefault();

    const livro = { 
        titulo: inputTitle.value,
        autor: inputAutor.value,
        isbn: inputIsbn.value,
        ano_de_publicacao: inputAno.value,
        genero: inputGenero.value,
    };

     await fetch('http://localhost:3333/livros', {
         method: "POST",
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify(livro), // converte o objeto em string
     })

    loadBooks();
    inputTitle.value  = ''
    inputAutor.value  = ''
    inputIsbn.value  = ''
    inputAno.value  = ''
    inputGenero.value  = ''
}

const deleteBook = async (id) => {
    await fetch(`http://localhost:3333/livros/${id}`, {
        method: "DELETE",
    });
    loadBooks();
}

const updateBook = async ({ id, titulo, autor, isbn, ano_de_publicacao, genero }) => {

    await fetch(`http://localhost:3333/livros/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({titulo, autor, isbn, ano_de_publicacao, genero})
    });
    loadBooks();
}

const createElement = (tag, innerText = '', innerHTML = '') => {
    const element = document.createElement(tag);
    
    if (innerText) {
        element.innerText = innerText;
    }
    if (innerHTML) {
        element.innerHTML = innerHTML;
    }

    return element;
}

const createRow = (book) => {
    
    const { id, titulo, autor, isbn, ano_de_publicacao, genero } = book;

    const tr = createElement("tr");
    const tdTitulo = createElement('td', titulo);
    const tdAutor = createElement('td', autor);
    const tdIsbn = createElement('td', isbn);
    const tdAno = createElement('td', ano_de_publicacao);
    const tdGenero = createElement('td', genero);
    const tdAction = createElement('td');

    
    //create button
    const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>')
    const deleteButton = createElement('button', '', '<span class="material-symbols-outlined"> delete</span>')
    
    //create edit form
    const editTitleForm = createElement('form');
    const editAutorForm = createElement('form');
    const editIsbnForm = createElement('form');
    const editAnoForm = createElement('form');
    const editTGeneroForm = createElement('form');
    //create edit input
    const editTitleInput = createElement('input');
    const editAutorInput = createElement('input');
    const editIsbnInput = createElement('input');
    const editAnoInput = createElement('input');
    const editGeneroInput = createElement('input');

    editTitleInput.value = titulo;
    editAutorInput.value = autor;
    editIsbnInput.value = isbn;
    editAnoInput.value = ano_de_publicacao;
    editGeneroInput.value = genero;
    
    editTitleForm.appendChild(editTitleInput);
    editAutorForm.appendChild(editAutorInput);
    editIsbnForm.appendChild(editIsbnInput);
    editAnoForm.appendChild(editAnoInput);
    editTGeneroForm.appendChild(editGeneroInput);

    // editTitleForm.addEventListener('submit', (event) =>{
    //     event.preventDefault();
        
    //     updateBook({ id, titulo, autor, isbn, ano_de_publicacao, genero });
    // })
    // editAutorForm.addEventListener('submit', (event) =>{
    //     event.preventDefault();
    //     alert('testando form autor')
    // })

    
    editButton.addEventListener('click', () => {
        tdTitulo.innerText = ""
        tdAutor.innerText = ""
        tdIsbn.innerText = ""
        tdAno.innerText = ""
        tdGenero.innerText = ""
        tdTitulo.appendChild(editTitleForm)
        tdAutor.appendChild(editAutorForm)
        tdIsbn.appendChild(editIsbnForm)
        tdAno.appendChild(editAnoForm)
        tdGenero.appendChild(editTGeneroForm)
    } )

   
    //add class on button
    editButton.classList.add('btn-action')
    deleteButton.classList.add('btn-action')

    //add event listener
    deleteButton.addEventListener('click', () => deleteBook(id))

    tdAction.appendChild(editButton)
    tdAction.appendChild(deleteButton)

    tr.appendChild(tdTitulo)
    tr.appendChild(tdAutor)
    tr.appendChild(tdIsbn)
    tr.appendChild(tdAno)
    tr.appendChild(tdGenero)
    tr.appendChild(tdAction)

    return tr;
}

const loadBooks = async () => {
    const books = await fetchBooks();

    tbody.innerHTML = '';

    books.forEach((book) => {
        const tr = createRow(book);
        tbody.appendChild(tr);
    });
}

addBooks.addEventListener('submit', addLivro)

loadBooks();

