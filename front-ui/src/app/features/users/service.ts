import { Service, signal , inject } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';

export interface User {
  id: number;
  login: string;
  email: string;
}
export interface NewUser {
    login: string
    email: string
}
export interface UserState {
  list: User[];
  loading: boolean;
  error: string | null;
}

@Service()
export class UserStore {
  private baseUrl = 'http://localhost:8080/api/v1/users';
  // current users version, updated usrs automatic plus one
  private version = signal<number>(0)
  private http = inject(HttpClient)

  users = httpResource<User[]>( ()=> {
    this.version()
    return this.baseUrl
  })

  reloadUsers() {
    this.version.update( (v:number) => v+1)
  }


  addUser(user: NewUser) { 
    console.log("adding user: ", user)
    this.http.post( this.baseUrl, user).subscribe( (savedUser) => {
      console.log("user saved: ", savedUser)
      this.reloadUsers()
    })
  }
  updateUser(user:User) {
    const url = `${this.baseUrl}/${user.id}`
    this.http.patch(url, user).subscribe({
      next: () => {
        this.reloadUsers()
      },
      error: (error)=> {
        console.log("Failed to update the user")
        console.log(error)
      }
    })
  }
  async deleteUser(id: number) {
    const url = `${this.baseUrl}/${id}`
    this.http.delete<void>(url).subscribe({
      next: ()=> {
        this.reloadUsers()
      },
      error: (error)=> {
        console.error(error)
      }
    })
  }
}