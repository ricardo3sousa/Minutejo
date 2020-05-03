import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 30) {
          $(".nav").addClass("scroll");
      } else {
         $(".nav").removeClass("scroll");
      }
  });

  $(document).ready(function() {
    $('.btn').click(function() {
        $('ul').toggleClass('show');
    })
  })

  $(document).ready(function() {
    $('.link').click(function() {
        $('ul').toggleClass('show');
    })
  })
  }

}
