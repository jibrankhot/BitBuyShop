
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { IProduct } from '../../types/product-type';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  imports: [SharedModule]
})
export class PaginationComponent {
  @Input() products: IProduct[] = [];
  @Input() paginate: any = {};

  @Output() setPage: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  pageSet(page: number) {
    this.setPage.emit(page); // Set Page Number
  }
}
