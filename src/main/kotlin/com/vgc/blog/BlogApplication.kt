package com.vgc.blog


import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean

import com.vgc.blog.models.*
import com.vgc.blog.repositories.*

@SpringBootApplication
class BlogApplication {

	@Bean
	fun demo( 
			articleRepo: ArticleRepository,
			authorRepo: AuthorRepository,
			commentRepo: CommentRepository
			) = CommandLineRunner {

		val author = authorRepo.save(
			Author(username="eric", email="hhao99@gmail.com")
		)
		// article sample data
		val article = Article(author=author,title="test article", content="test content")
		articleRepo.save(article)
		// findall Articles
		val articles = articleRepo.findAll()
		articles.forEach{ article -> println("Article: id=${article.id}, title=${article.title}") }
		
	}
}

fun main(args: Array<String>) {
	runApplication<BlogApplication>(*args)
}
