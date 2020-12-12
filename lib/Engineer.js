// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
/*
github  // GitHub username

getGithub()

getRole() // Overridden to return 'Engineer'
 */

 //create a class 
 //export the engineer class 
 const Employee = require("./Employee.js");

 class Engineer extends Employee{
     constructor(name, id, email, github){
        super(name,id,email); 
        //this.username = username;
         this.github = github;
     }  

     getGithub(){
         return this.github;
     }

     getRole(){
         return "Engineer";
     }

 }

 module.exports = Engineer; 
