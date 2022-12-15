import { Component, OnInit } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-card-example',
  templateUrl: './card-example.component.html',
  styleUrls: ['./card-example.component.css']
})
export class CardExampleComponent implements OnInit {
  data = "{\"id\":\"Q4648058\",\"schema\":\"Person\",\"properties\":{\"country\":[\"in\"],\"name\":[\"A. Krishnaswamy\"],\"topics\":[\"role.pep\"],\"modifiedAt\":[\"2022-09-03\"],\"gender\":[\"male\"],\"notes\":[\"Indian politician\"],\"alias\":[\"அ. கிருட்டிணசாமி\",\"എ കൃഷ്ണസ്വാമി\"],\"wikidataId\":[\"Q4648058\"],\"firstName\":[\"A.\"],\"birthDate\":[\"1965-12-12\"],\"nationality\":[\"in\"],\"birthPlace\":[\"Tamil Nadu\"],\"position\":[\"Member of the 13th Lok Sabha\"]},\"referents\":[],\"datasets\":[\"wikidata\",\"wd_peppercat_legislators\"],\"first_seen\":\"2022-01-17T01:29:38\",\"last_seen\":\"2022-12-13T12:35:01\",\"caption\":\"A. Krishnaswamy\",\"target\":true}"



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




  
 



 

res2;
 res;
parsedJson;
  
  constructor() { }
  ngOnInit(): void {
    this.parsedJson= JSON.parse(this.data) 
    // console.log(this.parsedJson)
 let   text=this.parsedJson
  console.log(this.flattenObj(text))

     this.res2= this.flattenObj(text) 
      // this.res=this.printObjectKeysAndValues(null,text)
  //  console.log(this.printObjectKeysAndValues(null,text))
 
  }


}







 //  printObjectKeysAndValues(key=null,obj) {
  //  let result = {}


  //   if (Array.isArray(obj)) {
  //     //result[key]=obj[key]
  //     // console.log(  key, obj)
  //    }
    
    
  //   for (let key in obj) {

  //     result[key]=obj[key]


      

  //     if (typeof obj[key] === 'object') {
     
      
  //      this. printObjectKeysAndValues(  key,obj[key])
          
  //     } else if (!Array.isArray(obj)){
  //       result[key]=obj[key]
  //       //  console.log(key + ': ' + obj[key]);
  //     }
    
  //   }
  //   return result
  // }





//   deepIterator(target) {
  //   if (Array.isArray(target)) {
  //     for (const element of target) {
  //      this. deepIterator(element);
  //     }

  //   } else if (typeof target === "object") {
  //     for (const key in target) {
         
  //       this.deepIterator(target[key]);
      
  //     }      
      
  //   } else {
  //     console.log(target);
  //   }
  // }



  
  //   propertiesToArray(obj) {
  //   const isObject = val =>
  //     val && typeof val === 'object' && !Array.isArray(val);
  
  //   const addDelimiter = (a, b) =>
  //     a ? `${a}.${b}` : b;
  
  //   const paths = (obj = {}, head = '') => {
  //     return Object.entries(obj)
  //       .reduce((product, [key, value]) => 
  //         {
  //           let fullPath = addDelimiter(head, key)
  //           return isObject(value) ?
  //             product.concat(paths(value, fullPath))
  //           : product.concat(fullPath)
  //         }, []);
  //   }
  
  //   return paths(obj);
  // }
    
 

//   iterate(obj) {
//     var walked = [];
//     var stack = [{obj: obj, stack: ''}];
//     while(stack.length > 0)
//     {
//         var item = stack.pop();
//         var obj = item.obj;
//         for (var property in obj) {
//             if (obj.hasOwnProperty(property)) {
//                 if (typeof obj[property] == "object") {
//                   var alreadyFound = false;
//                   for(var i = 0; i < walked.length; i++)
//                   {
//                     if (walked[i] === obj[property])
//                     {
//                       alreadyFound = true;
//                       break;
//                     }
//                   }
//                   if (!alreadyFound)
//                   {
//                     walked.push(obj[property]);
//                     stack.push({obj: obj[property], stack: item.stack + '.' + property});
//                   }
//                 }
//                 else
//                 {
//                     console.log(item.stack + '.' + property + ":" + obj[property]);
//                 }
//             }
//         }
//     }
// }