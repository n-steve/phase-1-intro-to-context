// Your code here
function createEmployeeRecord([firstName,familyName,title,payPerHour]){
    const timeInEvents =[];
    const timeOutEvents =[];
const employee ={
firstName:firstName,
familyName:familyName,
title:title,
payPerHour: payPerHour,
timeInEvents: timeInEvents, //add objects into not modify
timeOutEvents: timeOutEvents,
}

return employee;
}


function createEmployeeRecords(empty){
let twoRecords = []
for ( const elements of empty){
    let employees = createEmployeeRecord(elements)
    twoRecords.push(employees)
}
return twoRecords
}



function createTimeInEvent(createEmployeeRecord,date){

const splitDate = date.split(" ")
const correctDate = splitDate[0]
const correctHour = parseInt(splitDate[1])
const updateTimeIn = {type:"TimeIn",date:correctDate,hour:correctHour}
createEmployeeRecord.timeInEvents.push(updateTimeIn)

return createEmployeeRecord;


}


function createTimeOutEvent(createEmployeeRecord,date){
  const splitDate = date.split(" ")
  const correctDate = splitDate[0]
  const correctHour = parseInt(splitDate[1])
  const updateTimeIn = {type:"TimeOut",date:correctDate,hour:correctHour}
  createEmployeeRecord.timeOutEvents.push(updateTimeIn)
  
  return createEmployeeRecord;
  
  
  }

function hoursWorkedOnDate(createEmployeeRecord,date){
    let total = ""

    const main1 = createEmployeeRecord.timeInEvents
    let sub1 = ""
 for(const getDate of main1){
    if(getDate.date === date){
        sub1 = getDate.hour
    }
     }

const main2 = createEmployeeRecord.timeOutEvents
 let sub2 = ""
 for(const getDate2 of main2){
    if(getDate2.date === date){
        sub2 = getDate2.hour
    }
     }
     return total = (Math.abs(sub1 - sub2)/100)
 }
 
function wagesEarnedOnDate(createEmployeeRecord,date){
        const wages = hoursWorkedOnDate(createEmployeeRecord,date)
        const payRate = createEmployeeRecord.payPerHour
        const total = wages * payRate
return total;
  }
     
function allWagesFor(employeeRecord){
        let totalWage = 0
    for(const getDate of employeeRecord.timeInEvents){
        totalWage += wagesEarnedOnDate(employeeRecord,getDate.date)
    }
    return totalWage;
    }



function calculatePayroll(employeesRecords){
    console.debug(employeesRecords)
let employeeData = 0
    for(const employee of employeesRecords){
       employeeData += allWagesFor(employee)
    }
    return employeeData
}



















    /*const allEmployees = createEmployeeRecord
const updatedEmployee = allEmployees.timeInEvents
let data = ""
for(const getDate of updatedEmployee){
    if(getDate.date === getDate.date){
    
    data = getDate.date
    console.debug("hey",data)
    }
}
let data1 = ""
const updatedEmployee1 = allEmployees.timeOutEvents
for(const getDate1 of updatedEmployee1){
    if(getDate1.date === getDate1.date){
    
data1 = getDate1.date
console.debug("hey1",data1)
}

}
if(data === data1){
    console.debug(data === data1)
let calculate = wagesEarnedOnDate(createEmployeeRecord,date,data)
let payRate = calculate * createEmployeeRecord.payPerHour
console.debug(payRate)
}
}
*/
  




    
   
  


