package com.vg.blog.services
import org.springframework.stereotype.Service
import com.vg.blog.models.User
import com.vg.blog.repositories.UserRepository

@Service
class UserService(private val userRepository: UserRepository) {
    fun getUserById(id: Long): User? = 
        userRepository.findById(id).orElse(null)
        
    fun getUserByLogin(login: String): User? =  
        userRepository.findByLogin(login)
        
    fun getAllUsers(): List<User> = 
        userRepository.findAll().toList()
        
    fun createUser(user: User): User = 
        userRepository.save(user)   
        
    fun deleteUser(id: Long) = 
        userRepository.deleteById(id)
        
    fun updateUser(id: Long, updatedUser: User): User? {
        val existingUser = userRepository.findById(id)
        return if (existingUser.isPresent) {
            val userToUpdate = existingUser.get().copy(
                login = updatedUser.login,
                email = updatedUser.email
            )
            userRepository.save(userToUpdate)
        } else {
            null
        }
    }
}