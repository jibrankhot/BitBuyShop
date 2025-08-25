import { Component, OnInit } from '@angular/core';
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
export class ProfileComponent implements OnInit {

  // Dropdown options
  public genderSelectOptions = [
    { value: 'male', text: 'Male' },
    { value: 'female', text: 'Female' },
    { value: 'others', text: 'Others' },
  ];

  // Data variables
  public user: any = {};
  public stats: any = {};
  public addresses: any[] = [];
  public orders: any[] = [];
  public notificationSettings: any[] = [];
  public password: any = { old: '', new: '', confirm: '' };

  ngOnInit(): void {
    // Load mock JSON (until API is ready)
    fetch('assets/data/profile.json')
      .then(res => res.json())
      .then(data => {
        this.user = data.user;
        this.stats = data.stats;
        this.addresses = data.addresses;
        this.orders = data.orders;
        this.notificationSettings = data.notificationSettings;
        this.password = data.password;
      });
  }

  // ========== UI HANDLERS ==========

  // Avatar change
  onAvatarChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => this.user.avatar = reader.result;
      reader.readAsDataURL(file);
    }
  }

  // Gender select
  GenderChange(selectedOption: { value: string; text: string }) {
    this.user.gender = selectedOption.value;
    console.log('Selected gender:', selectedOption);
  }

  // Update Profile
  onUpdateProfile() {
    console.log('Profile updated:', this.user);
  }

  // Save Address
  saveAddress(index: number) {
    console.log(`Address ${index} saved:`, this.addresses[index]);
  }

  // Order actions
  openInvoice(order: any) {
    console.log('Opening invoice for order:', order);
  }

  replyOrder(order: any) {
    console.log('Replying to order:', order);
  }

  viewStatus(order: any) {
    console.log('Viewing status for order:', order);
  }

  // Toggle notification switch
  toggleNotification(settingId: string) {
    const setting = this.notificationSettings.find(s => s.id === settingId);
    if (setting) {
      setting.enabled = !setting.enabled;
      console.log(`${setting.label} = ${setting.enabled}`);
    }
  }

  // Change Password
  changePassword() {
    if (this.password.new !== this.password.confirm) {
      console.error('New password and confirm password do not match');
      return;
    }
    console.log('Password changed:', this.password);
  }

  // Logout
  logout() {
    console.log('User logged out');
    // later => clear storage + redirect
  }
}
