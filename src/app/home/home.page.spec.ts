import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BLEMock } from '@ionic-native-mocks/ble';
import { BLE } from '@ionic-native/ble/ngx';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot()
      ],
      providers:[
          { provide: BLE, useValue: BLEMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Movies should be an array', () => {
    expect(component.movies.length).toBeDefined();
  })

  it('Moview Name Added', () => {
    let movieName = "ABC";
    component.addMovie(movieName);
    expect(component.movies.length).toBeGreaterThan(0);
    expect(component.movies).toContain(movieName);
  });

  it('Empty name Should not be added', () => {
    expect(component.addMovie('')).toBeFalsy();
  });

  it('Movie array should not be empty if we want to remove movie name', () => {
    component.addMovie("ABC");
    expect(component.movies.length).toBeGreaterThan(0);
    component.removeMovie("ABC")
  });

  it('Remove all movies', () => {
    component.addMovie("ABCD");
    component.removeAllMoview();
    expect(component.movies.length).toEqual(0);
  });

  it('Bluetooth should be connected', async() => {
    let deviceId:string = component.deviceId;  
     const bt = await component.connet()
    expect(bt).toBeUndefined();
    })



});
