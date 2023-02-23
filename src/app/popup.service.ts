import { Injectable } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})

export class popupService {
  private modalRef: NgbModalRef | undefined;
  constructor(private popupService: NgbModal) {}

  ngOnInit(): void {}
  /*
 openModalFunction(modalName: string) {

       switch(modalName) {
         case 'monday1':
           console.log("component One function running...");
           // do any execution before opening child component
           this.modalRef = this.popupService.open(pop-monday1, { size: 'xl' });
           this.modalRef.componentInstance.testData = 'test';
           break;
         case 'two':
           console.log("component Two function running...");
           // do any execution before opening child component
          this.modalRef = this.popupService.open(ChildTwoComponent, { size: 'xl' });
         case default:
           // do nothing
       }
  }
  hideModalFunction() {
    //do something before closing the modal
    this.modalRef.close();
  }

*/
}
