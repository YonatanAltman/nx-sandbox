import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ExampleCenteringComponent } from './example-centering/example-centering.component';
import { HomeComponent } from './home/home.component';
import { ExampleDocumentComponent } from './example-document/example-document.component';
import { ExampleBlocksComponent } from './example-blocks/example-blocks.component';
import { ExampleFlexComponent } from './example-flex/example-flex.component';
import { ExampleResponsiveComponent } from './example-responsive/example-responsive.component';

@NgModule({
  declarations: [AppComponent, ExampleCenteringComponent, HomeComponent, ExampleDocumentComponent, ExampleBlocksComponent, ExampleFlexComponent, ExampleResponsiveComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'centering', component: ExampleCenteringComponent },
      { path: 'doc', component: ExampleDocumentComponent },
      { path: 'blocks', component: ExampleBlocksComponent },
      { path: 'flex', component: ExampleFlexComponent },
      { path: 'responsive', component: ExampleResponsiveComponent }

    ], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
