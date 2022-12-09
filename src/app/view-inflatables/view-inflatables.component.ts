import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BouncehousesService } from '../services/bouncehouses.service';
import { ActivatedRoute, Router} from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
/**
 * @title Table with sorting
 */
 @Component({
  selector: 'app-view-inflatables',
  templateUrl: './view-inflatables.component.html',
  styleUrls: ['./view-inflatables.component.css']
})
export class ViewInflatablesComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private route: ActivatedRoute, private _liveAnnouncer: LiveAnnouncer, private bounceHouseService: BouncehousesService) {}
  
  intInflatableTypeID = 0;
  bounceHouses: any = [];
  bounceHouses2: any = [];
  bounceHouses3: any = [];
  header = '';
  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next: (params) =>{
      const inflatableID = params.get('type');
      this.intInflatableTypeID = Number(inflatableID);

      //alert(this.intInflatableTypeID);
      }})

      if (this.intInflatableTypeID == 1){

        this.header = 'Bounce Houses';

      }else if (this.intInflatableTypeID == 2){

        this.header = 'Giant Slides';
      }else if (this.intInflatableTypeID == 3){

        this.header = 'Combos';
      }else if (this.intInflatableTypeID == 4){

        this.header = 'Midway Rush Games';
      }else if (this.intInflatableTypeID == 5){

        this.header = 'Fun & Games';
      }else if (this.intInflatableTypeID == 6){

        this.header = 'Obstacles';
      }else{

        this.header = 'Inflatables';
      }



    this.bounceHouseService.getAllBounceHouses()
    .subscribe({
      next: (bounceHouses) => {
        this.bounceHouses = bounceHouses;

        for (var i = 0; i < 100; i++) { 

          if (this.bounceHouses[i]?.intBounceHouseTypeID == this.intInflatableTypeID){

            //console.log(this.bounceHouses[i]?.intBounceHouseTypeID);
            //console.log(this.intInflatableTypeID);
            
            this.bounceHouses2.push(this.bounceHouses[i]);
          } else if (this.intInflatableTypeID == 0){
              if (this.bounceHouses[i]?.intBounceHouseTypeID > 0){
                this.bounceHouses2.push(this.bounceHouses[i]);
              }
          }
        }
        this.bounceHouses3 = this.bounceHouses2;






      },
      error: (response) => {
        console.log(response);
      }
    });
    console.log(this.bounceHouses2);

  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
