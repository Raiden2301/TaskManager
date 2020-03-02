package com.etti.taskManager.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etti.taskManager.model.Project;
import com.etti.taskManager.repository.ProjectRepository;


@Service
@Transactional
public class ProjectServiceImpl implements ProjectService {
	
	@Autowired
	ProjectRepository projectRepository;

	@Override
	public List<Project> getAllProjects() {
		return  (List<Project>) projectRepository.findAll();
	}

	@Override
	public Project getProjectById(Long id) {
		// TODO Auto-generated method stub
		Project proj = projectRepository.findById(id).get();
		return proj;
	}

}
