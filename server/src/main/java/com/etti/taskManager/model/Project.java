package com.etti.taskManager.model;

import java.util.Date;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "project")
public class Project {
	
	@Id
	@Column(name = "id", updatable = false, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "name", updatable = true, nullable = false)
	private String name;
	
	@Column(name = "description", updatable = true, nullable = false)
	private String description;
	
	@Column(name = "comments", updatable = true, nullable = true)
	private String comments;
	
	@Column(name = "key_words", updatable = true, nullable = true)
	private String keyWords;
	
	@Column(name = "start_date", updatable = true, nullable = true)
	private Date startDate;
	
	@Column(name = "expected_delivery_date", updatable = true, nullable = true)
	private Date expectedDeliveryDate;
	
	@Column(name = "end_date", updatable = true, nullable = true)
	private Date endDate;
	
	@ManyToMany(mappedBy = "projects")
    private Set<Employee> employees = new HashSet<>();
	
	@OneToMany(
			mappedBy = "project",
			cascade = CascadeType.ALL,
			orphanRemoval = true)
	private List<Task> tasks = new LinkedList<>();

	public Project() {
		super();
	}

	public Project(String name, String description, String comments, String keyWords, Date startDate,
			Date expectedDeliveryDate, Date endDate, Set<Employee> employees, List<Task> tasks) {
		super();
		this.name = name;
		this.description = description;
		this.comments = comments;
		this.keyWords = keyWords;
		this.startDate = startDate;
		this.expectedDeliveryDate = expectedDeliveryDate;
		this.endDate = endDate;
		this.employees = employees;
		this.tasks = tasks;
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

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getKeyWords() {
		return keyWords;
	}

	public void setKeyWords(String keyWords) {
		this.keyWords = keyWords;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getExpectedDeliveryDate() {
		return expectedDeliveryDate;
	}

	public void setExpectedDeliveryDate(Date expectedDeliveryDate) {
		this.expectedDeliveryDate = expectedDeliveryDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Set<Employee> getEmployees() {
		return employees;
	}

	public void setEmployees(Set<Employee> employees) {
		this.employees = employees;
	}

	public List<Task> getTasks() {
		return tasks;
	}

	public void setTasks(List<Task> tasks) {
		this.tasks = tasks;
	}

	@Override
	public String toString() {
		return "Project [id=" + id + ", name=" + name + ", description=" + description + ", comments=" + comments
				+ ", keyWords=" + keyWords + ", startDate=" + startDate + ", expectedDeliveryDate="
				+ expectedDeliveryDate + ", endDate=" + endDate + ", employees=" + employees + ", tasks=" + tasks.toString() + "]";
	}

	

}
