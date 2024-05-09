import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../model/book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books? : Book[];
  subsciptionId? : Subscription

  constructor(
    private bookService : BookService){}

  ngOnDestroy(): void {
    this.subsciptionId?.unsubscribe();
  }
  
  ngOnInit(): void {
    /*this.bookService.getBooks().subscribe(
      {
        next : books => this.books = books,
        error : err => console.log(err),
        complete : ()=>console.log("Chargement complet!")
      }
    );*/
    this.subsciptionId = this.bookService.booksUpdated.subscribe(
      books => this.books = books
    )
    this.bookService.getBooks();
  }

  deleteBook(id : string){
    if(confirm("Êtes-vous sûre de vouloir supprimer le livre?")){
      this.bookService.deleteBook(id);
    }
      
    
  }



}
