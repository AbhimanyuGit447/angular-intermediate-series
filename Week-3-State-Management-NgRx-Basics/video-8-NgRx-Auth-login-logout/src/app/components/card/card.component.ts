import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterContentInit {


  ngAfterContentInit() {
    if(this.contentHeading){
      console.log('projected content heading', this.contentHeading.nativeElement);

      this.title = this.contentHeading.nativeElement.textContent;

    }
  }

  title = "Card Title"

  @ContentChild('contentHeading') contentHeading? : ElementRef;



}
