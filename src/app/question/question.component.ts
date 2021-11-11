import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() header = "";
  @Input() content = "";
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
