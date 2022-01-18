import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(private router: Router, public afFirestore: AngularFirestore) {}

  employeeList: any;
  hasEmployees: any;

  ngOnInit(): void {
    this.afFirestore
      .collection('usersCollection')
      .get()
      .subscribe((dat: any) => {
        console.log(dat);
        if (dat.docs.length > 0) {
          var arrayOfElements = [];
          for (let i = 0; i < dat.docs.length; i++) {
            arrayOfElements.push(dat.docs[i].data());
          }
          console.log(arrayOfElements);
          this.employeeList = arrayOfElements;
          this.hasEmployees = true;
        } else {
          this.hasEmployees = false;
        }
      });
  }
}
