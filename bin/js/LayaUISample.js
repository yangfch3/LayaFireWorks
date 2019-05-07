var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var test = ui.test.TestPageUI;
var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var WebGL = Laya.WebGL;
var ClickPlaygroundView = /** @class */ (function (_super) {
    __extends(ClickPlaygroundView, _super);
    function ClickPlaygroundView() {
        var _this = _super.call(this) || this;
        _this.on(Laya.Event.CLICK, _this, _this.onClick);
        return _this;
    }
    ClickPlaygroundView.prototype.onClick = function (e) {
        var fireworksBoomView = new ui.test.FireworkBoomUI();
        fireworksBoomView.anchorX = 0.5;
        fireworksBoomView.anchorY = 0.5;
        fireworksBoomView.x = e.stageX;
        fireworksBoomView.y = e.stageY;
        this.addChild(fireworksBoomView);
        var setting = Laya.loader.getRes('test/FireWorks.part');
        var particle = new Laya.Particle2D(setting);
        particle.autoPlay = false;
        particle.emitter.emissionRate = 300;
        particle.x = e.stageX;
        particle.y = e.stageY;
        this.addChild(particle);
        particle.emitter.start();
        fireworksBoomView.ani1.play(0, false);
        Laya.timer.once(240, this, function () {
            particle.emitter.stop();
        });
    };
    return ClickPlaygroundView;
}(ui.test.ClickPlaygroundUI));
Laya.init(640, 1136, WebGL);
Laya.stage.alignH = 'center';
Laya.stage.alignV = 'middle';
Laya.stage.scaleMode = 'showall';
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
function beginLoad() {
    Laya.loader.load([
        'res/atlas/comp.atlas',
        'test/FireWorks.part'
    ], Handler.create(null, onLoaded));
}
function onLoaded() {
    var clickPlaygroundView = new ClickPlaygroundView();
    Laya.stage.addChild(clickPlaygroundView);
}
//# sourceMappingURL=LayaUISample.js.map