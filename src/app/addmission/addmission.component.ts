import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact, Student } from './addmission.module';
@Component({
  selector: 'app-addmission',
  templateUrl: './addmission.component.html',
  styleUrls: ['./addmission.component.css'],
})
export class AddmissionComponent {
  Students: Array<Student> = [];
  relations: Array<string> = [
    'Father',
    'Mother',
    'Uncle',
    'Guardian',
    'Sister',
    'Brother',
  ];
  student: FormGroup;
  constructor(private form: FormBuilder) {
    this.student = this.form.group({
      name: this.form.group({
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        mname: ['', Validators.required],
      }),
      dob: ['', Validators.required],
      place: ['', Validators.required],
      first_lang: ['', Validators.required],
      address: this.form.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        pin: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(6),
            Validators.pattern('^[1-9]{1}[0-9]{2}[0-9]{3}$'),
          ],
        ],
      }),
      fatherDetails: this.form.group({
        fullname: this.form.group({
          fname: ['', Validators.required],
          lname: ['', Validators.required],
          mname: ['', Validators.required],
        }),
        email: ['', Validators.email],
        qualification: ['', Validators.required],
        proffession: ['', Validators.required],
        designation: ['', Validators.required],
        phone: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          ],
        ],
      }),
      motherDetails: this.form.group({
        fullname: this.form.group({
          fname: ['', Validators.required],
          lname: ['', Validators.required],
          mname: ['', Validators.required],
        }),
        email: ['', [Validators.email, Validators.required]],
        qualification: ['', Validators.required],
        proffession: ['', Validators.required],
        designation: ['', Validators.required],
        phone: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          ],
        ],
      }),
      Emergency_list: this.form.array([
        this.form.group({
          relation: ['', Validators.required],
          number: [
            '',
            [
              Validators.required,
              Validators.minLength(10),
              Validators.maxLength(10),
              Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
            ],
          ],
        }),
      ]),
    });
  }
  get list() {
    return this.student.get('Emergency_list') as FormArray;
  }
  get name() {
    return this.student.get('name');
  }
  get dob() {
    return this.student.get('dob');
  }
  get place() {
    return this.student.get('place');
  }
  get father_details() {
    return this.student.get('fatherDetails');
  }
  get mother_details() {
    return this.student.get('motherDetails');
  }
  get address() {
    return this.student.get('address');
  }
  get pin() {
    return this.address?.get('pin');
  }
  addContect() {
    this.list.push(
      this.form.group({
        relation: ['', Validators.required],
        number: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          ],
        ],
      })
    );
  }
  removeContect() {
    this.list.removeAt(1);
  }
  addStudent() {
    let name = this.name?.value;
    let dob = this.dob?.value;
    let place = this.place?.value;
    let address = this.address?.value;
    let father_details = this.father_details?.value;
    let mother_details = this.mother_details?.value;
    let contactArr: Array<Contact> = [];
    this.student.value.Emergency_list.forEach((element: Contact) => {
      contactArr.push(element);
    });
    this.Students.push({
      name: name,
      dob: dob,
      place: place,
      address: address,
      fatherDetails: father_details,
      motherDetails: mother_details,
      first_lang: this.student.value.first_lang,
      contactDetails: contactArr,
    });
    console.log(this.Students);
  }
}
