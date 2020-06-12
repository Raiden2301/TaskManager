package com.etti.taskManager.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.etti.taskManager.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
	
	@Query(" SELECT DISTINCT p FROM Project p LEFT JOIN fetch p.assignedEmployees e where e.id =:employeeId")
	public Set<Project> findProjectsByEmployee(
			@Param("employeeId") Long employeeId);
	
}
