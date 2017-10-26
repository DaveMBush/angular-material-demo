import { AppRoutingModule } from './app-routing.module';
import { MaterialDesignModule } from './material-design.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: APP_BASE_HREF,
        useValue: '/'
      }],
      imports: [
        AppRoutingModule,
        MaterialDesignModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: object = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
