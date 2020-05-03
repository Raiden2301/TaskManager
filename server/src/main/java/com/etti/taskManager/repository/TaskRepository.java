package com.etti.taskManager.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.etti.taskManager.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
	
	@Query("FROM Task where project_id = :projectId")
	public Set<Task> findTasksByProject(
			@Param("projectId") Long projectId);
}
