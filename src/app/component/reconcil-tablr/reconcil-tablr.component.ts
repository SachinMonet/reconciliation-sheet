import { Component } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-reconcil-tablr',
  templateUrl: './reconcil-tablr.component.html',
  styleUrl: './reconcil-tablr.component.scss'
})
export class ReconcilTablrComponent {
  formdata: FormGroup;
  tableheading: any;
  fileName = '';
  selectedFile: File | null = null;
  cvsdata: any
  changedata: any
  allData: any
  response_ids: any
  survey_number: any
  loader: boolean = false
  submitbutton: boolean = true
  errorlorder: boolean = false
  errordata : any
  
  constructor(private fb: FormBuilder, private _api: ApiService) {
    this.formdata = this.fb.group({
      Studyid: ['', [Validators.required, ]],
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.cvsdata = file
    // console.log(this.cvsdata)
    if (file) {
      this.submitbutton = false
      this.selectedFile = file;
      this.fileName = file.name;
    }
  }

  submit() {
    this.loader = true
       this.errorlorder = false
    if (this.formdata.invalid || !this.selectedFile) {
      return;
    }
    const formData = new FormData();
    formData.append('study_id', this.formdata.value.Studyid);
    formData.append('file', this.selectedFile);
    // console.log(formData)
    this._api.postData(formData).subscribe((res: any) => {
      this.errordata =res
      // console.log(res);
      if (res.code == 200 && res.error == false) {
        this.loader = false
        this.errorlorder = false
        this.allData = res.data
        this.response_ids = res.Response_id;
        this.survey_number = res.Survey_Number;
      } else {
        this.loader = false
        this.errorlorder = true
      }
    });
  }
}
