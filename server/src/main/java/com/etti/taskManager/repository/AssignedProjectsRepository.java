package com.etti.taskManager.repository;

import org.springframework.data.repository.CrudRepository;

import com.etti.taskManager.model.AssignedProjects;
import com.etti.taskManager.model.Employee;

public interface AssignedProjectsRepository extends CrudRepository<AssignedProjects, Long>{

}
