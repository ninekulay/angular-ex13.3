import { Component , Input } from'@angular/core';
@Component({
    selector:'app-topbanner',
    templateUrl:'./topbanner.component.html',
})
export class TopBannerComponent {
    @Input()
    title: string;
    description: string;
    constructor() {}
}
