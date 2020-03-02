package com.etti.taskManager.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etti.taskManager.model.Employee;
import com.etti.taskManager.repository.EmployeeRepository;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService{
	
	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public List<Employee> getAllEmployees() {
		return (List<Employee>) employeeRepository.findAll();
	}

	@Override
	public Employee getEmployeesById(Long id) {
		Employee empl = employeeRepository.findById(id).get();
		return empl;
	}

}
