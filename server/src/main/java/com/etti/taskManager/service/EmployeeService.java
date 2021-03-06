package com.etti.taskManager.service;

import java.util.List;

import com.etti.taskManager.model.Employee;

public interface EmployeeService {
	
	public List<Employee> getAllEmployees();
	
	public Employee getEmployeesById(Long id);
	
}
