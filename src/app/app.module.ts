import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { tvlibModule } from 'tvlib';
import { HeaderComponent } from './shared/header/header.component';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MyLibModule } from '../../projects/my-lib/src/lib/my-lib.module';
import { ResourcesComponent } from 'projects/resources/src/lib/resources.component';
import { ResourcesModule } from 'projects/resources/src/lib/resources.module';
import { ResourcesConfigureOptions } from 'projects/resources/src/lib/resources-configure-options';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthModule } from 'projects/auth/src/public-api';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResourcesComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    tvlibModule,
    MyLibModule,
    HttpClientModule,
    AuthModule,
    BrowserModule,
    ResourcesModule.forRoot(),
  
     
     TranslateModule.forRoot({
         loader: {
             provide: TranslateLoader,
             useFactory: HttpLoaderFactory,
             deps: [HttpClient]
         }
     })
  ],
  providers: [ {provide: ResourcesConfigureOptions, useClass: ResourcesConfigureOptions} ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}