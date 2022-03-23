import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CheckoutService } from '../checkout/checkout.service';
import { Film } from './film.model';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit {

  listFilms: Film[] = [];
  listSelectedFilms!: number;
  hidden = false;
  
  constructor(private checkoutService: CheckoutService, private route: Router) { }

  ngOnInit(): void {
    this.checkoutService.totalPrice = 0;
    this.checkoutService.listSelectedFilms = [];
    this.checkoutService.getListFilms().subscribe((film) => {
      this.listFilms = film;
    })
  }

  toggleCount(){
    return this.listSelectedFilms = this.checkoutService.listSelectedFilms.length;
  }

  toggleBadgeVisibility(){
    this.hidden = !this.hidden;
  }

  toCheckout(): void { 
    this.route.navigate(["../checkout"]);
  }

}
