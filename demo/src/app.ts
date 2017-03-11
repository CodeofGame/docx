//our root app component
import { Component, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { Numbering } from '../docx';

@Component({
    selector: 'my-app',
    template: `
    <div>
        <h1>Hello {{name}}</h1>
    </div>
  `,
})
export class App {
    private name: string;

    constructor() {
        this.name = 'Angular2'
        console.log(Numbering);
    }
}

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [App],
    bootstrap: [App]
})
export class AppModule { }