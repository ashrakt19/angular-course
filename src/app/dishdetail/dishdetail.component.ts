import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { dish} from '../shared/dish';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  @Input()
  dish :dish;
  selectedDish: dish;


  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedDish)
    this.interval
  }
   interval = setInterval(function() {
   console.log(this.dish);
  }, 5000);
  

}
