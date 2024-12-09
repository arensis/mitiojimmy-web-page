import { Injectable } from '@angular/core';
import { PartialItemEntity, ItemEntity } from '../model/auth/item';
// import { Firestore, collection, addDoc, CollectionReference, DocumentData, collectionData, updateDoc, doc, deleteDoc } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  // private itemsDocumentReference: CollectionReference<DocumentData, DocumentData>;

  constructor(
    // private firestore: Firestore
  ) {
    // this.itemsDocumentReference = collection(this.firestore, 'items');
  }

  addItem(item: PartialItemEntity) {
    // return addDoc(this.itemsDocumentReference, item);
  }

  // getItems(): Observable<ItemEntity[]> {
  //   return collectionData(this.itemsDocumentReference, { idField: 'id'}) as Observable<ItemEntity[]>
  // }

  updateItem(item: ItemEntity) {
    // const itemDocumentReference = doc(this.firestore, `items/${item.id}`);
    // return updateDoc(itemDocumentReference, item);
  }

  deleteItem(item: ItemEntity) {
    // const itemDocumentReference = doc(this.firestore, `items/${item.id}`);
    // return deleteDoc(itemDocumentReference);
  }
}
