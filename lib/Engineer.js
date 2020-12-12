// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
/*
github  // GitHub username

getGithub()

getRole() // Overridden to return 'Engineer'
 */

 //create a class 
 //export the engineer class 
 

 class Engineer{
     constructor(username, gitHub){
         this.username = username;
         this.gitHub = gitHub;
     }

     getUsername(){
         return this.username;
     }

     getGithub(){
         return this.gitHub;
     }

 }

 module.exports = Engineer; 
