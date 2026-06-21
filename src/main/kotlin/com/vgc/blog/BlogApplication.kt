package com.vgc.blog


import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean

import com.vgc.blog.models.Article
import com.vgc.blog.repositories.ArticleRepository

@SpringBootApplication
class BlogApplication {

	@Bean
	fun demo( repo: ArticleRepository) = CommandLineRunner {

		// article sample data
		repo.save( Article(title="first article", content="no content"))
		repo.save( Article(title="second article", content="no content"))
		repo.save( Article(title="learing spring article", content="no content"))

		// findall Articles
		val articles = repo.findAll()
		articles.forEach{ article -> println("Article: id=${article.id}, title=${article.title}") }

	}
}

fun main(args: Array<String>) {
	runApplication<BlogApplication>(*args)
}
