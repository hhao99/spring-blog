package com.vgc.blog.repositories

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

import com.vgc.blog.models.Article

@Repository
interface ArticleRepository: JpaRepository<Article,Long> {}