package com.etti.taskManager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
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
