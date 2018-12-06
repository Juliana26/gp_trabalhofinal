import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro.component';
import { UsuarioService } from './Services/usuario.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RedefineSenhaComponent } from './redefine-senha/redefine-senha.component';
import { MetaleituraCadastroComponent } from './metaleitura/metaleitura-cadastro.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LivrosCadastroComponent } from './livros/livros-cadastro.component';
import { EditoraComponent } from './editora/editora.component';
import { AboutComponent } from './about/about.component';
import { UsuarioAlteracaoComponent } from './usuario/usuario-alteracao.component';
import { LivrosAlteracaoComponent } from './livros/livros-alteracao.component';
import { LivrosListaComponent } from './livros/livros-lista.component';
import { LivroComponent } from './livros/livro/livro.component';
import { LivroService } from './Services/livro.service';
import { MetaleituraAlteracaoComponent } from './metaleitura/metaleitura-alteracao.component';
import { ListalivrometaleituraComponent } from './metaleitura/listalivrometaleitura/listalivrometaleitura.component';
import { PlanoleituraalteracaoComponent } from './planoleitura/planoleitura-alteracao.component';
import { PlanoleituracadastroComponent } from './planoleitura/planoleitura-cadastro.component';
import { ListalivroplanoleituraComponent } from './planoleitura/listalivroplanoleitura/listalivroplanoleitura.component';
import { ListaplanoleituraComponent } from './planoleitura/listaplanoleitura/listaplanoleitura.component';
import { ListametaleituraComponent } from './metaleitura/listametaleitura/listametaleitura.component';
import { ListalivroComponent } from './livros/listalivro/listalivro.component';
import { ListaMetasLeituraComponent } from './metaleitura/listametasleitura.component';
import { ListaplanosleituraComponent } from './planoleitura/listaplanosleitura.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioCadastroComponent,
    UsuarioAlteracaoComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RedefineSenhaComponent,
    MetaleituraAlteracaoComponent,
    MetaleituraCadastroComponent,
    PlanoleituracadastroComponent,
    PlanoleituraalteracaoComponent,
    LivrosAlteracaoComponent,
    LivrosCadastroComponent,
    LivrosListaComponent,
    EditoraComponent,
    AboutComponent,
    LivroComponent,
    ListalivrometaleituraComponent,
    ListalivroplanoleituraComponent,
    ListaplanoleituraComponent,
    ListametaleituraComponent,
    ListalivroComponent,
    ListaMetasLeituraComponent,
    ListaplanosleituraComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuarioService, 
    LivroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
