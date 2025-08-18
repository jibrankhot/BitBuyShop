import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NiceSelectComponent } from "../../shared/ui/nice-select/nice-select.component";
import { FashionHeaderComponent } from "../../shared/header/fashionHeaderComponent/fashionheadercomponent";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [SharedModule, FooterComponent, NiceSelectComponent, FashionHeaderComponent]
})
export class ProfileComponent {

  public genderSelectOptions = [
    { value: 'male', text: 'Male' },
    { value: 'female', text: 'Female' },
    { value: 'others', text: 'Others' },
  ];

  changeHandler(selectedOption: { value: string; text: string }) {
    console.log('Selected option:', selectedOption);
  }
}
