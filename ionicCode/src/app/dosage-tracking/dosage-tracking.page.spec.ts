import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DosageTrackingPage } from './dosage-tracking.page';

describe('DosageTrackingPage', () => {
  let component: DosageTrackingPage;
  let fixture: ComponentFixture<DosageTrackingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosageTrackingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DosageTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
