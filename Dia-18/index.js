class Book {
  constructor(title, author, publisher, publicationYear) {
    this.Title = title;
    this.Author = author;
    this.Publisher = publisher;
    this.PublicationYear = publicationYear;
    this.Availability = true;
  }
}

class Library {
  constructor(name, address, phoneNumber) {
    this.Name = name;
    this.Address = address;
    this.PhoneNumber = phoneNumber;
    this.BookCollection = [];
  }

  findBook(titleOfTheBook) {
    const foundBook = this.BookCollection.find(
      (book) => book.Title === titleOfTheBook
    );
    if (foundBook) {
      console.log(foundBook);
    } else {
      console.log("Livro não encontrado.");
    }
  }

  loanBook(titleOfTheBook) {
    const bookToLoan = this.BookCollection.find(
      (book) => book.Title === titleOfTheBook
    );

    if (bookToLoan) {
      if (bookToLoan.Availability) {
        console.log("Livro disponível");
        bookToLoan.Availability = false;
      } else {
        console.log("Livro indisponível");
      }
    } else {
      console.log("Livro não encontrado.");
    }
  }

  returnBook(titleOfTheBook) {
    const bookToReturn = this.BookCollection.find(
      (book) => book.Title === titleOfTheBook
    );

    if (bookToReturn) {
      if (!bookToReturn.Availability) {
        bookToReturn.Availability = true;
      } else {
        console.log("Livro já está em nossa coleção.");
      }
    } else {
      console.log("Livro não encontrado.");
    }
  }
}

let books = [
  new Book("Armagedon", "Pickle Rick", "Sol de maio", "2021"),
  new Book(
    "Supremacia Alienígena",
    "Jhonas Brother",
    "Editora Sorriso",
    "2022"
  ),
  new Book(
    "A volta dos que não foram",
    "Leslie Shawn",
    "Editora Supra",
    "2023"
  ),
];

let library = new Library("Minha biblioteca", "Juca", 45555);
library.BookCollection = books;

library.findBook("Supremacia Alienígena");
library.loanBook("Supremacia Alienígena");
library.returnBook("Supremacia Alienígena");
