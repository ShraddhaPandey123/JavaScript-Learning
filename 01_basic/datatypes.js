"use strict"; //treats all js code as new version.
/*
Data Types => 1) Primitive Data Type
              2) Non Prmitive Data Type

              1) Primitive Data Type
                    a) number (range upto 2**53)
                    b) bigint (above to 2**53) [stock market and facebook]
                    c) string (always use "")
                    d) boolean (true / false)
                    e) uindefined (a value not yet to be assigned)
                    f) null (empty / standalone value)
                    g) symbol(uniqueness mainly used to show uniqueness b/w components[Figma & React])   
                    
              2) Non Primitive Data Type
                    a)Array 
                    b)Object
*/

let empId=12;
console.log(empId);
console.log(typeof empId);

let empName="shraddha";
console.log(empName);
console.log(typeof empName);

let empStatus=true;
console.log(empStatus);
console.log(typeof empStatus);

let empSalary=undefined;
console.log(empSalary);
console.log(typeof empSalary);//undefined

/*let empSalary1;
console.log(empSalary1);
console.log(typeof empSalary1);*/

let statetemperature=null;
console.log(statetemperature);
console.log(typeof statetemperature); //object