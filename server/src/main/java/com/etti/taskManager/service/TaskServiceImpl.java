package com.etti.taskManager.service;

import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etti.taskManager.model.Employee;
import com.etti.taskManager.model.Task;
import com.etti.taskManager.repository.TaskRepository;

@Service
@Transactional
public class TaskServiceImpl implements TaskService {
	
	@Autowired
	TaskRepository taskRepository;

	@Override
	public List<Task> getAllTasks() {
		return (List<Task>) taskRepository.findAll();
	}

	@Override
	public Task getTaskById(Long id) {
		Task task = taskRepository.findById(id).get();
		return task;
	}
	
	@Override
	public Set<Task> getTasksByProject(Long projectId) {
		return taskRepository.findTasksByProject(projectId);
	}
	

	@Override
	public void deleteTaskById(Long id) {
		Task entity = taskRepository.findById(id).get();
		System.out.println(entity + "Has been deleted!");
		taskRepository.delete(entity);
	}

	@Override
	public Task createUpdateTask(Task task) {
		task = taskRepository.save(task);
		return null;
	}

	@Override
	public Set<Task> getTasksByEmployee(Long employeeId) {
		return taskRepository.findTasksByEmployee(employeeId);
	}


}
