package com.etti.taskManager;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping(value = {"/employees/", "/projects/"})
	public String index() {
		return "index";
	}
}
