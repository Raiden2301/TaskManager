package com.etti.taskManager.repository;

import org.springframework.data.repository.CrudRepository;

import com.etti.taskManager.model.Project;

public interface ProjectRepository extends CrudRepository<Project, Long> {
	
}
