import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';
import { Country } from 'src/app/search/city.interface';
import { SearchService } from 'src/app/search/search.service';
import { User } from 'src/app/users/user.interface';
import { SEAT_PREFERENCE, USER_TITLE } from '../../enums/user.enum';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input('user') user: User;
  @Output() submitEvent = new EventEmitter();

  form: FormGroup;
  countries: Country[] = [];

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [this.user ? this.user.email : '', [Validators.email, Validators.required]],
      firstName: [this.user ? this.user.firstName : '', Validators.required],
      lastName: [this.user ? this.user.lastName : '', Validators.required],
      address: [this.user ? this.user.address : '', Validators.required],
      title: [this.user ? this.user.title : USER_TITLE.MR, Validators.required],
      country: [this.user ? this.user.country : '', Validators.required],
      seatPreference: [this.user ? this.user.seatPreference : SEAT_PREFERENCE.AISLE, Validators.required],
      newsletterSub: [this.user ? this.user.newsletterSub : true, Validators.required],
      password: [this.user ? this.user.password : '', Validators.required],
      terms: [false, Validators.required]
    });
    this.form.get('country').valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      mergeMap((value) => {
        return value ? this.searchService.getCountryList(value) : [];
      })
    ).subscribe(countries => {
      this.countries = countries;
      if (this.countries.length === 1) {
        const result = this.countries[0];
        if (!result.flag) {
          this.country.setErrors({ 'invalidCountry': true })
        }
      }
    });
  }

  get email() {
    return this.form.get('email');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get address() {
    return this.form.get('address');
  }

  get title() {
    return this.form.get('title');
  }

  get country() {
    return this.form.get('country');
  }

  get password() {
    return this.form.get('password');
  }

  get terms() {
    return this.form.get('terms');
  }

  getCountryErrorMessage() {
    if (this.form.get('country').hasError('required')) {
      return 'Please enter a valid country';
    }
    return this.form.get('country').hasError('invalidCountry') ? 'Please enter a valid country' : '';
  }

  getEmailErrorMessage() {
    if (this.form.get('email').hasError('required')) {
      return 'Please enter your email';
    }
    return this.form.get('email') ? 'Not a valid email format' : '';
  }

  submit(form: FormGroup) {
    if (!form.get('terms').value) {
      form.get('terms').setErrors({ 'requiredTrue': true });
    }
    if (form.valid) {
      this.submitEvent.emit(form.value);
    } else {
      // trigger form validation
      for (var i in this.form.controls) {
        this.form.controls[i].markAsTouched();
      }
    }
  }

}
