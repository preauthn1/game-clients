import { _decorator, Component, Node, director, sys } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ButtonScript")
export class ButtonScript extends Component {
  @property
  targetScene: string = "";

  @property
  setLang: string = "";

  @property({ type: Node })
  toggleNode: Node;

  @property({ type: Node })
  enableNode: Node;

  @property({ type: Node })
  disableNode: Node;

  @property({ type: Boolean })
  isBackButton: Boolean = false;

  @property({ type: Boolean })
  isLoginButton: Boolean = false;

  @property({ type: Boolean })
  isLogoutButton: Boolean = false;

  onLoad() {
    // 监听按钮的点击事件
    this.node.on(Node.EventType.TOUCH_END, this.onButtonClicked, this);
  }

  onButtonClicked() {
    if (this.isBackButton) {
      let previousScene = sys.localStorage.getItem("previousScene");
      director.loadScene(previousScene || "lobby");
    } else if (this.targetScene) {
      sys.localStorage.setItem("previousScene", director.getScene().name);
      director.loadScene(this.targetScene);
    }
    if (this.setLang) {
      sys.localStorage.setItem("language", this.setLang);
      director.loadScene(director.getScene().name || "lobby");
    }

    if (this.toggleNode) {
      this.toggleNode.active = !this.toggleNode.active;
    }

    if (this.enableNode) {
      this.enableNode.active = true;
    }

    if (this.disableNode) {
      this.disableNode.active = false;
    }

    if (this.isLoginButton) {
      sys.localStorage.setItem("isAuthenticated", "1");
      director.loadScene(director.getScene().name || "lobby");
    }

    if (this.isLogoutButton) {
      sys.localStorage.removeItem("isAuthenticated");
      director.loadScene(director.getScene().name || "lobby");
    }
  }
}
