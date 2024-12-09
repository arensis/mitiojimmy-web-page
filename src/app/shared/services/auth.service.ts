import { Injectable } from '@angular/core';
// import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, UserCredential, signInWithRedirect } from '@angular/fire/auth';
// import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ItemEntity } from '../model/auth/item';
import { RoleType } from '../model/auth/role-type.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private rolesDocumentReference: CollectionReference<DocumentData, DocumentData>;

  // constructor(private auth: Auth, private firestore: Firestore) {
  //   this.rolesDocumentReference = collection(this.firestore, 'roles');
  // }

  // register({ email, password}: any): Promise<void | UserCredential> {
  //   return createUserWithEmailAndPassword(this.auth, email, password)
  //     .then(async (user: UserCredential) => {
  //       await addDoc(this.rolesDocumentReference, { userId: user.user.uid, role: RoleType.USER});
  //       return user;
  //     })
  //     .catch((error) => console.error(error));
  // }

  // login({ email, password }: any) {
  //   return signInWithEmailAndPassword(this.auth, email, password);
  // }

  // getRole(userId: string) {
  //   return collectionData(this.rolesDocumentReference, { idField: 'id' }) as Observable<ItemEntity[]>;
  // }

  // async loginWithGoolge() {
  //   const user: UserCredential = await signInWithRedirect(this.auth, new GoogleAuthProvider());
  //   await this.getRole(user.user.uid);

  //   return user.user;
  // }

  // logout() {
  //   return signOut(this.auth);
  // }
}
