import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SubmainComponent } from './components/submain/submain.component';
import { ProductComponent} from './components/product/product.component';


import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { UserlistComponent } from './components/userlist/userlist.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SubmainComponent,
    UserlistComponent,
    LoginComponent,
    ContactComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: MainComponent },
      { path: 'product/:id', component: ProductComponent},
      { path: 'login', component: LoginComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo : 'login'}
    ])
  ],
  providers: [UserService,ProductService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

