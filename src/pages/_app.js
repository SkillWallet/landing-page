import { Modal } from "@redq/reuse-modal";
import "@redq/reuse-modal/es/index.css";
import "common/assets/css/flaticon.css";
import "common/assets/css/icon-example-page.css";
import "common/assets/css/react-slick.css";
import "common/assets/css/rc-collapse.css";
import "common/assets/css/roadmap.css";
import "rc-collapse/assets/index.css";

export default function CustomApp({ Component, pageProps }) {
  return (
    <Modal>
      <Component {...pageProps} />
    </Modal>
  );
}
