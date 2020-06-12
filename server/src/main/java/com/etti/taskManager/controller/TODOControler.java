package com.etti.taskManager.controller;

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

import com.etti.taskManager.model.TODO;
import com.etti.taskManager.service.TODOService;

@CrossOrigin
@RestController
@RequestMapping(value = "/todo")
public class TODOControler {
	
	@Autowired
	TODOService todoService;
	
	@GetMapping(produces = "application/json", value = "/getTODOByEmployee/{id}/")
	public Set<TODO> getTODOByEmployee(@PathVariable Long id){
		Set<TODO> todo = todoService.getTODOByEmployee(id);
		return todo;
	}
	
	@PostMapping(produces = "application/json", value="/save/")
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public TODO save(@RequestBody TODO todo) {
		todoService.createUpdateTODO(todo);
		return todo;
	}
	
	@DeleteMapping(value = "/delete/{id}/")
    public ResponseEntity<TODO> delete(@PathVariable Long id) {

        try{
        	todoService.deleteTODOById(id);
        	return new ResponseEntity<TODO>(HttpStatus.OK);
        }catch (Exception e) {
        	return new ResponseEntity<TODO>(HttpStatus.NOT_FOUND);
		}
    }

}
