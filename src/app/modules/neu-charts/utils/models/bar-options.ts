import { Options } from "./options";

/**
 * Bar Options for charts
 * @author Prasanth Venkatesan
 */
export class BarOptions extends Options {
    
    showXAxis: boolean;
    showYAxis: boolean;
    showXAxisLabel: boolean;
    showYAxisLabel: boolean;
    xAxisLabel: string;
    yAxisLabel: string;
    barPadding: number;

    constructor(showLegend = true, showXAxis = true, showYAxis = true, showXAxisLabel = true, showYAxisLabel = true, xAxisLabel = '', yAxisLabel = '') {
        super(showLegend);
        this.showXAxis = showXAxis;
        this.showYAxis = showYAxis;
        this.showXAxisLabel = showXAxisLabel;
        this.showYAxisLabel = showYAxisLabel;
        this.xAxisLabel = xAxisLabel.toUpperCase();
        this.yAxisLabel = yAxisLabel.toUpperCase();
        this.barPadding = 3;
    }
}
