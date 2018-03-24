import { Component, OnInit } from '@angular/core';

/**
 * No data or wrong data format component
 * @author Prasanth Venkatesan
 */
@Component({
    selector: 'no-data',
    template: `<div class="no-data-container">No data found (or) Wrong data format</div>`
})
export class NoDataComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
