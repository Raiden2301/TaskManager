package com.etti.taskManager.service;

import java.util.List;
import java.util.Set;

import com.etti.taskManager.model.Task;

public interface TaskService {
	
	public List<Task> getAllTasks();
	
	public Task getTaskById(Long id);
	
	public Set<Task> getTasksByProject(Long projectId);
	
	public Set<Task> getTasksByEmployee(Long employeeId);
	
	public Task createUpdateTask(Task task);
	
	public void deleteTaskById( Long id);

}
