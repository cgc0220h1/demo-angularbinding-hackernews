import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {
  @Input()
  articles;

  constructor() {
  }

  ngOnInit(): void {
  }

  addArticle(title: string, url: string): void {
    this.articles.push({
      title,
      url
    });
  }
}
