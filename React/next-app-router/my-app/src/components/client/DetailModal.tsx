'use client'
import { Content, Dialog, Overlay, Portal, Root, Trigger } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";

export const DetailModal = () => {
	const router = useRouter();
	const onClose = () => { router.back(); };
  return (
    <Root defaultOpen={true} onOpenChange={onClose}>
      <Portal>
        <Overlay className={styles.DialogOverlay}>
          <Content className={styles.DialogContent}>Content</Content>
        </Overlay>
      </Portal>
    </Root>
  );
};

export default DetailModal;
