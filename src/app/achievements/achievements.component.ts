import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  constructor() { }

   x = 1 ;

  ngOnInit() {


    setInterval( () => {


      if(window.innerWidth > 960)
      {
        console.log("large")
        this.x=1

      }
      else if (window.innerWidth > 700 && window.innerWidth < 960 )
      {
        console.log("Medium")
        this.x=2
      }

      else
      {
        console.log("Small")
        this.x=3
      }

        console.log(this.x)





        })




}

}
