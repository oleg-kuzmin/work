//# usePathname
'use client';
import { usePathname } from 'next/navigation';

function Component() {
  const pathname = usePathname();
  return (
    <div
      className={clsx({
        'text-gray-900': pathname === link.href,
      })}
    ></div>
  );
}
