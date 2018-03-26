
import { BarOptions } from "./bar-options";

/**
 * Bar grouped Options for charts
 * @author Prasanth Venkatesan
 */
export class BarGroupedOptions extends BarOptions {
    
    groupPadding: number;

    constructor(showLegend = true, showXAxis = true, showYAxis = true, showXAxisLabel = true, showYAxisLabel = true, xAxisLabel = '', yAxisLabel = '') {
        super(showLegend, showXAxis, showYAxis, showXAxisLabel, showYAxisLabel, xAxisLabel, yAxisLabel);
        this.groupPadding = 10;
    }
}
