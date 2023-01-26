import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  //NAVBAR
  scroll = (): void => {
    let scrollHeigth;

    if (window.innerWidth < 350) {
      scrollHeigth = 20;
    } else {
      /*
    else if (window.innerWidth < 500 && window.innerWidth > 350) {
      scrollHeigth = 250;
    } else if (window.innerWidth < 700 && window.innerWidth > 500) {
      scrollHeigth = 350;
    } else if (window.innerWidth < 1000 && window.innerWidth > 700) {
      scrollHeigth = 500;
    } 
    */
      scrollHeigth = 10 /*MAGIN!!!*/;
    }

    if (window.scrollY >= scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', 'var(--green)');
      document.body.style.setProperty('--navbar-scroll-text', 'white');
      document.body.style.setProperty('--navbar - scroll - position', '50px');
    } else if (window.scrollY < scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', 'transparent');
      document.body.style.setProperty('--navbar-scroll-text', 'white');
      document.body.style.setProperty('--navbar - scroll - position', '0');
    }
  };

  //ANIMATION ON SCROLL
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  /*
  options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

observer = new IntersectionObserver(callback, options);

/*
  hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  */
}
