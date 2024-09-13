import Image from "next/image";
import Link from "next/link";
import styles from './Icon.module.css'; // Import CSS

export const ZaloChatIcon = () => {
  return (
    <div className={styles['zalo-icon']}>
      <Link href="https://zalo.me/0348822238" target="_blank">
          <Image 
            src="/zalo.svg" 
            alt="Zalo Chat" 
            width={50} 
            height={50} 
          />
      </Link>
    </div>
  );
}
