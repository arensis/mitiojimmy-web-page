import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
// import { Auth, GoogleAuthProvider, signInWithCredential } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
// declare let google:any;

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private authService: AuthService, private router: Router,
    // private auth: Auth
  ) {
    this.formGroup = new FormGroup({
      email: new FormControl( '', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
    // google.accounts.id.initialize({client_id: "144675978855-6u2mlm5pb5vks2s3i3hc1sue190460qt.apps.googleusercontent.com", callback: this.handleCredentialResponse});
    // google.accounts.id.renderButton(document.getElementById("buttonDiv"),{ theme: "outline", size: "large" }); // customization attributes);
    // google.accounts.id.prompt(); // also display the One Tap dialog
  }

  handleCredentialResponse(response: any) {
    // Build Firebase credential with the Google ID token.
    const idToken = response.credential;
    // const credential = GoogleAuthProvider.credential(idToken);

    // Sign in with credential from the Google user.
    // signInWithCredential(this.auth, credential).catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.email;
    //   // The credential that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
  }

  onSubmit(){
    // this.authService.login(this.formGroup.value)
    //   .then(user => this.router.navigate(['gifts']))
    //   .catch(error => console.error(error));
    this.router.navigate(['dashboard']);
  }
}
