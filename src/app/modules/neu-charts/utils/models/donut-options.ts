
import { PieOptions } from "./pie-options";

/**
 * Donut options model
 * @author Prasanth Venkatesan
 */
export class DonutOptions extends PieOptions{

    arcWidth: number;

    constructor(showLegend = true, showLabels = true, arcWidth = 0.25) {
        super(showLegend, showLabels, false);
        this.doughnut = true;
        this.arcWidth = arcWidth;
    }

}
