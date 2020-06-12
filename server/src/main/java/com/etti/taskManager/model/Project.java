package com.etti.taskManager.model;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "project")
public class Project {
	
	
	@Id
	@Column(name = "id", updatable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "name", updatable = true, nullable = false)
	private String name;
	
	@Column(name = "description", updatable = true, nullable = false)
	private String description;
	
	@Column(name = "start_date", updatable = true, nullable = true)
	private Date startDate;
	
	@Column(name = "expected_delivery_date", updatable = true, nullable = true)
	private Date expectedDeliveryDate;
	
//	@JsonManagedReference(value = "projects_tasks")
	@OneToMany(mappedBy="projectId")
	private Set<Task> tasks;
	
	@JsonBackReference
	@ManyToMany(
			fetch=FetchType.EAGER)
	@JoinTable(
			name = "assigned_projects", 
			joinColumns = @JoinColumn(name = "project_id"), 
			inverseJoinColumns = @JoinColumn(name = "employee_id"))
	Set<Employee> assignedEmployees;
	
	public Project() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStartDate() {
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		return formatter.format(startDate);
	}
	
	public Date getStartDateForSave() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public String getExpectedDeliveryDate() {
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		return formatter.format(expectedDeliveryDate);
	}
	public Date getExpectedDeliveryDateForSave() {
		return expectedDeliveryDate;
	}

	public void setExpectedDeliveryDate(Date expectedDeliveryDate) {
		this.expectedDeliveryDate = expectedDeliveryDate;
	}

	public Set<Task> getTasks() {
		return tasks;
	}

	public void setTasks(Set<Task> tasks) {
		this.tasks = tasks;
	}

	public Set<Employee> getAssignedEmployees() {
		return assignedEmployees;
	}

	public void setAssignedEmployees(Set<Employee> assignedEmployees) {
		this.assignedEmployees = assignedEmployees;
	}
	
}
