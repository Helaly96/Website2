import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-our-projects',
  templateUrl: './ourprojects.component.html',
  styleUrls: ['./ourprojects.component.css']
})
export class OurProjectsComponent implements OnInit {

  constructor() { }



 my_inverval=0

  ngOnInit() {

    var i=0
    var y=0
    var z=0

    setInterval( () => {

    var  Slide1 = document.getElementById("S1");
    var  Slide2 = document.getElementById("S2");
    var  Slide3 = document.getElementById("S3");





      if ( Slide1.classList.contains("active") )
      {
        console.log("Slide 1 Active")


        if (i==0)
        {
          // console.log("koko1")
          this.animateValue1("value", 0, 25, 1000);
          i=1;
          z=0;
          y=0;
        }


      }

      if ( Slide2.classList.contains("active") )
      {
        console.log("Slide 2 Active")

        if(z==0)
        {
          this.animateValue1("value2", 0, 75, 1000);
          i=0;
          z=1;
          y=0;
        }


      }


      if ( Slide3.classList.contains("active") )
      {
        console.log("Slide 3 Active")

        if(y==0)
        {
          this.animateValue1("value3", 0, 100, 1000);
          i=0;
          z=0;
          y=1;
        }


      }




    })


  }




  animateValue1(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);


}








}
