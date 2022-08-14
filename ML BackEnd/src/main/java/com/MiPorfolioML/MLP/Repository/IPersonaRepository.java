
package com.MiPorfolioML.MLP.Repository;

import com.MiPorfolioML.MLP.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository <Persona,Long> {
    
}
