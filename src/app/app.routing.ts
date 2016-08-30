import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";


const APP_ROUTES: Routes = [
  { path: '', component: AppComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);


