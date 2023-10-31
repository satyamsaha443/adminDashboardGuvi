import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  selectedUser: User
  constructor(
    private userService: UserService, 
    private route: ActivatedRoute){}
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.selectedUser = this.userService.getUser(Number(id))
    this.route.params.subscribe((params: Params) => {
      this.selectedUser = this.userService.getUser(Number(params['id']))
    })
  }

}
