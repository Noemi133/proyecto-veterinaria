# 🐾 Sistema de Gestión Veterinaria

## Descripción del Proyecto

El **Sistema de Gestión Veterinaria** es una aplicación web desarrollada en **Angular** utilizando **TypeScript**, diseñada para digitalizar el proceso de atención de una clínica veterinaria.

El sistema permite registrar mascotas y sus propietarios, administrar citas médicas y gestionar el historial clínico de cada mascota, mejorando la organización de la clínica, reduciendo tiempos de atención y facilitando el acceso a la información.

---

# Objetivos

## Objetivo General

Desarrollar una aplicación web que permita optimizar el proceso de atención de una clínica veterinaria mediante la digitalización del registro de mascotas, la programación de citas y la gestión del historial médico.

## Objetivos Específicos

* Registrar mascotas y propietarios.
* Administrar citas veterinarias.
* Consultar y administrar el historial médico.
* Implementar una arquitectura modular utilizando Angular.
* Aplicar buenas prácticas de desarrollo con TypeScript.
* Utilizar Reactive Forms para validar formularios.
* Implementar Pipes y Directivas personalizadas.

---

# Funcionalidades

El sistema cuenta con los siguientes módulos:

## Inicio de sesión

* Autenticación del administrador.
* Protección de rutas mediante Guard.

## Dashboard

* Resumen general del sistema.
* Acceso rápido a todos los módulos.
* Indicadores principales.

## Gestión de Mascotas

* Registrar mascota.
* Listar mascotas.
* Editar mascota.
* Eliminar mascota.

## Gestión de Citas

* Registrar cita.
* Listar citas.
* Editar cita.
* Eliminar cita.

## Calendario

* Visualizar todas las citas.
* Cambiar el estado de las citas.

## Historial Médico

* Registrar historial.
* Consultar historial.
* Editar historial.
* Eliminar historial.

---

# Tecnologías Utilizadas

* Angular
* TypeScript
* HTML5
* CSS3
* Bootstrap 5
* SweetAlert2

---

# Arquitectura del Proyecto

El proyecto fue desarrollado utilizando una arquitectura modular propia de Angular.

```text
src/
│
├── app/
│
├── core/
│   ├── guards/
│   └── services/
│
├── features/
│   ├── auth/
│   ├── dashboard/
│   ├── mascotas/
│   ├── citas/
│   └── historial/
│
├── models/
│
└── shared/
    ├── directives/
    └── pipes/
```

Esta estructura facilita el mantenimiento, escalabilidad y reutilización del código.

---

# Buenas Prácticas Implementadas

* Arquitectura modular.
* Componentes reutilizables.
* Servicios para la lógica del negocio.
* Interfaces TypeScript.
* Programación Orientada a Objetos.
* Reactive Forms.
* Validaciones de formularios.
* Pipe personalizado.
* Directiva personalizada.
* Navegación mediante Angular Router.
* Diseño Responsive utilizando Bootstrap.

---

# Validaciones Implementadas

El sistema valida información como:

* Campos obligatorios.
* Formato del teléfono.
* Edad mínima.
* Estado de formularios.
* Validaciones mediante Reactive Forms.

---

# Pipe Personalizado

Se implementó un Pipe personalizado para mostrar el estado de las citas de forma más amigable.

Ejemplo:

* 🟡 Pendiente
* 🟢 Atendida
* 🔴 Cancelada

---

# Directiva Personalizada

Se implementó una Directiva personalizada para resaltar visualmente el estado de las citas mediante diferentes colores.

---

# Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/USUARIO/proyecto-veterinaria.git
```

## 2. Ingresar al proyecto

```bash
cd proyecto-veterinaria/frontend
```

## 3. Instalar dependencias

```bash
npm install
```

## 4. Ejecutar el proyecto

```bash
ng serve
```

## 5. Abrir en el navegador

```text
http://localhost:4200
```

---

# Credenciales

Usuario

```text
admin
```

Contraseña

```text
123456
```

---

# Estructura General del Sistema

| Módulo     | Funcionalidad             |
| ---------- | ------------------------- |
| Login      | Inicio de sesión          |
| Dashboard  | Resumen del sistema       |
| Mascotas   | CRUD de mascotas          |
| Citas      | CRUD de citas             |
| Calendario | Visualización de citas    |
| Historial  | CRUD del historial médico |

---

# Capturas del Sistema

Se recomienda agregar capturas de las siguientes pantallas:

* Login
* Dashboard
* Registrar Mascota
* Listar Mascotas
* Registrar Cita
* Listar Citas
* Calendario
* Registrar Historial
* Listar Historial

---

# Requisitos

* Node.js 18 o superior
* Angular CLI
* Visual Studio Code
* Navegador web moderno

---

# Integrantes

* Integrante 1
* Integrante 2
* Integrante 3

---

# Repositorio

Agregar aquí el enlace del repositorio de GitHub.

Ejemplo:

```text
https://github.com/usuario/proyecto-veterinaria
```

---

# Conclusión

La aplicación desarrollada permite digitalizar el proceso de atención de una clínica veterinaria mediante una solución web desarrollada en Angular y TypeScript. Gracias a su arquitectura modular, el uso de componentes reutilizables, servicios, formularios reactivos, validaciones, Pipes y Directivas personalizadas, el sistema ofrece una solución organizada, mantenible y fácil de utilizar para la administración de mascotas, citas e historiales médicos.

---

# Licencia

Proyecto desarrollado con fines académicos para el curso de Desarrollo Frontend con Angular.
