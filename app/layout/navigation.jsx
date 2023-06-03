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
    <div className='bg-rose-700'>
      <h1>Navigation</h1>
      <div>
        {linksData.map((link) => {
          const isActive = pathname.startsWith(link.href);

          return (
            <Link
              className={(isActive ? 'bg-gray-950' : 'bg-gray-800') + ''}
              href={link.href}
              key={link.text}
            >
              {link.text}
            </Link>
          );
        })}
      </div>


    </div>
  );
}

export default Navigation;