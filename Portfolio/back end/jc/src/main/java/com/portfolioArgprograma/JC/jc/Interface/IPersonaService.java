
package com.portfolioArgprograma.JC.jc.Interface;

import com.portfolioArgprograma.JC.jc.Entity.Persona;
import java.util.List;



public interface IPersonaService {
    //traer una lista de personas
    public List<Persona> getPersona();
    
    //guardar un objeto de tipo persona
    public void savePersona(Persona persona);
            
    //eliminar un objeto por su id
    public void deletePersona(Long id);
    //buscar una persona por id
    public Persona findPersona(Long id);
}
