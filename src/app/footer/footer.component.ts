import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

   x = 1 ;
   

  ngOnInit() {


    setInterval( () => {


      if(window.innerWidth > 960)
      {
        // console.log("large")
        this.x=1

      }
      else if (window.innerWidth > 700 && window.innerWidth < 960 )
      {
        
        this.x=2
      }

      else
      {
        // console.log("Small")
        this.x=3
      }

        // console.log(this.x)





        })




  }

  }
