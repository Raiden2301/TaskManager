package com.etti.taskManager.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.etti.taskManager.model.Project;
import com.etti.taskManager.service.ProjectService;
import com.fasterxml.jackson.annotation.JsonIgnore;

@CrossOrigin
@RestController
@RequestMapping(value = "/projects")
public class ProjectController {
	
	@Autowired
	ProjectService projectService;
	
	@GetMapping(produces = "application/json", value = "/getProjects/")
	public List<Project> getAllProjects(){
		List<Project> projects = projectService.getAllProjects();
		System.out.println("Asta am gasit: \n" + projects);
		return projects;
	}

	@GetMapping(produces = "application/json", value = "/getProjectsByEmployee/{employeeId}")
	public Set<Project> getProjectsByEmployee(@PathVariable Long employeeId){
		Set<Project> projects = (Set<Project>) projectService.getProjectsByEmployee(employeeId);
		System.out.println("Asta am gasit: \n" + projects);
		return projects;
	}
	
	@GetMapping(produces = "application/json", value = "/getProject/{id}")
	public Project getProjectById(@PathVariable Long id){
		Project project = projectService.getProjectById(id);
		System.out.println("Asta am gasit: " + project.toString());
		return project;
	}
	
	@PostMapping(produces = "application/json", value="/save/")
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public Project saveProject(@RequestBody Project project) {
		projectService.createUpdateProject(project);
		return project;
	}
	
	@DeleteMapping(value = "deleteProject/{id}")
	public ResponseEntity<Project>deleteProject (@PathVariable Long id){
		try {
			projectService.deleteProjectById(id);
			return new ResponseEntity<Project>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<Project>(HttpStatus.NOT_FOUND);
		}
	}
	
}
