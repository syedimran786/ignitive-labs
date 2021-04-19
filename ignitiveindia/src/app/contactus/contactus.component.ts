import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  sform: FormGroup;

  constructor()
  { 
    document.title="Contact Us";
  }

  ngOnInit(): void
  {
    this.sform = new FormGroup(
      {
        sname: new FormControl("", [Validators.required,Validators.pattern('^[a-zA-Z ]+$')]),
        subject: new FormControl("", [Validators.required,Validators.pattern('^[a-zA-Z ]+$')]),
        email: new FormControl("", [Validators.required,Validators.email]),
        msg: new FormControl("")
      }
    )
  }

  get name()
  {
    return this.sform.get("sname");
  }

  get sub()
  {
    return this.sform.get("subject");
  }

  get mail()
  {
    return this.sform.get("email");
  }

  onSubmit(form)
  {
    console.log(form.value);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title:`Thank you ${form.value.sname}`,
      text: `We will get back to you soon`
    })
    form.reset();
  }
}
