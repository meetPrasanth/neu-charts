
import { BarOptions } from "./bar-options";

/**
 * Line Options for charts
 * @author Prasanth Venkatesan
 */
export class LineOptions extends BarOptions {
    
    autoScale: boolean;
    roundDomains: boolean;
    timeline: boolean;
    isXAxisDate: boolean;
    showRefLines: boolean;
    referenceLines: any;
    // curve: string;

    constructor(showLegend = true, showXAxis = true, showYAxis = true, showXAxisLabel = true, showYAxisLabel = true, xAxisLabel = '', yAxisLabel = '', timeline = false, isXAxisDate= false, referenceLines= []) {
        super(showLegend, showXAxis, showYAxis, showXAxisLabel, showYAxisLabel, xAxisLabel, yAxisLabel);
        this.autoScale = true;
        this.roundDomains = true;
        this.timeline = timeline;
        this.isXAxisDate = isXAxisDate;
        if(referenceLines.length == 0) {
            this.showRefLines = true;
        }
        this.referenceLines = referenceLines;
    }
}
