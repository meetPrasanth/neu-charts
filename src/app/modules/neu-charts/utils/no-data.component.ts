import { Component, OnInit } from '@angular/core';

/**
 * No data or wrong data format component
 * @author Prasanth Venkatesan
 */
@Component({
    selector: 'no-data',
    template: `<div class="no-data-container">No data found (or) Wrong data format</div>`,
    styles: [`
    .no-data-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: lightslategray;
        font-size: 1.2rem;
    }`]
})
export class NoDataComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
