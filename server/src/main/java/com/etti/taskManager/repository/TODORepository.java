package com.etti.taskManager.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.etti.taskManager.model.TODO;

public interface TODORepository extends JpaRepository<TODO, Long> {
	
	@Query("FROM TODO where employee_id = :employeeId")
	public Set<TODO> findTODOByEmployee(
			@Param("employeeId") Long employeeId);

}
