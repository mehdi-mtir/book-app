import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  
  books? : Book[] = [];
  suscriptionId? : Subscription

  constructor(private bookService : BookService){}
  ngOnDestroy(): void {
    this.suscriptionId?.unsubscribe();
  }

  ngOnInit(): void {
    /*this.bookService.getBooks().subscribe(
      {
        next : books => this.books = books,
        error : err => console.log(err),
        complete : ()=>console.log("Chargement complet!")
      }
    );  */  
    this.bookService.booksUpdated.subscribe(
      books => this.books = books
    )
    this.bookService.getBooks();
  }



  


}
