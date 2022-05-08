import { Injectable } from '@angular/core';
import { Auth, authState, updateProfile } from '@angular/fire/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@firebase/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  user = authState(this.auth);
  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
  signup(email: string, password: string, username: string) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(
      switchMap(({ user }) => updateProfile(user, { displayName: username }))
    );
  }

  logout() {
    return from(this.auth.signOut());
  }
}
