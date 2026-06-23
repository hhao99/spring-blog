package com.vgc.blog.models;

import jakarta.persistence.*
import java.time.LocalDateTime


@MappedSuperclass
abstract class BaseEntity(
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    var id: Long? = null,

    @Version
    var version: Long? = null,


    @Column(name="created_at", nullable=false, updatable=false)
    var createdAt: LocalDateTime? = null,
    @Column(name="updated_at")
    var updatedAt: LocalDateTime? = null,
    
) {

    @PrePersist
    protected fun onCreate() {
        createdAt = LocalDateTime.now()
    }

    @PreUpdate
    protected fun onUpdate() {
        updatedAt = LocalDateTime.now()
    }
}



@Entity
@Table(name="authors")
open class Author (
    @Column(nullable=false)
    var username: String = "",
    @Lob
    @Column(nullable=false)
    var email: String = "",

    @OneToMany(mappedBy="author",cascade=[CascadeType.ALL], orphanRemoval=true)
    var articles: MutableList<Article> = mutableListOf(),

    @OneToMany(mappedBy="author",cascade=[CascadeType.ALL], orphanRemoval=true)
    var comments: MutableList<Article> = mutableListOf(),

    id: Long? = null
) : BaseEntity(id = id)



@Entity
@Table(name="articles")
open class Article (
    @Column(nullable=false)
    var title: String = "",
    @Lob
    @Column(nullable=false, columnDefinition="TEXT")
    var content: String = "",

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="author_id",nullable=false)
    var author: Author? = null,
    @OneToMany(mappedBy="article", cascade=[CascadeType.ALL], orphanRemoval=true)
    var comments: MutableList<Comment> = mutableListOf(),

    id: Long? = null
) : BaseEntity(id = id)

@Entity
@Table(name="comments")
open class Comment (
    @Lob
    @Column(nullable=false, columnDefinition="TEXT")
    var content: String = "",

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="author_id",nullable=false)
    var author: Author? = null,
    
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="article_id",nullable=false)
    var article: Article? = null,

    id: Long? = null
) : BaseEntity(id = id)

