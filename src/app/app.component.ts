import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Peliculiando';
  
    contactForm?: FormGroup;
  constructor(private fb: FormBuilder) {}
  

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      type: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    //console.log(this.contactForm.value);
  }

}
