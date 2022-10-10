import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})

export class SheetComponent implements OnInit {
  answer = 'No answer yet';
  a: any;


  ExcelData: any;
  ans: any;
  //in: any
  constructor() {

  }
  ngOnInit() {



  }
  ReadExcel(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      var workbook = XLSX.read(fileReader.result, { type: 'binary' });
      var SheetNames = workbook.SheetNames;
      this.ExcelData = XLSX.utils.sheet_to_json(workbook.Sheets[SheetNames[0]]);
      console.log(this.ExcelData);
    }
  }
  change(data: any,index:any) {
    console.log("Data", index);

    for (let i = 0; i <= this.ExcelData.length; i++) {
    //  console.log('answers:', this.ExcelData[i])

      if (this.ExcelData[i] != null) {
        if (this.ExcelData[i].correctanswer == data )  {
          console.log("your answer is correct");
          this.ans= this.ExcelData[i].correctanswer;
          console.log("your answer is correct",this.ans);
        }else{

          this.ans="wrong answer";
        }
      }
    }
  }

}