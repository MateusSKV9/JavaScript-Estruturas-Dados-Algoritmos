function book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

var book1 = new book("Bíblia", 1050, "isbn");

console.log(book1.title);
console.log(book1.pages);
console.log(book1.isbn);

book1.title = "A Bíblia";
console.log(book1.title);

book.prototype.printTitle = function() {
    console.log(this.title);
};
book1.printTitle();