import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  constructor(
    private bookServise : BookService,
    private router : Router
  ){}

  addBook(f : NgForm){
    this.bookServise.addBook(
      f.value.title,
      f.value.author,
      f.value.price,
      f.value.cover,
      f.value.description
    );
    this.router.navigateByUrl('/book');
    //this.router.navigate(['/book'])
  }
}
