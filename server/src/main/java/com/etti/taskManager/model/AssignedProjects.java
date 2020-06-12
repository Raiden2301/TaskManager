package com.etti.taskManager.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import com.etti.taskManager.model.AssignedProjectsId;

@Entity
@IdClass(AssignedProjectsId.class)
@Table(name = "assigned_projects")
public class AssignedProjects {
	
	@Id
	@Column(name = "project_id", updatable = true, nullable = false)
	private Long projectId;
	
	@Id
	@Column(name = "employee_id", updatable = true, nullable = false)
	private Long employeeId;
	
	
	
	public AssignedProjects() {
		super();
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
