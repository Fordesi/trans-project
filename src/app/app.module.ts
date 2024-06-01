import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconButton } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { OverlayModule } from '@angular/cdk/overlay';
import { SearchOverlayComponent } from './components/search-overlay/search-overlay.component';
import { NgClass } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchOverlayComponent
  ],
  imports: [
    MatIcon,
    MatIconButton,
    BrowserModule,
    FormsModule,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatAutocompleteModule,
    ReactiveFormsModule,
    OverlayModule,
    MatDivider,
    MatListModule,
    NgClass
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
