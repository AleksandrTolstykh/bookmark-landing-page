import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.scss']
})
export class ExtensionComponent implements OnInit {
  @Input() image = "";
  @Input() header = "";
  @Input() version = "";

  constructor() { }

  ngOnInit(): void {
  }

}
