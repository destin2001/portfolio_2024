import "./styles.scss";

import { h, Component } from "preact";

// import Emitter from "core/Emitter";

import messages from "@/config/messages";

class SplashScreen extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.generateTimelineMax();
  }

  // generateTimelineMax() {
  //   this.tl = gasp.timeline({
  //     onComplete: () => {
  //       this.base.classList.add("splash_screen--is-hidden");
  //     },
  //   });

  //   this.tl
  //     .addCallback(() => {
  //       Emitter.emit(messages.SPLASH_SCREEN_HIDE);
  //     }, 0.9)
  //     .to(this.base, 1, { opacity: 0, ease: "power2.inOut" });
  // }

  render(props, state) {
    return <div class="splash_screen"></div>;
  }
}

export default SplashScreen;
