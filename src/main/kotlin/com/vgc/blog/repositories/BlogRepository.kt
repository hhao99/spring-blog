package com.vgc.blog.repositories

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

import com.vgc.blog.models.Author
import com.vgc.blog.models.Article
import com.vgc.blog.models.Comment


@Repository
interface AuthorRepository: JpaRepository<Author,Long> {}

@Repository
interface ArticleRepository: JpaRepository<Article,Long> {}

@Repository
interface CommentRepository: JpaRepository<Comment,Long> {}

