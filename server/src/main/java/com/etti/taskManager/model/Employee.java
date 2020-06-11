package com.etti.taskManager.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {

	@Id
	@Column(name = "id", updatable = false, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "first_name", updatable = true, nullable = false)
	private String firstName;
	
	@Column(name = "last_name", updatable = true, nullable = false)
	private String lastName;

	@Column(name = "position", updatable = true, nullable = false)
	private String position;

	@Column(name = "skills", updatable = true, nullable = true)
	private String skills;

	@Column(name = "vechime", updatable = true, nullable = true)
	private String vechime;
	
	@Column(name = "email", updatable = true, nullable = true)
	private String email;
	
	@Column(name = "password", updatable = true, nullable = true)
	private String password;
    

	public Employee() {
		super();
	}

	public Employee(String firstName, String lastName, String position, String skills, String vechime,
			Set<Project> projects) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.position = position;
		this.skills = skills;
		this.vechime = vechime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public String getVechime() {
		return vechime;
	}

	public void setVechime(String vechime) {
		this.vechime = vechime;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


}
