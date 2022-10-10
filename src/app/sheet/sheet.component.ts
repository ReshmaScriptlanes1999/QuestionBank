import { Component, OnInit } from "@angular/core";
import * as XLSX from "xlsx";

@Component({
  selector: "app-sheet",
  templateUrl: "./sheet.component.html",
  styleUrls: ["./sheet.component.css"],
})
export class SheetComponent implements OnInit {
  answer = "No answer yet";
  a: any;

  ExcelData: any;
  ans: any;
  constructor() {}
  ngOnInit() {}
  ReadExcel(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      let workbook = XLSX.read(fileReader.result, { type: "binary" });
      let SheetNames = workbook.SheetNames;
      const data: any[] = XLSX.utils.sheet_to_json(
        workbook.Sheets[SheetNames[0]]
      );
      this.ExcelData = data.map((res) => ({ ...res, userSelected: "" }));
    };
  }
  change(data: any, index: any) {
    this.ExcelData[index].userSelected = data;
  }
  onSubmitHandler() {}
}
