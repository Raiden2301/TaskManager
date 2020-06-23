package com.etti.taskManager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.etti.taskManager.model.Employee;
import com.etti.taskManager.model.Project;
import com.etti.taskManager.service.EmployeeService;
import com.etti.taskManager.service.ProjectService;
import com.etti.taskManager.Utils.UserAccount;;

@CrossOrigin
@RestController
@RequestMapping(value = "/employees")
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;
	@Autowired
	ProjectService projectService;
	
	@CrossOrigin
	@GetMapping(produces = "application/json", value = "/getEmployees/")
	public List<Employee> getAllEmployees(){
		List<Employee> employees = employeeService.getAllEmployees();
		System.out.println("S-a activat getAllEmployyes");
		return employees;
	}
	
	@CrossOrigin
	@GetMapping(produces = "application/json", value = "/getEmployee/{id}/")
	public Employee getEmployeesById(@PathVariable Long id){
		Employee employee = employeeService.getEmployeesById(id);
		return employee;
	}
	
	@CrossOrigin
	@PostMapping(produces = "application/json", value="/loginEmployee/")
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public Employee loginEmployee(@RequestBody UserAccount user){
		Employee employee = employeeService.loginEmployee(user.getUsername());
		if(employee.getPassword().equals(user.getPassword())){
			return employee;
		}
		return null;
	}
	
	@PostMapping(produces = "application/json", value="/save/")
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public Employee createUpdateEmployee(@RequestBody Employee employee) {
		
		employeeService.save(employee);
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
