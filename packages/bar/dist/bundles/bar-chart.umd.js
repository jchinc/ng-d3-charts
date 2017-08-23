(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['bar-chart'] = {}),global.ng.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

var BarChartComponent = (function () {
    function BarChartComponent() {
    }
    BarChartComponent.prototype.ngOnInit = function () { };
    BarChartComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bar-chart',
                    templateUrl: 'bar-chart.component.html'
                },] },
    ];
    /** @nocollapse */
    BarChartComponent.ctorParameters = function () { return []; };
    return BarChartComponent;
}());

var BarChartModule = (function () {
    function BarChartModule() {
    }
    BarChartModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
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

exports.BarChartModule = BarChartModule;
exports.BarChartComponent = BarChartComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
