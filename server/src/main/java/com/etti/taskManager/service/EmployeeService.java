package com.etti.taskManager.service;

import java.util.List;

import com.etti.taskManager.model.Employee;
import com.etti.taskManager.model.Project;

public interface EmployeeService {
	
	public List<Employee> getAllEmployees();
	
	public Employee getEmployeesById(Long id);
	
	public Employee loginEmployee(String username);
	
	public Employee save(Employee employee);
	
	public void deleteEmployeeById( Long id);
	
}
