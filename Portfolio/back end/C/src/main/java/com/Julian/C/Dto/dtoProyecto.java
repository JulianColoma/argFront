/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Julian.C.Dto;

import javax.validation.constraints.NotBlank;

/**
 *
 * @author SIMM
 */
public class dtoProyecto {
    @NotBlank
    private String nombre;
    @NotBlank
    private String descripcion;
    @NotBlank
    private String img;
    
    // constructor

    public dtoProyecto(String nombre, String descripcion, String img) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
    }

    public dtoProyecto() {
    }
    // getters && setters

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
    
}
