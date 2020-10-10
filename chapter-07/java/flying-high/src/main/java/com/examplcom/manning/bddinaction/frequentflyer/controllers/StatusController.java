package com.examplcom.manning.bddinaction.frequentflyer.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatusController {

	@RequestMapping("/")
	public String index() {
		return "BDD In Action Chapter 7";
	}

}