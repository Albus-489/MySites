import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {

  constructor(private service: UserService, private router: Router) { }


  bookModel = {
    Id:1,
    name:'',
    genre:'',
    created:'',
    rating:0,
    authorId:0,
    description:'',
    pictureURL:''
  }

  authorModel = {
    name:'',
    birth:'',
    death:''
  }
  ngOnInit(): void {
    this.service.getAllBooks().subscribe((res:any) =>{
      res.map((item) => {
        if (item.Id == localStorage.getItem('bookID')) {
          this.bookModel.Id = item.Id;
          this.bookModel.name = item.name;
          this.bookModel.genre = item.genre;
          this.bookModel.created = item.created;
          this.bookModel.authorId = item.authorId;
          this.bookModel.rating = item.rating;
          this.bookModel.description = item.descriptionInfo
          this.bookModel.pictureURL = item.pictureURL;

          console.log("Curent book ==> ", item);
        }
      })
      this.service.getAllAuthors().subscribe((res:any) => {
        res.map((item) =>{
          if(item.Id == this.bookModel.authorId){
            this.authorModel.name = item.name;
            this.authorModel.birth = item.birth;
            this.authorModel.death = item.death;
            console.log(this.authorModel);
          }
        })
      })
    })
  }

  onForum() {
    this.router.navigate(['/ForumPage']);
  }
  onMyPage() {
    this.router.navigate(['/UserPage']);
  }
}
