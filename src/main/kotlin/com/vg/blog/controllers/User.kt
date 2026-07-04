package com.vg.blog.controllers

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

import com.vg.blog.services.UserService
import com.vg.blog.models.User
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody


@RestController
@CrossOrigin(origins=["http://localhost:4200"])
@RequestMapping("/api/v1/users")
class UserController(private val service: UserService) {
    @GetMapping
    fun getAllUsers(): List<User> = service.getAllUsers()
    @GetMapping("/{login}")
    fun getUserByLogin(login: String): User? = service.getUserByLogin(login)
    @GetMapping("/{id}")
    fun getUserById(id: Long): User? = service.getUserById(id)
    
    @DeleteMapping("/{id}")
    fun deleteUser(@PathVariable id: Long) = service.deleteUser(id)
    
    @PostMapping
    fun createUser(@RequestBody user: User) = service.createUser(user)
}