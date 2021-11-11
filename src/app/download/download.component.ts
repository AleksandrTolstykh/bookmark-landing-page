import { Component, OnInit, Input } from '@angular/core';

class Extension {
  image: string  = "";
  header: string  = "";
  version: string  = "";

  constructor(image: string, header: string, version: string) {
    this.image = image;
    this.header = header;
    this.version = version;
  }
}

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  @Input() columns = 0;
  extensions: Extension[] = [
    new Extension(
      "assets/logo-chrome.svg",
      "Add to Chrome",
      "Minimum version 62"),
    new Extension(
      "assets/logo-firefox.svg",
      "Add to Firefox",
      "Minimum version 55"),
    new Extension(
      "assets/logo-opera.svg",
      "Add to Opera",
      "Minimum version 46"),
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
