import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnMaterialsModule } from './modules/my-own-materials/my-own-materials.module';

import { AppComponent } from './app.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MyOwnMaterialsModule
  ],
  providers: [],
  entryComponents: [
    MyDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
