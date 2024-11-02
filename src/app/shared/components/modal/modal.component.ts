import { Component } from '@angular/core';
import { ModalService } from '../../../core/service/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  constructor(private readonly modalServise: ModalService) {

  }


  closeModal() {
    this.modalServise.openModal(false)
  }
}
