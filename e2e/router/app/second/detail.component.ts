import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router, Route } from "@angular/router";
import { Location } from "@angular/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "detail",
    template: `
    <StackLayout>
        <Label text="NestedDetail" class="nested-header"></Label>
            
        <Label [text]="'nested-param: ' + (id$ | async)"></Label>
    </StackLayout>
    `
})
export class DetailComponent {
    public id$: Observable<string>;

    constructor(private router: Router, private route: ActivatedRoute, private page: Page) {
        page.actionBarHidden = true;
        console.log("DetailComponent - constructor()");
        this.id$ = route.params.pipe(map(r => r["id"]));
    }

    ngOnInit() {
        console.log("DetailComponent - ngOnInit()");
    }

    ngOnDestroy() {
        console.log("DetailComponent - ngOnDestroy()");
    }
}
