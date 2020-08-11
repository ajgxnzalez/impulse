import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BluetoothlearnlinkPage } from './bluetoothlearnlink.page';

describe('BluetoothlearnlinkPage', () => {
  let component: BluetoothlearnlinkPage;
  let fixture: ComponentFixture<BluetoothlearnlinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluetoothlearnlinkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BluetoothlearnlinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
