import { Component, OnInit, ViewChild } from "@angular/core";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { ActionButtonComponent } from "./home/ideamatching/action-button/action-button.component";
const firebase = require("nativescript-plugin-firebase");
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    private _sideDrawerTransition: DrawerTransitionBase;
    @ViewChild("actionButton") _buttonRef: ActionButtonComponent;

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        firebase.init({
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.
        }).then(
            instance => {
                console.log("firebase.init done");
        },
            error => {
                console.log(`firebase.init error: ${error}`);
        }
        );
    }

    enneagramTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
        // this.sideDrawer.closeDrawer();
        this.routerExtensions.navigate(['/enneagram'], { animated: false });
        this._buttonRef.makeArrow();
    }
    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
}
