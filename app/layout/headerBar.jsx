import Link from 'next/link';

const headerBar = () => {
    return (
        <div className='bg-slate-700'>
            <Link href='/'>
                <h1>MIND_LESS</h1>
            </Link>
        </div>
    )
}

export default headerBar;