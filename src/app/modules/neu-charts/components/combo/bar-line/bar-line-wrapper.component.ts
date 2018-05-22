import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { customColorSets } from "../../../utils/custom-color-sets";
import { BarLineComboOptions } from "../../../utils/models/bar-line-combo-options";


@Component({
    selector : 'neu-charts-combo-bar-line',
    templateUrl: 'bar-line-wrapper.component.html'
})
export class BarLineWrapperComponent implements OnInit {

    @Input('dataBar') dataBar: any[] = [];
    @Input('dataLine') dataLine: any[] = [];
    @Input('options') customOptions: BarLineComboOptions;

    @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

    options: BarLineComboOptions = new BarLineComboOptions();

    colorScheme = customColorSets.find(s => s.name == 'palatte');

    constructor() { }

    ngOnInit() {
        console.log(this.dataBar, this.dataLine);
        Object.assign(this.options, this.customOptions);
    }

    mSelectedEvent(event: any) {
        this.onSelect.emit(event);
    }

    yLeftAxisScale(min, max) {
        return { min: `${min}`, max: `${max}` };
    }

    yRightAxisScale(min, max) {
        return { min: `${min}`, max: `${max}` };
    }

    yLeftTickFormat(data) {
        return `${data.toLocaleString()}`;
    }

    yRightTickFormat(data) {
        return `${data}%`;
    }
}