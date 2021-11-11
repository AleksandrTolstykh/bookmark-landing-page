import { Component, OnInit } from '@angular/core';

class Feature {
  label: string = "";
  image: string  = "";
  header: string  = "";
  text: string  = "";

  constructor(label: string, image: string, header: string, text: string) {
    this.label = label;
    this.image = image;
    this.header = header;
    this.text = text;
  }
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  features: Feature[] = [
    new Feature(
      "Simple Bookmarking",
      "assets/illustration-features-tab-1.svg",
      "Bookmark in one click",
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."),
    new Feature(
      "Speedy Searching",
      "assets/illustration-features-tab-2.svg",
      "Intelligent search",
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."),
    new Feature(
      "Easy Sharing",
      "assets/illustration-features-tab-3.svg",
      "Share your bookmarks",
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."),  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
