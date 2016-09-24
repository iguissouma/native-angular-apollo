// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import {client} from "./app";
import {ApolloModule} from "angular2-apollo";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
   imports: [
     NativeScriptModule,
     // Define the default ApolloClient
     ApolloModule.withClient(client),

   ],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
