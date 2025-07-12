import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent {

  @Input() courseId: string | null= '';
  @Output() classCreated = new EventEmitter<any>();

  classForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.classForm = this.fb.group({
      date: [null, Validators.required],
      title: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.classForm.valid) {
      const formData = {
        ...this.classForm.value,
        courseId: this.courseId
      };
      this.classCreated.emit(formData);
      this.classForm.reset();
    }
  }
}
