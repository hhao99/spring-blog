package com.vgc.blog.models;

import jakarta.persistence.*

@Entity
data class Article(
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    val id: Long? = null,
    var title: String = "",
    var content: String = ""
)