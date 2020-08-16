import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Feedback, ContactType } from '../shared files/feedback';
import {flyInOut, expand} from '../animations/app-animations';
//import {FeedbackService} from '../services/feedback.service';

@Component({
  selector: 'studentform',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  //apply animation when router change occurs
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class FormComponent implements OnInit {
  @ViewChild('fform',{static: false}) feedbackFormDirective;

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  checked = false;
  Collaboration=false;
  Values=false;
  CriticalThinking=false;
  feedbackForm: FormGroup;
  //feedback: Feedback;
  //feedbackServer : Feedback;
  contactType = ContactType;
  errMess : string;
  visibility: boolean;
  firstname="";
  lastname="";
  male="";
  female="";
  formErrors = {
    'firstname': '',
    'lastname': '',
    'number': '',
    'gender': ''
  };

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 30 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 30 characters long.'
    },
    'number': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'gender': {
      'required':      'Gender is required.',
    },
  };


  constructor(private fb:FormBuilder,@Inject('BaseURL') private baseURL,){
    //private feedbackservice: FeedbackService){ 
      this.options = fb.group({
        hideRequired: this.hideRequiredControl,
        floatLabel: this.floatLabelControl,
      });  
    //this.createForm();
  }

  ngOnInit() {
  }
  
  createForm() {
    //bind the data model with the form model
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      gender: ['', [Validators.required] ],
      contacttype: 'None',
    });

    //valueChanges is an observable
    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  //do form validations
  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
  
    this.visibility = true;
    console.log(this.visibility);
    /*this.feedbackForm.reset({       //reset the form once submitted
      firstname: '',
      lastname: '',
      gender: '',
    });
    this.feedbackFormDirective.resetForm(); //completely resets the form*/

  
    console.log(this.visibility);
  }

}

