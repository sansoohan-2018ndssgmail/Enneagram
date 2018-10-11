import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';

import { FirebaseService } from "./services/firebase.service";
import { AnimationsService } from "./home/ideamatching/animations-service";
import { LandmarksService } from "./home/ideamatching/landmarks-service";
import { FriendChatService } from "./home/friendchat/friend-chat.service";
import { FriendListService } from "./home/friendchat/friend-list.service";
import { UserHomeService } from "./home/friendchat/user-home.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { FriendlistComponent } from "./home/friendlist/friendlist.component";
import { FriendmatchingComponent } from "./home/friendmatching/friendmatching.component";
import { MapExampleComponent } from "./home/friendmatching/map-example/map-example.component";
import { ChatRoomComponent } from "./home/friendchat/chat-room/chat-room.component";
import { IdeamatchingComponent } from "./home/ideamatching/ideamatching.component";
import { DetailsComponent } from "./home/ideamatching/details/details.component";
import { EnneagramComponent } from "./home/enneagram/enneagram.component";

import { FloatButtonComponent } from "./buttons/float-button/float-button.component";
import { ChildButton1Component } from "./buttons/child-button1/child-button1.component";
import { ChildButton2Component } from "./buttons/child-button2/child-button2.component";
import { ChildButton3Component } from "./buttons/child-button3/child-button3.component";
import { FriendchatComponent } from "./home/friendchat/friendchat.component";
import { ActionButtonComponent } from "./home/ideamatching/action-button/action-button.component";
import { ModalComponent } from "./modal/modal.component";

import * as platform from "platform";
declare var GMSServices: any;

if(platform.isIOS) {
    GMSServices.provideAPIKey("AIzaSyAtRVvG3Be3xXiZFR7xp-K-9hy4nZ4hMFs");
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptFormsModule,
        TNSCheckBoxModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        FriendlistComponent,
        FriendmatchingComponent,
        MapExampleComponent,
        FriendchatComponent,
        ChatRoomComponent,
        IdeamatchingComponent,
        DetailsComponent,
        EnneagramComponent,

        ActionButtonComponent,
        FloatButtonComponent,
        ChildButton1Component,
        ChildButton2Component,
        ChildButton3Component,
        ModalComponent,
    ],
    providers: [
        FirebaseService,
        AnimationsService,
        LandmarksService,
        FriendChatService,
        FriendListService,
        UserHomeService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
