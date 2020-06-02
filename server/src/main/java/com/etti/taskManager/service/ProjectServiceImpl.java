package com.etti.taskManager.service;

import java.util.List;
import java.util.Optional;

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

	@Override
	public Project createUpdateProject(Project project) {
//        Optional<Project> tempProject = projectRepository.findById(project.getId());
//        
//        if(tempProject.isPresent()) {
//        	Project newEntity = tempProject.get();
//        	newEntity.setName(project.getName());
//        	newEntity.setDescription(project.getDescription());
//        	newEntity.setComments(project.getComments());
//        	newEntity.setKeyWords(project.getKeyWords());
//        	newEntity.setStartDate(project.getStartDateForSave());
//        	newEntity.setExpectedDeliveryDate(project.getExpectedDeliveryDateForSave());
//        	newEntity.setTasks(project.getTasks());
// 
//            newEntity = projectRepository.save(newEntity);
//             
//            return newEntity;
//        } else {
			System.out.println("Ce trimite babacu:" + project);
        	project = projectRepository.save(project);
             
            return project;
		
	}

	@Override
	public void deleteProjectById(Long id) {
		// TODO Auto-generated method stub
		Project entityProject = projectRepository.findById(id).get();
		System.out.println(entityProject + "Has been deleted!");
		projectRepository.delete(entityProject);
	}
	
	

}
