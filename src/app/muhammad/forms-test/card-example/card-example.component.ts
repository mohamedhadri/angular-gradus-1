import { Component, OnInit } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-card-example',
  templateUrl: './card-example.component.html',
  styleUrls: ['./card-example.component.css']
})
export class CardExampleComponent implements OnInit {
  data = "{\"id\":\"Q4648058\",\"schema\":\"Person\",\"properties\":{\"country\":[\"in\"],\"name\":[\"A. Krishnaswamy\"],\"topics\":[\"role.pep\"],\"modifiedAt\":[\"2022-09-03\"],\"gender\":[\"male\"],\"notes\":[\"Indian politician\"],\"alias\":[\"அ. கிருட்டிணசாமி\",\"എ കൃഷ്ണസ്വാമി\"],\"wikidataId\":[\"Q4648058\"],\"firstName\":[\"A.\"],\"birthDate\":[\"1965-12-12\"],\"nationality\":[\"in\"],\"birthPlace\":[\"Tamil Nadu\"],\"position\":[\"Member of the 13th Lok Sabha\"]},\"referents\":[],\"datasets\":[\"wikidata\",\"wd_peppercat_legislators\"],\"first_seen\":\"2022-01-17T01:29:38\",\"last_seen\":\"2022-12-13T12:35:01\",\"caption\":\"A. Krishnaswamy\",\"target\":true}"
  parsedJson
  flatObj;
   flattenObj = (ob) => {
    let result = {};
    for (const i in ob) {
 
        if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
            const temp = this.flattenObj(ob[i]);
            for (const j in temp) {
                // Store temp in result
                result[i + ' > ' + j] = temp[j].join(" - ");
            }
        }
        else {
            result[i] = ob[i];
        }
    }
    return result

}; 

  constructor() { }
  ngOnInit(): void {
    this.parsedJson= JSON.parse(this.data) 
    // console.log(this.parsedJson)
 let   text=this.parsedJson
  console.log(this.flattenObj(text))

     this.flatObj= this.flattenObj(text) 
      
  }


}


 
 
  