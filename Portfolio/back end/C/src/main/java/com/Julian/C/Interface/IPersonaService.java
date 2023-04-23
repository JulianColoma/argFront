
package com.Julian.C.Interface;

import com.Julian.C.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //treaer una lista de personas
    public List<Persona> getPersona();
    
    //guardar una persona
    public void savePersona(Persona persona);
    
    //eliminar una persona buscandola por id
    public void deletePersona(Long id);
    
    //buscar una persona por id
    public Persona  findPersona(Long id);
}
