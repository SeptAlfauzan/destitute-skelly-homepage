import Image from 'next/image'

export default function ImageComp({img}){
    return <Image src={img} alt="pict" objectFit="cover" layout="fill" />
}