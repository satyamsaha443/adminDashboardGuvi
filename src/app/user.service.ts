import allUsers from '../assets/json/users.json'
import { User } from './users/user.model'

export class UserService {
    private users: User[] = allUsers

    getUsers(){
        return this.users.slice()
    }
    getUser(id: number): User{
        const user = this.users.find(s => {
            return s.id == id
        })
        return user
    }

}