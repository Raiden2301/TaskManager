package com.etti.taskManager.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etti.taskManager.model.AssignedProjects;
import com.etti.taskManager.repository.AssignedProjectsRepository;

@Service
@Transactional
public class AssignedProjectsServiceImpl implements AssignedProjectsService{

	@Autowired
	AssignedProjectsRepository assignedProjectsRepository;
	
	@Override
	public AssignedProjects save(AssignedProjects assignedProjects) {
		assignedProjects = assignedProjectsRepository.save(assignedProjects);
		return assignedProjects;
	}

}
