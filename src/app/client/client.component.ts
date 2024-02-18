import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  users: any;

  constructor(private router: Router, private client: ClientService) { }

  reserver() {
    alert("reserver");
  }

  Rendez_vous() {
    alert("Rendez_vous");
  }

  ngOnInit() {
    this.client.getClients().subscribe((rep: any) => {
      this.users = rep.filter((obj: any) => obj.role === 'user');
    });
  }
}
