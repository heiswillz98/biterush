import type { FC } from "react";
import Image from "next/image";
import type ImageProps from "./Image.props";
import styles from "./Image.module.scss";

const Img: FC<ImageProps> = ({
  className,
  path,
  name,
  width,
  height,
  responsive,
}) => {
  return (
    <figure className={`relative overflow-hidden ${className}`}>
      {responsive && width ? (
        <Image
          src={path}
          // className={styles.base}
          alt={name}
          width={width}
          height={height}
        />
      ) : (
        <Image src={path} className={styles.base} alt={name} priority />
      )}
    </figure>
  );
};

export default Img;
