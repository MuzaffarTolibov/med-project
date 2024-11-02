import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private isOpenSubject = new BehaviorSubject<boolean>(false);

  isOpen = this.isOpenSubject.asObservable();

  constructor() { }

  openModal(isOpen: boolean): void {
    this.isOpenSubject.next(isOpen);
  }
}
