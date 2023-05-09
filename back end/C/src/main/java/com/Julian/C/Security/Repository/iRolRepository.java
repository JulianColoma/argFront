
package com.Julian.C.Security.Repository;

import com.Julian.C.Security.Entity.Rol;
import com.Julian.C.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol>findByRolNombre(RolNombre rolNombre);
    
}
