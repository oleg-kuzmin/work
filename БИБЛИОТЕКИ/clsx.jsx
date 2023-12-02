//# clsx
import clsx from 'clsx';

function Component() {
  return (
    <div
      className={clsx({
        'text-gray-900': pathname === link.href,
      })}
    ></div>
  );
}

function Component() {
  return <div className={clsx(breadcrumb.active ? 'text-gray-900' : 'text-gray-500')}></div>;
}

function Component() {
  return (
    <div
      className={clsx('inline-flex items-center rounded-full px-2 py-1 text-xs', {
        'bg-gray-100 text-gray-500': status === 'pending',
        'bg-green-500 text-white': status === 'paid',
      })}
    ></div>
  );
}
