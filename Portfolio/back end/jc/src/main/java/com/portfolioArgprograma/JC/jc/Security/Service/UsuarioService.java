/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolioArgprograma.JC.jc.Security.Service;

import com.portfolioArgprograma.JC.jc.Security.Entity.Usuario;
import com.portfolioArgprograma.JC.jc.Security.Repository.iUsuarioRepository;
import jakarta.transaction.Transactional;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author SIMM
 */
@Service
@Transactional
public class UsuarioService {
   @Autowired
   iUsuarioRepository iusuarioRepository;

   
   public Optional<Usuario> getByNombreUsuario(String nombreUsuario){
       return iusuarioRepository.findByNombreUsuario(nombreUsuario);
   }
   public boolean existByNombreUsuario(String nomnbreUsuario){
       return iusuarioRepository.existsByNombreUsuario(nomnbreUsuario);   
   }
   public boolean existByEmail(String email){
       return iusuarioRepository.existsByEmail(email);   
   }
   public void save(Usuario usuario){
       iusuarioRepository.save(usuario);
   }
}
