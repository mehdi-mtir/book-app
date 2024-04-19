import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book? : Book;
  
  constructor(
    private bookService : BookService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.book = this.bookService.getBookById(+params['id']);
        console.log(this.book);
      }
    )
  }

  editBook(){
    this.bookService.editBook(
      this.book!.id,
      this.book!.title,
      this.book!.author,
      this.book!.price,
      this.book!.cover,
      this.book!.description
    );
    this.router.navigateByUrl("/book");
  }


}
