import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';


const routes: Routes = [
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent},
  {path:'Portfolio' , component:PortfolioComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
