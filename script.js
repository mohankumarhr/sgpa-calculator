
var noOfSubjects;
var marks;
var credits;
var totalCredits=0;
var count=0;
var total = 0;
var grade=0;
 
 document.querySelector(".no-of-subjects button").addEventListener("click",function() {
     noOfSubjects = document.querySelector("#subjects").value;
    document.querySelector("#subjects").value = "";
    document.querySelector(".calculator").classList.remove("active-calculator");
    document.querySelector(".no-of-subjects").classList.add("active-subjects");
    
 })

 document.querySelector(".calculator h3").innerHTML = ("enter the marks and credits of subject "+(count+1));
        document.querySelector(".calculator button").addEventListener("click",function() {
            count++;
            if(count < noOfSubjects){
            document.querySelector(".calculator h3").innerHTML = ("enter the marks and credits of subject "+(count+1));
            marks = document.querySelector("#marks").value;
            credits = Number(document.querySelector("#credits").value);
            totalCredits = credits+totalCredits;
          document.querySelector("#marks").value = "";
            document.querySelector("#credits").value = "";
           marksEntery(marks,credits);
            }
            else if(count == noOfSubjects){
                document.querySelector(".calculator h3").innerHTML = ("enter the marks and credits of subject "+(count+1));
                marks = document.querySelector("#marks").value;
            credits = Number(document.querySelector("#credits").value);
            totalCredits = credits+totalCredits;
          document.querySelector("#marks").value = "";
            document.querySelector("#credits").value = "";
           marksEntery(marks,credits);
           document.querySelector(".calculator").classList.add("active-calculator");
           document.querySelector(".result").classList.remove("active-result");
           finalResult(total,totalCredits);
            }
            else{
                console.log("some error");
            }
            
        })
     
 
 
 function marksEntery(marks , credit) {
              if(marks<=100){
    
                if((marks>=0)&&(marks<10))
                     grade = 1;
                if((marks>=10)&&(marks<20))
                     grade = 2;
                if((marks>=20)&&(marks<30))
                     grade = 3;
                 
                if((marks>=30)&&(marks<40))
                     grade = 4;
                    
                 if((marks>=40)&&(marks<50))
                    grade =5;
                    
                if((marks>=50)&&(marks<60))
                     grade = 6;
                    
                 if((marks>=60)&&(marks<70))
                     grade = 7;
                    
                if((marks>=70)&&(marks<80))
                     grade = 8;
                    
                if((marks>=80)&&(marks<90))
                     grade = 9;
                    
                if((marks>=90)&&(marks<=100))
                     grade = 10;
                    
                var temp = grade*credit;
                    total = temp+total;
              }
              else{
                console.log("this an error");
              }
        
 }


function finalResult(total,totalCredits){
    var finalNumber = (Number((total/totalCredits).toString().slice(0,3)));
  document.querySelector("#result-text").innerHTML = ("Congratulations your SGPA is "+finalNumber);
  document.querySelector(".result button").addEventListener("click",function() {
    window.location.reload();
  })
  
}





 
 
 

