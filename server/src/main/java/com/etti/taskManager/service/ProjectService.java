package com.etti.taskManager.service;

import java.util.List;

import com.etti.taskManager.model.Project;

public interface ProjectService {
	
	public List<Project> getAllProjects();
	
	public Project getProjectById(Long id);
	
	public Project createUpdateProject(Project project);
	
	public void deleteProjectById( Long id);
}
