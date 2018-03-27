
import { BarOptions } from "./bar-options";

/**
 * Line Options for charts
 * @author Prasanth Venkatesan
 */
export class LineOptions extends BarOptions {
    
    autoScale: boolean;
    roundDomains: boolean;
    timeline: boolean;
    // curve: string;

    constructor(showLegend = true, showXAxis = true, showYAxis = true, showXAxisLabel = true, showYAxisLabel = true, xAxisLabel = '', yAxisLabel = '', timeline = false) {
        super(showLegend, showXAxis, showYAxis, showXAxisLabel, showYAxisLabel, xAxisLabel, yAxisLabel);
        this.autoScale = true;
        this.roundDomains = true;
        this.timeline = timeline;
    }
}