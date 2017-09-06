import { Component} from '@angular/core';


@Component({
    selector:'viewer',
    templateUrl: './viewer.component.html',
    styleUrls: ['./viewer.component.css']
    
})

export class ViewerComponent {
    pdfSrc: string = 'app/pdf-test.pdf';
    page: number = 1;
    rotation: number =0;
    zoom: number =0 ;

    onFileSelected() {
        let $img: any = document.querySelector('#file');
    
        if (typeof (FileReader) !== 'undefined') {
          let reader = new FileReader();
    
          reader.onload = (e: any) => {
            this.pdfSrc = e.target.result;
          };
    
          reader.readAsArrayBuffer($img.files[0]);
        }
      }

      incrementPage(amount: number) {
        this.page += amount;
      }

      decrementPage(amount:number){
          this.page -= amount;
      }

      incrementZoom(amount: number) {
        this.zoom += amount;
      }

      decrementZoom(amount:number){
          this.zoom -= amount;
      }
}