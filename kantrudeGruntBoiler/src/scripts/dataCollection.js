const API = {
    getEmployeesWithDepAndComp() {
        return fetch("http://localhost:8088/employees?_expand=computer&_expand=department")
            .then(res => res.json())
    }
}

   export default API
