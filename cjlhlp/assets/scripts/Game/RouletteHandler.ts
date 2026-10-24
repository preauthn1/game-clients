import { _decorator, Button, Color, Component, Material, math, MeshRenderer, Node, Tween, tween, Vec2, Vec3 } from 'cc';
import { AudioManger, RotatteType, SoundType } from './AudioManger';
import { Game_BetType } from '../Data/GameData';
const { ccclass, property } = _decorator;

@ccclass('RouletteHandler')
export class RouletteHandler extends Component {

    @property(Node)
    public nodeBase: Node;
    @property({ group: { name: 'ShowTable', id: '0', displayOrder: 0 }, type: Node })
    public nodeTableCamera: Node;
    @property({ group: { name: 'ShowTable', id: '0', displayOrder: 1 }, type: Vec3 })
    public cameraStartPos: Vec3;
    @property({ group: { name: 'ShowTable', id: '0', displayOrder: 1 }, type: Vec3 })
    public cameraMiddlePos: Vec3;
    @property({ group: { name: 'ShowTable', id: '0', displayOrder: 1 }, type: Vec3 })
    public cameraEndPos: Vec3;
    @property({ group: { name: 'ShowTable', id: '0', displayOrder: 2 }, type: Vec3 })
    public cameraStartEulerAngle: Vec3;
    @property({ group: { name: 'ShowTable', id: '0', displayOrder: 2 }, type: Vec3 })
    public cameraMiddleEulerAngle: Vec3;
    @property({ group: { name: 'ShowTable', id: '0', displayOrder: 2 }, type: Vec3 })
    public cameraEndEulerAngle: Vec3;

    @property({ group: { name: 'ShowUICamera', id: '0', displayOrder: 2 }, type: Node })
    public nodeUICanvas: Node;
    @property({ group: { name: 'ShowUICamera', id: '0', displayOrder: 2 }, type: Vec3 })
    public canvasUICenterPos: Vec3;
    @property({ group: { name: 'ShowUICamera', id: '0', displayOrder: 2 }, type: Vec3 })
    public canvasUISidePos: Vec3;


    @property({ group: { name: '3DRouletteTable', id: '0', displayOrder: 3 }, type: Node })
    public nodeRouletteNumber: Node;
    @property({ group: { name: '3DRouletteTable', id: '0', displayOrder: 3 }, type: Node })
    public nodeRouletteCenter: Node;
    @property({ group: { name: '3DRouletteTable', id: '0', displayOrder: 3 }, type: Node })
    public nodeBallRotate: Node;
    @property({ group: { name: '3DRouletteTable', id: '0', displayOrder: 3 }, type: Node })
    public nodeBall: Node;

    @property({ group: { name: '3DRouletteTable', id: '0', displayOrder: 3 }, type: Vec3 })
    public ballStartPos: Vec3 = new Vec3();
    @property({ group: { name: '3DRouletteTable', id: '0', displayOrder: 3 }, type: Vec3 })
    public ballMiddlePos: Vec3 = new Vec3();
    @property({ group: { name: '3DRouletteTable', id: '0', displayOrder: 3 }, type: Vec3 })
    public ballMiddleEndPos: Vec3 = new Vec3();
    @property({ group: { name: '3DRouletteTable', id: '0', displayOrder: 3 }, type: Vec3 })
    public ballEndPos: Vec3 = new Vec3();

    @property({ group: { name: 'BetSelectNumber', id: '1', displayOrder: 1 }, type: Node })
    public nodeParentBetSelect: Node;
    @property({ group: { name: 'BetSelectNumber', id: '1', displayOrder: 1 }, type: Node })
    public arrNodeBetNumber: Node[] = [];
    @property({ group: { name: 'BetSelectNumber', id: '1', displayOrder: 1 }, type: Material })
    public lightMaterial: Material;
    @property({ group: { name: 'BetSelectNumber', id: '1', displayOrder: 1 }, type: Vec2 })
    public alphaRange: Vec2;
    private alphaValue: number = 0;
    private isStartLighting: boolean = false;
    private isLighting: boolean = false;
    private deltaLightTime: number = 0;
    private selectBetNumbers: number[] = [];

    @property({ group: { name: '3DRoulette', id: '2', displayOrder: 1 }, type: MeshRenderer })
    public rouletteMesh: MeshRenderer;
    @property({ group: { name: '3DRoulette', id: '2', displayOrder: 1 }, type: Material })
    public arrMaterialRoulette: Material[] = [];
    @property(Node)
    public nodeResultTexture: Node;

    private eachAngle: number = 0;

    private arrRouletteNumber: number[] = [
        0, 32, 15, 19, 4,
        21, 2, 25, 17, 34,
        6, 27, 13, 36, 11,
        30, 8, 23, 10, 5,
        24, 16, 33, 1, 20,
        14, 31, 9, 22, 18,
        29, 7, 28, 12, 35,
        3, 26
    ];


    @property(Button)
    public btnTest: Button;

    private finishCallback: () => void = null;

    start() {
        this.init();
    }

    protected update(dt: number): void {
        if (this.isStartLighting) {
            this.deltaLightTime += dt;
            if (this.isLighting) {
                this.alphaValue = math.lerp(this.alphaRange.y, this.alphaRange.x, this.deltaLightTime * 2)
                if (this.alphaValue > this.alphaRange.x) {
                    this.alphaValue = this.alphaRange.x
                    this.isLighting = false;
                    this.deltaLightTime = 0;
                }
            } else {
                this.alphaValue = math.lerp(this.alphaRange.x, this.alphaRange.y, this.deltaLightTime * 2)
                if (this.alphaValue < this.alphaRange.y) {
                    this.alphaValue = this.alphaRange.y
                    this.isLighting = true;
                    this.deltaLightTime = 0;
                }
            }
            this.lightMaterial.setProperty('mainColor', new Color(255, 255, 0, this.alphaValue));
        }
    }

    init() {
        // let self = this;
        this.eachAngle = 360 / this.arrRouletteNumber.length;
        this.startRoulette();
    }

    private startRoulette() {
        let durationTime: number = 12;
        tween().target(this.nodeRouletteNumber)
            .by(durationTime, { eulerAngles: new Vec3(0, -360, 0) })
            .repeatForever()
            .start();

        tween().target(this.nodeRouletteCenter)
            .by(durationTime, { eulerAngles: new Vec3(0, 360, 0) })
            .repeatForever()
            .start();
    }

    public addBetSelectNumber(type: Game_BetType, numbers: number[]) {
        switch (type) {
            case Game_BetType.Roulette_BetTypeOneNumber:
            case Game_BetType.Roulette_BetTypeTwoNumber:
            case Game_BetType.Roulette_BetTypeThreeNumber:
            case Game_BetType.Roulette_BetTypeFourNumber:
            case Game_BetType.Roulette_BetTypeSixNumber:
                break;
            case Game_BetType.Roulette_BetTypeRed:
                numbers = [
                    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36
                ];
                break;
            case Game_BetType.Roulette_BetTypeBlack:
                numbers = [
                    2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35
                ];
                break;
            case Game_BetType.Roulette_BetTypeBig:
                numbers = [
                    19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36
                ]
                break;
            case Game_BetType.Roulette_BetTypeSmall:
                numbers = [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18
                ]
                break;
            case Game_BetType.Roulette_BetTypeEven:
                numbers = [
                    2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36
                ]
                break;
            case Game_BetType.Roulette_BetTypeOdd:
                numbers = [
                    1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35
                ]
                break;
            case Game_BetType.Roulette_BetTypeSuperZero:
                numbers = [
                    0
                ]
                break;
            case Game_BetType.Roulette_BetTypeFirst12:
                numbers = [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
                ]
                break;
            case Game_BetType.Roulette_BetTypeSecond12:
                numbers = [
                    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
                ]
                break;
            case Game_BetType.Roulette_BetTypeThird12:
                numbers = [
                    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36
                ]
                break;
            case Game_BetType.Roulette_BetTypeFirstRow:
                numbers = [
                    1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34
                ]
                break;
            case Game_BetType.Roulette_BetTypeSecondRow:
                numbers = [
                    2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35
                ]
                break;
            case Game_BetType.Roulette_BetTypeThirdRow:
                numbers = [
                    3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36
                ]
                break;
        }
        this.addToShowRouletteList(numbers);
    }

    private addToShowRouletteList(numbers: number[]) {
        numbers.forEach(number => {
            if (!this.selectBetNumbers.find(betNumber => betNumber === number)) {
                this.selectBetNumbers.push(number)
            }
        })
    }

    private showSelectBetLight() {
        this.selectBetNumbers.forEach(number => {
            this.arrNodeBetNumber[number].active = true;
        });
        // this.switchMeshRender(this.selectBetNumbers.length > 0)
        this.nodeParentBetSelect.active = true;
        this.isStartLighting = true;
    }

    private clearSelectBetLight() {
        this.nodeParentBetSelect.active = false;
        this.arrNodeBetNumber.forEach(node => {
            node.active = false;
        });
        this.isStartLighting = false;
        this.isLighting = false;
        this.deltaLightTime = 0;
        this.alphaValue = this.alphaRange.x;
    }

    private switchMeshRender(isBlack: boolean) {
        this.rouletteMesh.setMaterial(this.arrMaterialRoulette[isBlack ? 1 : 0], 0);
    }

    public startShowRoulette(showNumber: number, callback: () => void) {
        this.finishCallback = callback;
        this.nodeBall.active = false;
        this.clearSelectBetLight();
        this.nodeTableCamera.setPosition(this.cameraStartPos);
        this.nodeTableCamera.setRotationFromEuler(this.cameraStartEulerAngle);
        this.nodeUICanvas.setPosition(this.canvasUISidePos)
        this.nodeUICanvas.setScale(new Vec3(0.23, 0.23, 1));
        this.nodeBase.active = true;
        this.nodeUICanvas.active = true;
        AudioManger.getInstance().playSound(SoundType.STARTROTATE);
        tween().target(this.nodeUICanvas)
            .to(0.5, {
                position: new Vec3(0, 0, 0),
                scale: new Vec3(1, 1, 1)
            })
            .start();
        tween().target(this.nodeTableCamera)
            .to(0.5, {
                position: this.cameraMiddlePos,
                eulerAngles: this.cameraMiddleEulerAngle
            })
            .call(() => {
                this.showSelectBetLight();
            })
            .to(0.5, {
                position: this.cameraEndPos,
                eulerAngles: this.cameraEndEulerAngle
            })
            .call(() => {
                AudioManger.getInstance().playRotatteSound(RotatteType.ROTATE);
                this.startRollBall(showNumber);
            })
            .start();
    }

    private backMoveCamera(resultNumber: number) {
        tween().target(this.nodeTableCamera)
            .delay(0.5)
            .to(1, {
                position: this.cameraStartPos,
                eulerAngles: this.cameraStartEulerAngle
            })
            .start();
        tween().target(this.nodeUICanvas)
            .delay(0.5)
            .call(() => {
                this.nodeResultTexture.active = true;
                this.clearSelectBetLight();
                AudioManger.getInstance().playResultNumber(resultNumber);
                if (this.finishCallback) {
                    this.finishCallback();
                    this.finishCallback = null;
                }
            })
            .to(1.5, {
                position: this.canvasUISidePos,
                scale: new Vec3(0.23, 0.23, 1)
            })
            .call(() => {
                // this.nodeUICanvas.active = false;
                this.nodeBase.active = false;
            })
            .delay(1)
            .call(() => {
                this.nodeResultTexture.active = false;
                this.selectBetNumbers.length = 0;
            })
            .start();
    }

    private startRollBall(showNumber: number) {
        const numberIndex = this.arrRouletteNumber.findIndex(number => number === showNumber);
        const stopAngleValue = this.eachAngle * numberIndex + (this.eachAngle * 0.4);
        let durationTime: number = 0.4;
        this.nodeBallRotate.eulerAngles = new Vec3(0, 0, 0);
        this.nodeBall.setPosition(this.ballStartPos);
        this.nodeBall.active = true;
        tween().target(this.nodeBallRotate)
            .by(durationTime * (stopAngleValue > 180 ? 1 : 0), {
                eulerAngles: new Vec3(0, 360, 0)
            })
            .call(() => {
                this.moveBallParentEndPos(showNumber, durationTime, stopAngleValue);
            })
            .start();
    }

    moveBallParentEndPos(resultNumber: number, durationTime: number, stopAngle: number, isFinish: boolean = false) {
        const randomAngles = math.randomRange(-this.eachAngle / 2, this.eachAngle / 2) * 0.5;
        let endAngles = 360 - (isFinish ? 0 : (stopAngle + randomAngles))
        if (endAngles < 180) {
            endAngles += 360;
        }
        const playTime = (durationTime * 2 / 360) * (((360 - stopAngle) / 360)) + durationTime;
        tween().target(this.nodeBallRotate)
            .by(playTime * math.randomRange(2, 2.5), {
                eulerAngles: new Vec3(0, endAngles, 0)
            })
            .call(() => {
                if (!isFinish) {
                    this.moveBallParentEndPos(resultNumber, durationTime * math.randomRange(2, 3), 360, true);
                    this.moveBallToEndPos(durationTime, 0);
                } else {
                    // this.switchMeshRender(false)
                    this.backMoveCamera(resultNumber);
                }
            })
            .start();
    }

    private moveBallToEndPos(durationTime: number, delayTime: number) {
        tween().target(this.nodeBall)
            .to(durationTime * math.randomRange(1.5, 2), {
                position: this.ballMiddlePos
            }, {
                easing: 'circIn',
            })
            .to(durationTime * math.randomRange(1.5, 2), {
                position: this.ballMiddleEndPos
            }, {
                easing: 'bounceOut'
            })
            .call(() => {
                AudioManger.getInstance().playRotatteSound(RotatteType.HIT_FINISH);
            })
            .to((durationTime * math.randomRange(2, 2.5)), {
                position: this.ballEndPos
            }, {
                easing: 'circOutIn'
            })
            .start();
    }
}


