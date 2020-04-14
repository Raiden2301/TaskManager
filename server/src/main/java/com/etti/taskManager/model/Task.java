package com.etti.taskManager.model;

import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "task")
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
	private int estimatedTime;
	
	@Column(name = "logged_time", updatable = true, nullable = true)
	private int loggedTime;
	
	@Column(name = "status", updatable = true, nullable = true)
	private String status;
	
	@Column(name = "project_id")
	private Long projectId;
	
	public Task() {
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

	public String getStartDate() {
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		return formatter.format(startDate);
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		return formatter.format(endDate);
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getExpectedDeliveryDate() {
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		return formatter.format(expectedDeliveryDate);
	}

	public void setExpectedDeliveryDate(Date expectedDeliveryDate) {
		this.expectedDeliveryDate = expectedDeliveryDate;
	}

	public int getEstimatedTime() {
		return estimatedTime;
	}

	public void setEstimatedTime(int estimatedTime) {
		this.estimatedTime = estimatedTime;
	}

	public int getLoggedTime() {
		return loggedTime;
	}

	public void setLoggedTime(int loggedTime) {
		this.loggedTime = loggedTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	

	public Long getProjectId() {
		return projectId;
	}

	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", name=" + name + ", description=" + description + ", comments=" + comments
				+ ", keyWords=" + keyWords + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", expectedDeliveryDate=" + expectedDeliveryDate + ", estimatedTime=" + estimatedTime
				+ ", loggedTime=" + loggedTime + ", status=" + status + "]";
	}

	
}
