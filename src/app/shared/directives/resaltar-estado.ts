import {
  Directive,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appResaltarEstado]',
  standalone: true
})
export class ResaltarEstado implements OnInit {

  @Input() appResaltarEstado = '';

  constructor(private element: ElementRef) {}

  ngOnInit(): void {

    switch (this.appResaltarEstado) {

      case 'Pendiente':
        this.element.nativeElement.style.color = '#ffc107';
        break;

      case 'Atendida':
        this.element.nativeElement.style.color = '#198754';
        break;

      case 'Cancelada':
        this.element.nativeElement.style.color = '#dc3545';
        break;

      default:
        this.element.nativeElement.style.color = '#000';
        break;

    }

    this.element.nativeElement.style.fontWeight = 'bold';

  }

}