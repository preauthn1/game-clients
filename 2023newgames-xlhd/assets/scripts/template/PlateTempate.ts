import { _decorator, Component, Node } from 'cc';
import { LHD_Cards, LHD_ResultCardList } from '../Proto/Msg/httpMsg_LHD';
import { BeadTemplate } from './BeadTemplate';
import * as i18n from 'db://i18n/LanguageData';
const { ccclass, property } = _decorator;

/**
 * Plate Template for Prefab
 */
@ccclass('PlateTempate')
export class PlateTempate extends Component {
    @property(BeadTemplate)
    public arrBeadTemplates: BeadTemplate[] = [];
    public plateRowIndex = 0;
    private countStartIndex = 0;
    private countEndIndex = 0;

    start() {
        
    }

    update(deltaTime: number) {
        
    }

    initPlate (index: number) {
        this.plateRowIndex = index;
        this.countStartIndex = this.plateRowIndex * this.arrBeadTemplates.length;
        this.countEndIndex = this.countStartIndex + this.arrBeadTemplates.length - 1;
        this.clearBreadPlate();
    }

    clearBreadPlate () {
        this.arrBeadTemplates.forEach(beadTemplate => {
            beadTemplate.setBeadType(false, -1);
        })
    }

    setBreadPlate (resultCard: LHD_Cards, isNew: boolean = false) {
        const roundId = resultCard.RoundID - 1;
        if (roundId >= this.countStartIndex && roundId <= this.countEndIndex) {
            const index = roundId % this.arrBeadTemplates.length;
            this.arrBeadTemplates[index].setBeadType(true, this.getResultType(resultCard), isNew);
        }
    }

    getResultType (resultCard: LHD_Cards): number {
        const minusNumber = resultCard.Cards[0].Number - resultCard.Cards[1].Number;
        return minusNumber > 0 ? 0 : (minusNumber === 0 ? 1 : 2);
    }
}


