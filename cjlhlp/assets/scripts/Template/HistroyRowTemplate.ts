import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HistroyRowTemplate')
export class HistroyRowTemplate extends Component {

    @property(Label)
    public arrLabelNumber: Label[] = [];
    private index: number = 0;


    public createHistoryRow(index: number) {
        this.clearAllNumber();
        this.index = index;
    }

    public setHisrotyRowNumber(index: number, number: number) {
        this.clearAllNumber();
        if (this.index === index) {
            const rowIndex = this.getShowRowIndex(number);
            // console.log('setHisrotyRowNumber:', rowIndex, number);
            this.arrLabelNumber[rowIndex].string = number.toString();
            this.arrLabelNumber[rowIndex].node.active = true;
        }
    }

    private getShowRowIndex(number: number): number {
        let rowIndex = 0;
        switch (number) {
            case 0:
                rowIndex = 1;
                break;
            case 2:
            case 4:
            case 6:
            case 8:
            case 10:
            case 11:
            case 13:
            case 15:
            case 17:
            case 20:
            case 22:
            case 24:
            case 26:
            case 28:
            case 29:
            case 31:
            case 33:
            case 35:
                rowIndex = 2
                break;
        }
        return rowIndex;
    }

    public clearAllNumber() {
        this.arrLabelNumber.forEach(label => {
            label.node.active = false;
        })
    }

    public getIndex(): number {
        return this.index;
    }
}


