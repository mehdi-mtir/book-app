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
  
  books? : Book[];
  suscriptionId? : Subscription

  constructor(private bookService : BookService){}
  ngOnDestroy(): void {
    this.suscriptionId?.unsubscribe();
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.bookService.bookDeleted.subscribe(
      books => this.books = books
    )
  }



  


}
