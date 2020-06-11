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

import com.etti.taskManager.model.Task;
import com.etti.taskManager.service.TaskService;

@CrossOrigin
@RestController
@RequestMapping(value = "/tasks")
public class TaskController {

	@Autowired
	TaskService taskService;
	
	
	@GetMapping(produces = "application/json", value = "/getTasks/")
	public List<Task> getAllTasks(){
		List<Task> tasks = taskService.getAllTasks();
		System.out.println(tasks);
		return tasks;
	}
	
	@GetMapping(produces = "application/json", value = "/getTask/{id}/")
	public Task getTasksById(@PathVariable Long id){
		Task task = taskService.getTaskById(id);
		System.out.println("Asta am gasit: " + task.toString());
		return task;
	}
	@CrossOrigin
	@GetMapping(produces = "application/json", value = "/getTaskByProject/{id}/")
	public Set<Task> getTasksByProject(@PathVariable Long id){
		Set<Task> task = taskService.getTasksByProject(id);
		System.out.println("Asta am gasit: " + task.toString());
		return task;
	}
	
	@GetMapping(produces = "application/json", value = "/getTaskByEmployee/{id}/")
	public Set<Task> getTasksByEmployee(@PathVariable Long id){
		Set<Task> task = taskService.getTasksByEmployee(id);
		System.out.println("Asta am gasit: " + task.toString());
		return task;
	}
	
	@PostMapping(produces = "application/json", value="/save/")
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public Task saveTask(@RequestBody Task task) {
		System.out.println(task.toString());
		taskService.createUpdateTask(task);
		System.out.println(task);
		return task;
	}
	
    @DeleteMapping(value = "/deleteTask/{id}/")
    public ResponseEntity<Task> deleteTask(@PathVariable Long id) {

        try{
        	taskService.deleteTaskById(id);
        	return new ResponseEntity<Task>(HttpStatus.OK);
        }catch (Exception e) {
        	return new ResponseEntity<Task>(HttpStatus.NOT_FOUND);
		}
    }
}
