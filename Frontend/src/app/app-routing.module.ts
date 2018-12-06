import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro.component';
import { LoginComponent } from './login/login.component';
import { RedefineSenhaComponent } from './redefine-senha/redefine-senha.component';
import { MetaleituraCadastroComponent } from './metaleitura/metaleitura-cadastro.component';
import { PlanoleituraCadastroComponent } from './planoleitura/planoleitura-cadastro.component';
import { EditoraComponent } from './editora/editora.component';
import { LivrosCadastroComponent } from './livros/livros-cadastro.component';
import { AboutComponent } from './about/about.component';
import { UsuarioAlteracaoComponent } from './usuario/usuario-alteracao.component';
import { LivrosAlteracaoComponent } from './livros/livros-alteracao.component';
import { LivrosListaComponent } from './livros/livros-lista.component';
import { MetaleituraAlteracaoComponent } from './metaleitura/metaleitura-alteracao.component';
import { ListaMetasLeituraComponent } from './metaleitura/listametasleitura.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastrar', component: UsuarioCadastroComponent},
  {path: 'editora', component: EditoraComponent},
  {path: 'cadastrarLivro', component: LivrosCadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'metaleituracadastro', component: MetaleituraCadastroComponent},
  {path: 'metaleituraalteracao', component: MetaleituraAlteracaoComponent},
  {path: 'perfil', component: UsuarioAlteracaoComponent},
  {path: 'planoleituracadastro', component: PlanoleituraCadastroComponent},
  {path: 'redefineSenha', component: RedefineSenhaComponent},
  {path: 'alterarLivro', component: LivrosAlteracaoComponent},
  {path: 'listaLivro', component: LivrosListaComponent},
  {path: 'listametaleitura', component: ListaMetasLeituraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }