import { Service, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  login: string;
  email: string;
}
export interface UserState {
  list: User[];
  loading: boolean;
  error: string | null;
}

@Service()
export class UserStore {
  private apiUrl = 'http://localhost:8080/api/v1/users';

  private http = inject(HttpClient);

  state = signal<UserState>({ 
    list: [],
    loading: false,
    error: null
    });

  readonly users = computed(() => this.state().list);
  readonly loading = computed(() => this.state().loading);
    readonly error = computed(() => this.state().error);

  fetchUsers(): void{
    this.state.update(state => ({ ...state, loading: true, error: null }));
    this.http.get<User[]>(this.apiUrl).subscribe({
      next: (users) => {
        console.log
        this.state.update(state => ({ ...state, list: users, loading: false }));
      },
      error: (err) => {
        this.state.update(state => ({ ...state, loading: false, error: err.message }));
      }
    }); 
  }
}   