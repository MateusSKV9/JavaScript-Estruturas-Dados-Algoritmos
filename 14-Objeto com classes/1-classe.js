class book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    printIsbn() {
        console.log(this.isbn);
    }
}
var book1 = new book("Mateus", 100, "isbn");
book1.printIsbn();