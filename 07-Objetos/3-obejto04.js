function book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function() {
        console.log(this.isbn);
    };
}

var book = new book("Livro", 150, "isbn5");
book.printIsbn();