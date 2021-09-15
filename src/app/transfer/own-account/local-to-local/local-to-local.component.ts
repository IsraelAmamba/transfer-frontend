import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/core/services/application/account.service';

@Component({
  selector: 'app-local-to-local',
  templateUrl: './local-to-local.component.html',
  styleUrls: ['./local-to-local.component.css']
})
export class LocalToLocalComponent implements OnInit {
  public localForm: FormGroup;

  savingsAccount = [];
  currentAccount = [];
  postTransactionResponse = "";

  constructor(private fb: FormBuilder, private accountService: AccountService) { 
    this.localForm =  this.fb.group({
      stepOneForm : this.fb.group({
        debitAccount: this.fb.control('', Validators.required),
        debitAmount: this.fb.control('', Validators.required)
      }),
       stepTwoForm : this.fb.group({
        creditAccount: this.fb.control('', Validators.required)
     })
    });
  }

  get f() {
    return this.localForm.controls;
  }
  ngOnInit(): void {
    //get the accounts of the user
    this.accountService
        .getAccounts()
        .subscribe(
          res => {
            if(res && res.responseData != null)
            {             
              var accounts = res.responseData;       
              this.savingsAccount = accounts.filter(x=>x.accountType=='S');
              this.currentAccount = accounts.filter(x=>x.accountType=="C")
            }     
          },
          error => {
             console.log(error);
          }
        );
  }

  public onSubmit(){
    //pick the form values into an object
    const formValue = this.localForm.value;
    var request =   {
      senderAccountNo: formValue.stepOneForm.debitAccount, 
      trnAmount: formValue.stepOneForm.debitAmount, 
      beneficiaryAccountNo: formValue.stepTwoForm.creditAccount
      };

      //send the request
      this.accountService
        .postTransaction(request)
        .subscribe(
          res => {
            this.postTransactionResponse = res.responseMsg   
          },
          error => {
            this.postTransactionResponse = "Some processing errors occured. Please kindly contact admin"
          }
        );
    }

  stepOneSubmit() {
  }

}
