import { Component, OnInit } from '@angular/core';
import { Story } from '../../core/models/story.model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  story = new Story(
    "My First Story",
    "Psychological Horror",
    {"userNickname" : "Dimitris Kokkaliaroglou"},
    false,
    "This is my first story. It's extremely scary!sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
  )

  // TODO: WRITE A SERVICE THAT BRINGS THE STORY FROM DB
  constructor() { }

  ngOnInit(): void {
  }

}
