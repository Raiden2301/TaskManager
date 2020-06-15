package com.etti.taskManager.service;

import java.util.Set;

import com.etti.taskManager.model.TODO;

public interface TODOService {
	
	public Set<TODO> getTODOByEmployee(Long employeeId);
	
	public TODO createUpdateTODO(TODO todo);
	
	public void deleteTODOById( Long id);

}
