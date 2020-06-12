package com.etti.taskManager.model;

import java.io.Serializable;

public class AssignedProjectsId implements Serializable {
	
	private Long projectId;
	 
	private Long employeeId;
	

	public AssignedProjectsId() {
		super();
	}

	public AssignedProjectsId(Long projectId, Long employeeId) {
		super();
		this.projectId = projectId;
		this.employeeId = employeeId;
	}

	public Long getProjectId() {
		return projectId;
	}

	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}

	public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}
 

}
