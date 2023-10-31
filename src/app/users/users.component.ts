import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  
  users: User[] = []
  showUserList: boolean = true
  constructor(private userService: UserService, 
              private router: Router, 
              private route: ActivatedRoute){
    this.users = this.userService.getUsers()
    // router.events.filter(event => event instanceof NavigationEnd)
    //       .subscribe(event => 
    //        {
    //           this.currentURL = event.url;          
    //           console.log(event);
    //        });
    // }
  }
  ngOnInit(): void{
    this.users = this.userService.getUsers()
    if(this.router.url === "/users") this.showUserList = true
    else this.showUserList = false

    // this.route.params.subscribe((params: Params) => {
    //   console.log("id: ", params['id'])
    //   if(params['id'] === undefined)
    //     this.showUserList = true;
    //   else
    //     this.showUserList = false;
    // })
  }

  onUserEdit(id: number){
    this.router.navigate(['/users', 'edit', id])
    this.showUserList = false
  }
  onUserView(id: number){
    this.router.navigate(['/users', id])
    this.showUserList = false
  }
}
