import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart.component';
var BarChartModule = (function () {
    function BarChartModule() {
    }
    BarChartModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        BarChartComponent
                    ],
                    exports: [
                        BarChartComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    BarChartModule.ctorParameters = function () { return []; };
    return BarChartModule;
}());
export { BarChartModule };
//# sourceMappingURL=bar-chart.module.js.map