import { Options } from "./options";

/**
 * Pie chart options
 * @author Prasanth Venkatesan
 */
export class PieOptions extends Options{
    
    showLabels: boolean;
    explodeSlices: boolean;
    doughnut: boolean;

    constructor(showLegend = true, showLabels = true, explodeSlices = false) {
        super(showLegend);
        this.showLabels = showLabels;
        this.explodeSlices = explodeSlices;
        this.doughnut = false;
    }

}
