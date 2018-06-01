import { BarOptions } from "./bar-options";


export class BubbleOptions extends BarOptions {

    autoScale: boolean;
    xScaleMin: any;
    xScaleMax: any;
    yScaleMin: any;
    yScaleMax: any;
    roundDomains: boolean;
    minRadius: number;
    maxRadius: number;
    view: any;
    constructor(showLegend = true, showXAxis = true, showYAxis = true, showXAxisLabel = true, 
        showYAxisLabel = true, xAxisLabel = 'x', yAxisLabel = 'y', autoScale = true, xScaleMin = 0,
        xScaleMax = 20, yScaleMin = 0, yScaleMax = 0, roundDomains = true, minRadius = 4, maxRadius = 15, view = undefined) {
        super(showLegend, showXAxis, showYAxis, showXAxisLabel, showYAxisLabel, xAxisLabel, yAxisLabel);

        this.view = view;
        this.autoScale = autoScale;
        this.xScaleMin = xScaleMin;
        this.xScaleMax = xScaleMax;
        this.yScaleMin = yScaleMin;
        this.yScaleMax = yScaleMax;
        this.roundDomains = roundDomains;
        this.minRadius = minRadius;
        this.maxRadius = maxRadius;
    }

}