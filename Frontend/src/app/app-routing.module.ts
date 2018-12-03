import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro.component';
import { LoginComponent } from './login/login.component';
import { RedefineSenhaComponent } from './redefine-senha/redefine-senha.component';
import { MetaleituraComponent } from './metaleitura/metaleitura.component';
import { PlanoleituraComponent } from './planoleitura/planoleitura.component';
import { EditoraComponent } from './editora/editora.component';
import { LivrosComponent } from './livros/livros.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { UsuarioAlteracaoComponent } from './usuario/usuario-alteracao.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastrar', component: UsuarioCadastroComponent},
  {path: 'editora', component: EditoraComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'livro', component: LivrosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'metaleitura', component: MetaleituraComponent},
  {path: 'perfil', component: UsuarioAlteracaoComponent},
  {path: 'planoleitura', component: PlanoleituraComponent},
  {path: 'redefineSenha', component: RedefineSenhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }