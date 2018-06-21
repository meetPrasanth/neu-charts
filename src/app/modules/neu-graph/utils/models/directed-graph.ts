
export class DirectedGraph {
    view: Array<any>;
    showLegend: boolean;
    orientation: any; // LR, RL, TB, BT
    autoCenter: boolean;
    autoZoom: boolean;

    constructor(view = [], showLegend = false, orientation = 'TB', autoCenter = true, autoZoom = true) {
        this.view = view;
        this.showLegend = showLegend;
        this.orientation = orientation;
        this.autoCenter = autoCenter;
        this.autoZoom = autoZoom;
    }
}