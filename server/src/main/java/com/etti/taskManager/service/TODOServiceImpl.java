package com.etti.taskManager.service;

import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etti.taskManager.model.TODO;
import com.etti.taskManager.repository.TODORepository;

@Service
@Transactional
public class TODOServiceImpl implements TODOService {

	@Autowired
	TODORepository todoRepository;
	
	@Override
	public Set<TODO> getTODOByEmployee(Long employeeId) {
		return todoRepository.findTODOByEmployee(employeeId);
	}

	@Override
	public TODO createUpdateTODO(TODO todo) {
		return todoRepository.save(todo);
	}

	@Override
	public void deleteTODOById(Long id) {
		todoRepository.deleteById(id);
	}

}
