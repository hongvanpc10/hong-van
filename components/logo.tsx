import Link from 'next/link';
import routes from '~/configs/routes';
import Image from './image';

export default function Logo() {
  return (
    <Link href={routes.home} className="flex items-center">
      <Image alt="logo" src="/logo-dark.svg" className="w-6" />
      <h1 className="text-lg ml-3 font-medium">Hong Van</h1>
    </Link>
  );
}
