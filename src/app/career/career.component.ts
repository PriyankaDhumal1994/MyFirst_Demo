import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  showEmail() {
    this.router.navigate(['email'], { relativeTo: this.route });
  }

  showCall() {
    this.router.navigate(['call'], { relativeTo: this.route });
  }
}
