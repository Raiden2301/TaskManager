package com.etti.taskManager.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.etti.taskManager.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	
	@Query("FROM Employee where userName = :username")
	public Employee loginEmployee(
			@Param("username") String username);
	
}
