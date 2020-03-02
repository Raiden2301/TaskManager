package com.etti.taskManager.repository;

import org.springframework.data.repository.CrudRepository;

import com.etti.taskManager.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
	
}
