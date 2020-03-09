package com.etti.taskManager.model;

import java.sql.Time;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Task {
	
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
	
	@Column(name = "end_date", updatable = true, nullable = true)
	private Date endDate;
	
	@Column(name = "expected_delivery_date", updatable = true, nullable = true)
	private Date expectedDeliveryDate;
	
	@Column(name = "estimated_time", updatable = true, nullable = true)
	private Time estimatedTime;
	
	@Column(name = "logged_time", updatable = true, nullable = true)
	private Time loggedTime;
	
	@Column(name = "status", updatable = true, nullable = true)
	private String status;
	
	@ManyToOne
	@JoinColumn(name = "project_id")
	private Project project;

	public Task() {
		super();
	}

	public Task(String name, String description, String comments, String keyWords, Date startDate, Date endDate,
			Date expectedDeliveryDate, Time estimatedTime, Time loggedTime, String status, Project project) {
		super();
		this.name = name;
		this.description = description;
		this.comments = comments;
		this.keyWords = keyWords;
		this.startDate = startDate;
		this.endDate = endDate;
		this.expectedDeliveryDate = expectedDeliveryDate;
		this.estimatedTime = estimatedTime;
		this.loggedTime = loggedTime;
		this.status = status;
		this.project = project;
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

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Date getExpectedDeliveryDate() {
		return expectedDeliveryDate;
	}

	public void setExpectedDeliveryDate(Date expectedDeliveryDate) {
		this.expectedDeliveryDate = expectedDeliveryDate;
	}

	public Time getEstimatedTime() {
		return estimatedTime;
	}

	public void setEstimatedTime(Time estimatedTime) {
		this.estimatedTime = estimatedTime;
	}

	public Time getLoggedTime() {
		return loggedTime;
	}

	public void setLoggedTime(Time loggedTime) {
		this.loggedTime = loggedTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", name=" + name + ", description=" + description + ", comments=" + comments
				+ ", keyWords=" + keyWords + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", expectedDeliveryDate=" + expectedDeliveryDate + ", estimatedTime=" + estimatedTime
				+ ", loggedTime=" + loggedTime + ", status=" + status + "]";
	}

	
}
