// app.module.ts
import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // component logic
}

@NgModule({
  declarations: [
    // remove 'AppComponent' from declarations
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
