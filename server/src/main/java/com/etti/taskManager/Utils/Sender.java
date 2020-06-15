package com.etti.taskManager.Utils;

public class Sender {
	
	private String firstName;
	private String lastName;
	private String email;
	private String Subject;
	private String message;
	
	public Sender() {
		super();
	}

	public Sender(String firstName, String lastName, String email, String subject, String message) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		Subject = subject;
		this.message = message;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSubject() {
		return Subject;
	}

	public void setSubject(String subject) {
		Subject = subject;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return firstName.toUpperCase() + " " + lastName.toUpperCase() + " with email: " + email + "\n Has the folowing message: " + message;
	}
	
}
