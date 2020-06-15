package com.etti.taskManager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.etti.taskManager.Utils.Sender;
import com.etti.taskManager.model.Task;

@CrossOrigin
@RestController
@RequestMapping(value = "/report")
public class ReportController {
	
	@Autowired
    private JavaMailSender javaMailSender;
	
	@PostMapping(produces = "application/json", value="/send/")
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public void saveTask(@RequestBody Sender sender) {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo("mireabogdancristian@gmail.com");

        msg.setSubject(sender.getSubject());
        msg.setText(sender.toString());

        javaMailSender.send(msg);
	}

}
