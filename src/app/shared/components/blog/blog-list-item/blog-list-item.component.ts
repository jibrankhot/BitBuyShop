import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { IBlogType } from '../../../types/blog-type';

@Component({
    selector: 'app-blog-list-item',
    templateUrl: './blog-list-item.component.html',
    styleUrls: ['./blog-list-item.component.scss'],
    imports: [SharedModule]
})
export class BlogListItemComponent {
  @Input() blog!: IBlogType;
}
