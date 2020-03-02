package com.etti.taskManager.service;

import java.util.List;

import com.etti.taskManager.model.Task;

public interface TaskService {
	
	public List<Task> getAllTasks();
	
	public Task getTaskById(Long id);

}
