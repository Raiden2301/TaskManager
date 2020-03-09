package com.etti.taskManager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etti.taskManager.model.Employee;
import com.etti.taskManager.service.EmployeeService;

@CrossOrigin
@RestController
@RequestMapping(value = "/employees")
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;
	
	
	@GetMapping(produces = "application/json", value = "/getEmployees/")
	public List<Employee> getAllEmployees(){
		List<Employee> employees = employeeService.getAllEmployees();
		System.out.println(employees);
		return employees;
	}
	
	@GetMapping(produces = "application/json", value = "/getEmployee/{id}/")
	public Employee getEmployeesById(@PathVariable Long id){
		Employee employee = employeeService.getEmployeesById(id);
		System.out.println("Asta am gasit: " + employee.toString());
		return employee;
	}
	
    @DeleteMapping(value = "/deleteEmployee/{id}/")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable Long id) {

        try{
        	employeeService.deleteEmployeeById(id);
        	return new ResponseEntity<Employee>(HttpStatus.OK);
        }catch (Exception e) {
        	return new ResponseEntity<Employee>(HttpStatus.NOT_FOUND);
		}
    }
}
