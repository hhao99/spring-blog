package com.vg.blog

import com.vg.blog.services.UserService
import com.vg.blog.models.User

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean


@SpringBootApplication
class BlogApplication {
	@Bean
	fun init(service: UserService) = CommandLineRunner {
		// Initialization code here
		println("BlogApplication started ")
		
		// create users
		val user1 = service.createUser(User(login = "user1", email = "user1@example.com"))
	}
}

fun main(args: Array<String>) {
	runApplication<BlogApplication>(*args)
}
