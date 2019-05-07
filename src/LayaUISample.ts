import test = ui.test.TestPageUI;
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import WebGL = Laya.WebGL;

class ClickPlaygroundView extends ui.test.ClickPlaygroundUI {

	constructor() {
		super();

		this.on(Laya.Event.CLICK, this, this.onClick);
	}

	private onClick(e: Laya.Event): void {
		let fireworksBoomView = new ui.test.FireworkBoomUI()
		fireworksBoomView.anchorX = 0.5
		fireworksBoomView.anchorY = 0.5
		fireworksBoomView.x = e.stageX
		fireworksBoomView.y = e.stageY
		this.addChild(fireworksBoomView)

		let setting = Laya.loader.getRes('test/FireWorks.part')
		let particle = new Laya.Particle2D(setting)
		particle.autoPlay = false
		particle.emitter.emissionRate = 300
		particle.x = e.stageX
		particle.y = e.stageY
		this.addChild(particle)

		particle.emitter.start()
		fireworksBoomView.ani1.play(0, false)
		Laya.timer.once(240, this, function (this: ClickPlaygroundView) {
			particle.emitter.stop()
		})
	}
}

Laya.init(640, 1136, WebGL);
Laya.stage.alignH = 'center'
Laya.stage.alignV = 'middle'
Laya.stage.scaleMode = 'showall'
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

function beginLoad() {
	Laya.loader.load([
		'res/atlas/comp.atlas',
		'test/FireWorks.part'
	], Handler.create(null, onLoaded));
}

function onLoaded(): void {
	let clickPlaygroundView: ClickPlaygroundView = new ClickPlaygroundView();
	Laya.stage.addChild(clickPlaygroundView);
}
