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
    this.books = this.bookService.getBooks();
    this.subsciptionId = this.bookService.bookDeleted.subscribe(
      books => this.books = books
    )
  }

  deleteBook(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer le livre?")){
      this.bookService.deleteBook(id);
    }
      
    
  }



}
