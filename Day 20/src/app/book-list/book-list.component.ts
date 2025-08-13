import { Component } from '@angular/core';

interface Book {
  title: string;
  price: number;
  isCheckedOut: boolean;
  isNewArrival: boolean;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  searchTerm: string = '';

  books: Book[] = [
    { title: 'Angular Basics', price: 499, isCheckedOut: false, isNewArrival: true },
    { title: 'Learning TypeScript', price: 999, isCheckedOut: true, isNewArrival: false },
    { title: 'RxJS in Action', price: 599, isCheckedOut: false, isNewArrival: false }
  ];

  get filteredBooks() {
    return this.books.filter(book =>
      book.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
