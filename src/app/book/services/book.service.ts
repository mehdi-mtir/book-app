import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = [
    new Book(1, "Slight Edge", "Jeff Olsen", 10, "", "Slight Edge description"),
    new Book(2, "The power of habit", "Charles Duhigg", 15, "", "The power of habit description"),
    new Book(3, "Atomic Habits", "James Clear", 20, "", "Atomic habits description")
  ];

  bookDeleted = new Subject<Book[]>();

  constructor() { }

  getBooks(): Book[] {
    return [...this.books];
  }

  getBookById(id : number): Book|undefined{
    return this.books.find(
      book => book.id === id
    )
  } 

  addBook(title : string, author : string, price : number, cover : string, description : string){
    const newBook = new Book(
      this.books[this.books.length - 1].id + 1,
      title,
      author,
      price,
      cover,
      description
    );
    console.log(newBook);
    //this.books.push(newBook);
    this.books = [...this.books, newBook];
  }

  editBook(id : number, title : string, author : string, price : number, cover : string, description : string){
    const editedBook = new Book(
      id,
      title,
      author,
      price,
      cover,
      description
    );
    this.books = this.books.map(
      book => book.id===id?editedBook:book
    )
  }

  deleteBook(id : number){
    this.books = this.books.filter(
      book => book.id !== id
    );
    this.bookDeleted.next(this.books);
  }


}
