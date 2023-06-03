import Link from 'next/link';
import Image from 'next/image';

const headerBar = () => {
    return (
        <div className='flex bg-slate-700'>
            <Image src='/../public/logo-placeholder-image.png' width={80} height={80}/>
            <Link href='/'>
                <h1>MIND-LESS</h1>
            </Link>
        </div>
    )
}

export default headerBar;