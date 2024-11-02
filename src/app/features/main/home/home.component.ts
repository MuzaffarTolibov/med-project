import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FormComponent } from "../../../shared/components/form/form.component";
import { InfoCardComponent } from "../../../shared/components/info-card/info-card.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { ModalComponent } from "../../../shared/components/modal/modal.component";
import { ModalService } from '../../../core/service/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent, InfoCardComponent, ButtonComponent, FooterComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  isOpen = false;
  private modalSubscription!: Subscription;
  constructor(private readonly modalSErvise: ModalService) {
  }

  ngOnInit(): void {
    this.modalSubscription = this.modalSErvise.isOpen.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  openModal() {
    this.modalSErvise.openModal(true)
  }
}
