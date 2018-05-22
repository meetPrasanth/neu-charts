import { BarOptions } from "./bar-options";

/**
 * Bar line combo chart component
 * @author Prasanth Venkatesan
 */
export class BarLineComboOptions extends BarOptions {

    showRightYAxisLabel: boolean;
    yAxisLabelRight: string;

    constructor(showLegend = true, showXAxis = true, showYAxis = true, showXAxisLabel = true, 
        showYAxisLabel = true, xAxisLabel = '', yAxisLabel = '') {
        super(showLegend, showXAxis, showYAxis, showXAxisLabel, showYAxisLabel, xAxisLabel, yAxisLabel);
        this.showRightYAxisLabel = false;
       // this.yAxisLabelRight = 'custom';
    }
}