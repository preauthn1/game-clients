import { _decorator, Component, Node, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SetLanguageNode')
export class SetLanguageNode extends Component {
  start() {
    const enNode = this.node.getChildByName('en');
    const zhNode = this.node.getChildByName('zh');
    if (!enNode || !zhNode) return;
    let currentLanguage = sys.localStorage.getItem('language');
    if (!currentLanguage) {
      currentLanguage = 'en';
    }
    const isEn = currentLanguage === 'en';
    enNode.active = isEn;
    zhNode.active = !isEn;
  }
}
