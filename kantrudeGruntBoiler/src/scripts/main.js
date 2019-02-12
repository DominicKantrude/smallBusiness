import API from "./dataCollection"
import printToDom from "./printToDom"
API.getEmployeesWithDepAndComp().then(parsedData=>{
    printToDom(parsedData)
})