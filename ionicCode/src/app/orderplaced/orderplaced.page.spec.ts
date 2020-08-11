import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderplacedPage } from './orderplaced.page';

describe('OrderplacedPage', () => {
  let component: OrderplacedPage;
  let fixture: ComponentFixture<OrderplacedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderplacedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderplacedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
