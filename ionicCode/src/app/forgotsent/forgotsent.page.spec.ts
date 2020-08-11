import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForgotsentPage } from './forgotsent.page';

describe('ForgotsentPage', () => {
  let component: ForgotsentPage;
  let fixture: ComponentFixture<ForgotsentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotsentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotsentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
