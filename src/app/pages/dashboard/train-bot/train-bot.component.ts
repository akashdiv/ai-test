import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-train-bot',
  templateUrl: './train-bot.component.html',
  styleUrls: ['./train-bot.component.scss']
})
export class TrainBotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fetchData = [
    {"title":"Do you deal in real state", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "tagline":"Unanswered", "title_class":"danger"},
    {"title":"Do you deal", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "tagline":"Imrpove coverage", "title_class":"warning"},
    {"title":"Deal in real state", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "tagline":"Underperforming", "title_class":"primary"},
  ]

}
