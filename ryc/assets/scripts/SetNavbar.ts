import { _decorator, Component, Node, sys } from "cc";
const { ccclass, property } = _decorator;

@ccclass("SetLanguageNode")
export class SetLanguageNode extends Component {
  @property({ type: Node })
  authentication: Node;

  @property({ type: Node })
  account: Node;

  start() {
    let isAuthenticated = sys.localStorage.getItem("isAuthenticated");
    this.account.active = !!isAuthenticated;
    this.authentication.active = !isAuthenticated;
  }
}
