
import { PieOptions } from "./pie-options";

/**
 * Advanced Donut options model
 * @author Prasanth Venkatesan
 */
export class AdvancedDonutOptions extends PieOptions{

    constructor(showLegend = true, showLabels = true) {
        super(showLegend, showLabels, false);
    }

}
