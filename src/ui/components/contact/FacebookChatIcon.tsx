import Image from "next/image";
import Link from "next/link";
import styles from './Icon.module.css'; // Import CSS

export const FacebookChatIcon = () => {
  return (
    <div className={styles['facebook-icon']}>
      <Link href="https://www.facebook.com/thoa.reignrock/" target="_blank">
          <Image 
            src="/facebook.svg" 
            alt="Facebook Link" 
            width={50} 
            height={50} 
          />
      </Link>
    </div>
  );
}
