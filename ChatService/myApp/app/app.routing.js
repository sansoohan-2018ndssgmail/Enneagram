"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var home_component_1 = require("./components/home/home.component");
var friendlist_component_1 = require("./components/home/friendlist/friendlist.component");
var friendmatching_component_1 = require("./components/home/friendmatching/friendmatching.component");
var ideamatching_component_1 = require("./components/home/ideamatching/ideamatching.component");
var friendchat_component_1 = require("./components/home/friendchat/friendchat.component");
var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "register", component: register_component_1.RegisterComponent },
    { path: "home", redirectTo: "/home/(friendlistoutlet:friendlist//friendmatchingoutlet:friendmatching)", pathMatch: "full" },
    {
        path: 'home', component: home_component_1.HomeComponent, children: [
            { path: 'friendlist', component: friendlist_component_1.FriendlistComponent, outlet: 'friendlistoutlet' },
            { path: 'friendmatching', component: friendmatching_component_1.FriendmatchingComponent, outlet: 'friendmatchingoutlet' },
            { path: 'ideamatching', component: ideamatching_component_1.IdeamatchingComponent, outlet: 'ideamatchingoutlet' },
            { path: 'friendchat', component: friendchat_component_1.FriendchatComponent, outlet: 'friendchatoutlet' },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsc0VBQW9FO0FBQ3BFLCtFQUE2RTtBQUM3RSxtRUFBaUU7QUFDakUsMEZBQXdGO0FBQ3hGLHNHQUFvRztBQUNwRyxnR0FBOEY7QUFDOUYsMEZBQXdGO0FBRXhGLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDckQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSwwRUFBMEUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQzNIO1FBQ0ksSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxRQUFRLEVBQUU7WUFDOUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUU7WUFDbEYsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGtEQUF1QixFQUFFLE1BQU0sRUFBRSxzQkFBc0IsRUFBRTtZQUM5RixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRTtZQUN4RixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRTtTQUNyRjtLQUNKO0NBQ0osQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZyaWVuZGxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvZnJpZW5kbGlzdC9mcmllbmRsaXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGcmllbmRtYXRjaGluZ0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9mcmllbmRtYXRjaGluZy9mcmllbmRtYXRjaGluZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSWRlYW1hdGNoaW5nQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2lkZWFtYXRjaGluZy9pZGVhbWF0Y2hpbmcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZyaWVuZGNoYXRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvZnJpZW5kY2hhdC9mcmllbmRjaGF0LmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2xvZ2luXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcclxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicmVnaXN0ZXJcIiwgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgcmVkaXJlY3RUbzogXCIvaG9tZS8oZnJpZW5kbGlzdG91dGxldDpmcmllbmRsaXN0Ly9mcmllbmRtYXRjaGluZ291dGxldDpmcmllbmRtYXRjaGluZylcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICdmcmllbmRsaXN0JywgY29tcG9uZW50OiBGcmllbmRsaXN0Q29tcG9uZW50LCBvdXRsZXQ6ICdmcmllbmRsaXN0b3V0bGV0JyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdmcmllbmRtYXRjaGluZycsIGNvbXBvbmVudDogRnJpZW5kbWF0Y2hpbmdDb21wb25lbnQsIG91dGxldDogJ2ZyaWVuZG1hdGNoaW5nb3V0bGV0JyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdpZGVhbWF0Y2hpbmcnLCBjb21wb25lbnQ6IElkZWFtYXRjaGluZ0NvbXBvbmVudCwgb3V0bGV0OiAnaWRlYW1hdGNoaW5nb3V0bGV0JyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdmcmllbmRjaGF0JywgY29tcG9uZW50OiBGcmllbmRjaGF0Q29tcG9uZW50LCBvdXRsZXQ6ICdmcmllbmRjaGF0b3V0bGV0JyB9LFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIl19