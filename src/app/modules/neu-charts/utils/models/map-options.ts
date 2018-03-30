
import { BarOptions } from "./bar-options";

/**
 * Map Options for charts
 * @author Prasanth Venkatesan
 */
export class MapOptions extends BarOptions {
    
    innerPadding: number;
    showSkew: boolean;

    constructor(showLegend = true, showXAxis = true, showYAxis = true, showXAxisLabel = true, showYAxisLabel = true, 
        xAxisLabel = '', yAxisLabel = '', timeline = false, isXAxisDate= false, innerPadding = 5, showSkew = false) {
        super(showLegend, showXAxis, showYAxis, showXAxisLabel, showYAxisLabel, xAxisLabel, yAxisLabel);
        this.innerPadding = innerPadding;
        this.showSkew = showSkew;
    }
}
