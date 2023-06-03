'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const linksData = [
  { id: 1, text: 'Areas', href: '/areas' },
  { id: 2, text: 'Projects', href: '/projects' },
  { id: 3, text: 'Resources', href: '/resources' },
  { id: 3, text: 'Archives', href: '/archives' }
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className='bg-cream flex flex-col h-full items-center m-8 p-4 rounded-t-2xl'>

      {linksData.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={(isActive ? 'bg-blue text-white' : 'text-black') + ' rounded-full px-4 py-2 max-w-min'}
            href={link.href}
            key={link.text}
          >
            {link.text}
          </Link>
        );
      })}

    </div>
  );
}

export default Navigation;