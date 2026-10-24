import { _decorator, Component, Node, Sprite, resources, SpriteAtlas, SpriteFrame, Label, tween, Vec3, UIOpacity, Quat } from 'cc';
import { AudioManger } from './AudioManger';
import { BaseHander } from './BaseHander';
import * as ICallback from './Data/ICallback';
import GameDataManager from './GameDataManager';
import { LHD_GameResultPoker } from './Proto/Msg/gameMsg_LHD';
import { LHD_Poker } from './Proto/Msg/httpMsg_LHD';
const { ccclass, property } = _decorator;

class PokerResultProperty {
    @property({ type: Sprite })
    public spritePoker: Sprite;
    @property({ type: Node })
    public nodePokerBack: Node;
    @property({ type: Label })
    public lblPokerNumber: Label;
}

/**
 * Poker管理器
 * 發牌、開牌、收牌等
 */
@ccclass('PokerHandler')
export class PokerHandler extends BaseHander {
    @property({ group: { name: 'dragon', id: '0', displayOrder: 1 }, type: Sprite })
    public spriteDragonPoker: Sprite;
    @property({ group: { name: 'tiger', id: '1', displayOrder: 2 }, type: Sprite })
    public spriteTigerPoker: Sprite;
    @property({ group: { name: 'dragon', id: '0', displayOrder: 1 }, type: Label })
    public lblDragonNumber: Label;
    @property({ group: { name: 'tiger', id: '1', displayOrder: 2 }, type: Label })
    public lblTigerNumber: Label;

    @property({ group: { name: 'Poker', id: '2', displayOrder: 3}, type: Node})
    public nodeDealPokerStart: Node;
    @property({ group: { name: 'Poker', id: '2', displayOrder: 3}, type: Node})
    public nodeRecyclePokerEnd: Node;
    @property({ group: { name: 'dragon', id: '0', displayOrder: 1 },  type: Node })
    public nodeDragonBack: Node;
    @property({ group: { name: 'tiger', id: '1', displayOrder: 2 }, type: Node })
    public nodeTigerBack: Node;
    @property({ group: { name: 'Result', id: '3', displayOrder: 4}, type: Node})
    public nodeResult: Node;
    @property({ group: { name: 'Result', id: '3', displayOrder: 4}, type: Node})
    public arrNodeResultWin: Node[] = [];
    @property({ group: { name: 'Result', id: '3', displayOrder: 4}, type: Node})
    public arrNodeGlowZone: Node[] = [];

    private pokerAtlas: SpriteAtlas = null;
    private winIndex: number = -1;

    start() {
        super.start();
    }

    init() {
        super.init();
        var self = this;
        this.dealPokerToStart();
        GameDataManager.getInstance().registerDataChange(ICallback.GameDataType.PokerResult, function(data: any) {
            self.showPokerResult(data as LHD_GameResultPoker);
        })
    }

    updateGameStatus (status: ICallback.GameStatus) {
        super.updateGameStatus(status);
        switch (this.gameStatus) {
            case ICallback.GameStatus.BET_SCORE:
                this.showRecyclePoker();
                break;
            case ICallback.GameStatus.BET_START:
                this.dealPokerToStart()
                break;
            case ICallback.GameStatus.SHOW_POKER:
                this.openPokerResultAni();
                break;
            case ICallback.GameStatus.BET_END:
                break;
            case ICallback.GameStatus.RELOADING:
                break;
            default:
                break;
        } 
    }

    update(deltaTime: number) {
        
    }

    initAltas (callback: {():void}) {
        var self = this;
        resources.load('Atlas/Poker/PokerAtlas', SpriteAtlas, (err, atlas) => {
            self.pokerAtlas = atlas;
            if (callback) {
                callback();
            }
        })
    }

    getTwoDigitNumber (num: number): string {
        let formattedNumber = ('0' + num).slice(-2);
        return formattedNumber;
    }

    getPokerCard (data: LHD_Poker): SpriteFrame {
        let pokerCard = null;
        const frameName = 'Poker_' + this.getTwoDigitNumber(data.Color + 1) + '_' + this.getTwoDigitNumber(data.Number);
        if (this.pokerAtlas) {
            pokerCard = this.pokerAtlas.getSpriteFrame(frameName);
        } else {
            console.log('no pokerCard atlas');
        }
        return pokerCard;
    }

    //#region Recycle Poker Animation
    showRecyclePoker () {
        const moveDragonToRecycle = this.nodeRecyclePokerEnd.getWorldPosition().subtract(this.spriteDragonPoker.node.getWorldPosition());
        const moveTigerToRecycle = this.nodeRecyclePokerEnd.getWorldPosition().subtract(this.spriteTigerPoker.node.getWorldPosition());
        AudioManger.getInstance().playSound(ICallback.SoundType.DEAL_CARD);
        tween().target(this.spriteDragonPoker.node)
            .delay(1)
            .call(() => {
                this.lblDragonNumber.node.active = false;
            })
            .by(0.3, { position: moveDragonToRecycle, scale: new Vec3(-1, -1, -1) })
            .start();
        tween().target(this.spriteTigerPoker.node)
            .delay(1)
            .call(() => {
                this.lblTigerNumber.node.active = false;
            })
            .by(0.3, { position: moveTigerToRecycle, scale: new Vec3(-1, -1, -1) })
            .start();
    }
    //#endregion

    //#region Show Result Animation
    showPokerResult (data: LHD_GameResultPoker) {
        // console.log('showPokerResult:', this.gameStatus);
        if (this.gameStatus === ICallback.GameStatus.WAITING_NEXT_ROUND || this.gameStatus === ICallback.GameStatus.LOGIN) {
            return;
        }
        GameDataManager.getInstance().GameStatus = ICallback.GameStatus.BET_END;
        this.setRoundResult(data);
        this.setPokerSprite(this.spriteDragonPoker, data.Poker[0]);
        this.setPokerSprite(this.spriteTigerPoker, data.Poker[1]);
        this.lblDragonNumber.string = data.Poker[0].Number.toString();
        this.lblTigerNumber.string = data.Poker[1].Number.toString();
        GameDataManager.getInstance().GameStatus = ICallback.GameStatus.SHOW_POKER;
    }

    openPokerResultAni() {
        tween().target(this.nodeTigerBack)
            .delay(2)
            .by(0.3, { position: new Vec3(40, 0, 0)})
            .delay(0.2)
            .call(() => {
                AudioManger.getInstance().playSound(ICallback.SoundType.SHOW_CARD);
            })
            .by(0.5, { position: new Vec3(208, 0, 0)}, {
                onUpdate: (target: Vec3, ratio: number) => {
                    this.nodeTigerBack.getComponent(UIOpacity).opacity = (1 - ratio) * 255;
                }
            })
            .call(() => {
                this.lblTigerNumber.node.active = true;
                this.nodeTigerBack.active = false;
            })
            .delay(0.5)
            .call(() => {
                this.showWinResult();
                this.showWinGlowZone();
            }).start();

        tween().target(this.nodeDragonBack)
            .delay(0.5)
            .by(0.3, { position: new Vec3(40, 0, 0)})
            .delay(0.2)
            .call(() => {
                AudioManger.getInstance().playSound(ICallback.SoundType.SHOW_CARD);
            })
            .by(0.5, { position: new Vec3(208, 0, 0)}, {
                onUpdate: (target: Vec3, ratio: number) => {
                    this.nodeDragonBack.getComponent(UIOpacity).opacity = (1 - ratio) * 255;
                }
            })
            .call(() => {
                this.lblDragonNumber.node.active = true;
                this.nodeDragonBack.active = false;
            })
            .start();
    }

    showWinResult () {
        this.nodeResult.setScale(5, 5, 5);
        this.nodeResult.getComponent(UIOpacity).opacity = 255;
        AudioManger.getInstance().playSound(ICallback.SoundType.SHOW_RESULT_FIRST);
        tween().target(this.nodeResult)
            .to(0.2, { scale: new Vec3(1, 1, 1)})
            .call(() => {
                AudioManger.getInstance().playSound(ICallback.SoundType.SHOW_RESULT_FINISH);
            })
            .to(0.1, { scale: new Vec3(1.2, 1.2, 1.2)})
            .to(0.1, { scale: new Vec3(1, 1, 1)})
            .delay(0.6)
            .to(0.2, { scale: new Vec3(0.7, 0.7, 0.7)}, {
                onUpdate: (target: Vec3, ratio: number) => {
                    this.nodeResult.getComponent(UIOpacity).opacity = (1 - ratio) * 255;
                }
            })
            .start();
        this.nodeResult.active = true;
    }

    showWinGlowZone () {
        if (this.winIndex !== -1) {
            const nodeWinZone = this.arrNodeGlowZone[this.winIndex];
            tween().target(nodeWinZone)
                .by(0.8, { position: Vec3.ZERO }, {
                    onUpdate: (target: Vec3, ratio: number) => {
                        nodeWinZone.getComponent(UIOpacity).opacity = ratio * 255;
                    }
                })
                .by(0.8, { position: Vec3.ZERO }, {
                    onUpdate: (target: Vec3, ratio: number) => {
                        nodeWinZone.getComponent(UIOpacity).opacity = (1 - ratio) * 255;
                    }
                })
                .by(0.8, { position: Vec3.ZERO }, {
                    onUpdate: (target: Vec3, ratio: number) => {
                        nodeWinZone.getComponent(UIOpacity).opacity = ratio * 255;
                    }
                })
                .by(0.8, { position: Vec3.ZERO }, {
                    onUpdate: (target: Vec3, ratio: number) => {
                        nodeWinZone.getComponent(UIOpacity).opacity = (1 - ratio) * 255;
                    }
                })
                .start();
        }
    }
    //#endregion

    setRoundResult (data: LHD_GameResultPoker) {
        this.winIndex = -1;
        if (data.Poker[0].Number > data.Poker[1].Number) {
            this.winIndex = 0;
        } else if (data.Poker[0].Number === data.Poker[1].Number) {
            this.winIndex = 1;
        } else {
            this.winIndex = 2;
        }
        this.arrNodeResultWin.forEach((node, index) => {
            node.active = index === this.winIndex;
        })
    }

    setPokerSprite(spriteNode: Sprite, cardData: LHD_Poker) {
        spriteNode.node.setPosition(0, 0, 0);
        spriteNode.node.setScale(1, 1, 1);
        spriteNode.spriteFrame = this.getPokerCard(cardData);
        spriteNode.node.active = true;
    }

    //#region Deal Animation
    dealPokerToStart () {
        this.spriteDragonPoker.node.active = false;
        this.spriteTigerPoker.node.active = false;
        this.lblDragonNumber.node.active = false;
        this.lblTigerNumber.node.active = false;
        if (this.gameStatus === ICallback.GameStatus.BET_START) {
            this.showDealPoker();
        }
        this.nodeResult.active = false;
    }

    showDealPoker () {
        let  quat : Quat = new Quat();
        Quat.fromEuler(quat, 0, 0, 0);
        this.setBackPokerToDealNode(this.nodeDragonBack, -90);
        this.setBackPokerToDealNode(this.nodeTigerBack, 90);
        AudioManger.getInstance().playSound(ICallback.SoundType.DEAL_CARD);
        tween().target(this.nodeDragonBack)
            .to(0.3, { position: new Vec3(0, 0, 0), scale: new Vec3(1, 1, 1), rotation: quat})
            .start();
        tween().target(this.nodeTigerBack)
            .to(0.3, { position: new Vec3(0, 0, 0), scale: new Vec3(1, 1, 1), rotation: quat})
            .start();
    }

    setBackPokerToDealNode(backPoker: Node, rotat: number) {
        let  quat : Quat = new Quat();
        Quat.fromEuler(quat, 0, 0, rotat);
        backPoker.getComponent(UIOpacity).opacity = 255;
        backPoker.setWorldPosition(this.nodeDealPokerStart.getWorldPosition());
        backPoker.setRotation(quat);
        backPoker.setScale(0, 0, 0);
        backPoker.active = true;
    }
    //#endregion
}


