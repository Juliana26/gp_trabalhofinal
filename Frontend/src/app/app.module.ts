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
import { LoginComponent } from './usuario/login/login.component';
import { RedefineSenhaComponent } from './redefine-senha/redefine-senha.component';
import { MetaleituraComponent } from './usuario/metaleitura/metaleitura.component';
import { PlanoleituraComponent } from './usuario/planoleitura/planoleitura.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LivrosComponent } from './livros/livros.component';
import { EditoraComponent } from './editora/editora.component';
import { HomeusuarioComponent } from './homeusuario/homeusuario.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioCadastroComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RedefineSenhaComponent,
    MetaleituraComponent,
    PlanoleituraComponent,
    LivrosComponent,
    EditoraComponent,
    HomeusuarioComponent,
    AboutComponent,
    FaqComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
