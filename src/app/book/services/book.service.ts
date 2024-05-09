import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books : Book[] = [];

  booksUpdated = new Subject<Book[]>();
  baseUrl = "http://localhost:8080/books";
  options = {
    headers: new HttpHeaders( { 'content-type': 'application/json' })
  }

  constructor(private http : HttpClient) { }

  /*getBooks(): Book[] {
    return [...this.books];
  }*/

  /*getBooks() : Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl);
  }*/

  getBooks(){
    this.http.get<Book[]>(this.baseUrl).subscribe(
      {
        next : books => {
          this.books = books;
          this.booksUpdated.next(this.books);
        },
        error : err => console.log(err),
        complete : ()=>console.log("Chargement complet!")
      }
    )
  }

  getBookById(id : string): Book|undefined{
    return this.books.find(
      book => book.id == id
    )
  } 

  addBook(title : string, author : string, price : number, cover : string, description : string){
    const newBook = {
      //this.books[this.books.length - 1].id + 1,
      title,
      author,
      price,
      cover,
      description
    };
    this.http.post<Book>(
      this.baseUrl,
      newBook
    ).subscribe(
      book => this.books = [...this.books, book]
    )
    //this.books.push(newBook);
    //this.books = [...this.books, newBook];
  }

  editBook(id : string, title : string, author : string, price : number, cover : string, description : string){
    const editedBook = {
      title,
      author,
      price,
      cover,
      description
    };
    this.http.put<Book>(this.baseUrl+"/"+id, 
                        editedBook, 
                        this.options)
                        .subscribe(
                          book=>console.log("updated")
                        );
    /*this.books = this.books.map(
      book => book.id===id?editedBook:book
    )*/
  }

  deleteBook(id : string){
    this.http.delete(`${this.baseUrl}/${id}`).subscribe(
      ()=>{
        this.books = this.books.filter(
          book => book.id != id
        )
        this.booksUpdated.next(this.books);
      }
    )
    /**/
    
  }


}
