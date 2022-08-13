import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface Reportes {
  name: string;
  position: number;
  institucion: string;
  actions: string;
}

const ELEMENT_DATA: Reportes[] = [
  {position: 1, name: 'Hydrogen', institucion: 'Hospital A', actions: 'H'},
  {position: 2, name: 'Helium', institucion: 'Hospital B', actions: 'He'},
  {position: 3, name: 'Lithium', institucion: 'Hospital C', actions: 'Li'},
  {position: 4, name: 'Beryllium', institucion: 'Hospital D', actions: 'Be'},
  {position: 5, name: 'Boron', institucion: 'Hospital E', actions: 'B'},
  {position: 6, name: 'Carbon', institucion: 'Hospital F', actions: 'C'},
  {position: 7, name: 'Nitrogen', institucion: 'Hospital G', actions: 'N'},
  {position: 8, name: 'Oxygen', institucion: 'Hospital H', actions: 'O'},
  {position: 9, name: 'Fluorine', institucion: 'Hospital I', actions: 'F'},
  {position: 10, name: 'Neon', institucion: 'Hospital J', actions: 'Ne'},
];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  displayedColumns: string[] = ['position', 'name', 'institucion', 'symbol'];
  dataSource = ELEMENT_DATA;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
