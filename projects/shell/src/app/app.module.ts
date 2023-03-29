import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule, APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from '@angular/common/http';
import authConfig from './auth_config.json';
import { LogService } from './shared/log.service';
import { LogTestComponent } from './log-test/log-test.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CustomerModule } from './customer/customer.module';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      // domain: 'dev-ha-6vf7s.us.auth0.com',
      // clientId: 'pQXuZGn3bfOfHpFd9ch7Wfa4xP4KhKlS',
      // authorizationParams: {
      //   redirect_uri: window.location.origin,
      // },
      domain: authConfig.domain,
      clientId: authConfig.clientId,
      authorizationParams: {
        redirect_uri: `${window.location.origin}/home`,
      }
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CustomerModule,
    // EffectsModule.forRoot([]),
    // StoreModule.forRoot({}, {}),
    // EffectsModule.forRoot([]),
    // StoreRouterConnectingModule.forRoot(),
    // RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LogTestComponent,
    NotFoundComponent
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
