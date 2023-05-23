import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CardInfo } from 'src/app/core/models/card-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  news!: CardInfo[];

  private fb: FormBuilder = new FormBuilder()

  newsForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    url: ['', Validators.required],
  })

  constructor(){}

  ngOnInit(): void {
    this.news = [
      {
        title: "Best photo",
        description: "This a super nice photo",
        url: "https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
      },
      {
        title: "Another",
        description: "This a super nice photo",
        url: "https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
      }
    ]
    
  }

  saveNewCard() {
    if(this.newsForm.invalid) return;
    let formValues: CardInfo = {
      title: ''+this.newsForm.value.title,
      description: ''+this.newsForm.value.description,
      url: ''+this.newsForm.value.url
    }
    this.news.push(formValues);
  }
}
