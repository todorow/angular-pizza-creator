
import { PizzaAppComponent } from './containers/pizza-app/pizza-app.component';

import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaCreatorComponent } from './components/pizza-creator/pizza-creator.component';
import { PizzaSizeComponent } from './components/pizza-size/pizza-size.component';
import { PizzaToppingsComponent } from './components/pizza-toppings/pizza-toppings.component';
import { PizzaViewerComponent } from './components/pizza-viewer/pizza-viewer.component';
import { PizzaSummaryComponent } from './components/pizza-summary/pizza-summary.component';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    PizzaAppComponent,
    PizzaFormComponent,
    PizzaCreatorComponent,
    PizzaSizeComponent,
    PizzaToppingsComponent,
    PizzaViewerComponent,
    PizzaSummaryComponent
  ],
  exports: [
    PizzaAppComponent
  ]
})
export class PizzaAppModule {}
