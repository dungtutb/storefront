import Image from "next/image";
import Link from "next/link";
import styles from './Icon.module.css'; // Import CSS

export const CallIcon = () => {
  return (
    <div className={styles['call-icon']}>
      <Link href="tel:+84348822238" target="_blank">
          <Image 
            src="/call.svg" 
            alt="Call" 
            width={50} 
            height={50} 
          />
      </Link>
    </div>
  );
}
