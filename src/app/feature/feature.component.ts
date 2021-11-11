import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  @Input() image = "";
  @Input() header = "";
  @Input() text = "";

  constructor() { }

  ngOnInit(): void {
  }

}
