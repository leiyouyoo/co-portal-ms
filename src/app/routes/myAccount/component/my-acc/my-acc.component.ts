import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-acc',
  templateUrl: './my-acc.component.html',
  styleUrls: ['./my-acc.component.less'],
})
export class MyAccComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  goHome() {
    this.router.navigate(['dashboard']);
  }
}
