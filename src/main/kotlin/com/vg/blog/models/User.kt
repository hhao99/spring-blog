package com.vg.blog.models
import org.springframework.data.relational.core.mapping.Table
import org.springframework.data.annotation.Id

@Table("USERS")
data class User(
    @Id
    val id: Long? = null,
    val login: String,
    val email: String
)