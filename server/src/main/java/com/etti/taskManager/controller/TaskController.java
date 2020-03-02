package com.etti.taskManager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etti.taskManager.model.Task;
import com.etti.taskManager.service.TaskService;

@RestController
@RequestMapping(value = "/tasks")
public class TaskController {
	
	@Autowired
	TaskService taskService;
	
	@GetMapping(produces = "application/json", value = "/getTasks/")
	public List<Task> getAllTasks(){
		List<Task> task = taskService.getAllTasks();
		System.out.println(task);
		return task;
	}
	
	@GetMapping(produces = "application/json", value = "/getTask/{id}")
	public Task getTaskById(@PathVariable Long id){
		Task task = taskService.getTaskById(id);
		System.out.println("Asta am gasit: " + task.toString());
		return task;
	}
}
