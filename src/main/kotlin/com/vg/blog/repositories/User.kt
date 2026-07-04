package com.vg.blog.repositories

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

import com.vg.blog.models.User

@Repository
interface UserRepository: CrudRepository<User, Long> {
    fun findByLogin(login: String): User?
}