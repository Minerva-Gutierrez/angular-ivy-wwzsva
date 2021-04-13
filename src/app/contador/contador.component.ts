import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contador",
  templateUrl: "./contador.component.html",
  styleUrls: ["./contador.component.css"]
})
export class ContadorComponent implements OnInit {
  count: number = 0;

  constructor() {}

  ngOnInit() {}

  aumentar(): void {
    this.count++;
  }

  disminuir(): void {
    this.count--;
  }
}
