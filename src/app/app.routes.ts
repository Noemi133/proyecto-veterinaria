import { Routes } from '@angular/router';

// AUTH
import { Login } from './features/auth/login/login';


// DASHBOARD
import { Home } from './features/dashboard/home/home';

// MASCOTAS
import { RegistrarMascota } from './features/mascotas/registrar-mascota/registrar-mascota';
import { ListarMascotas } from './features/mascotas/listar-mascotas/listar-mascotas';

// CITAS
import { AgendarCita } from './features/citas/agendar-cita/agendar-cita';
import { ListarCitas } from './features/citas/listar-citas/listar-citas';
import { EditarCita } from './features/citas/editar-cita/editar-cita';
import { Calendario } from './features/citas/calendario/calendario';

// HISTORIAL
import { RegistrarHistorial } from './features/historial/registrar-historial/registrar-historial';
import { ListarHistorial } from './features/historial/listar-historial/listar-historial';
import { EditarHistorial } from './features/historial/editar-historial/editar-historial';

export const routes: Routes = [

  // ==========================
  // LOGIN
  // ==========================

  {
    path: '',
    component: Login
  },

  // ==========================
  // DASHBOARD
  // ==========================

  {
    path: 'home',
    component: Home
  },

  // ==========================
  // MASCOTAS
  // ==========================

  {
    path: 'registrar-mascota',
    component: RegistrarMascota
  },

  {
    path: 'listar-mascotas',
    component: ListarMascotas
  },

  {
    path: 'editar-mascota/:id',
    component: RegistrarMascota
  },

  // ==========================
  // CITAS
  // ==========================

  {
    path: 'agendar-cita',
    component: AgendarCita
  },

  {
    path: 'listar-citas',
    component: ListarCitas
  },

  {
    path: 'editar-cita/:id',
    component: EditarCita
  },

  {
    path: 'calendario',
    component: Calendario
  },

  // ==========================
  // HISTORIAL MÉDICO
  // ==========================

  {
    path: 'registrar-historial',
    component: RegistrarHistorial
  },

  {
    path: 'listar-historial',
    component: ListarHistorial
  },

  {
    path: 'editar-historial/:id',
    component: EditarHistorial
  },

  // ==========================
  // RUTA POR DEFECTO
  // ==========================

  {
    path: '**',
    redirectTo: ''
  }

];