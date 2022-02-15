import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-party-dialog',
  templateUrl: './party-dialog.component.html',
  styleUrls: ['./party-dialog.component.css']
})
export class PartyDialogComponent implements OnInit {

  passcodeForm!: FormGroup;

  private passcode: string;

  constructor(
    public dialogRef: MatDialogRef<PartyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { passcode: string },
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.passcode = this.data.passcode;
    this.passcodeForm = this.formBuilder.group({
      passcode: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    const result = this.passcodeForm.getRawValue();
    if (result.passcode === this.passcode) {
      this.dialogRef.close({
          result: true
        }
      );
    } else {alert('HACKER!!'); }
  }
}
