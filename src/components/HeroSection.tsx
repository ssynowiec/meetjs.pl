import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export const HeroSection = () => {
	return (
		<header className="grid h-96 bg-[url('https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop')] bg-cover text-center text-white md:h-[35rem]">
			<div className="col-start-1 row-start-1 h-full w-full bg-gray-800 bg-opacity-70"></div>
			<div className="col-start-1 row-start-1 mx-auto my-auto">
				<p className="-rotate-2 bg-blue p-2 text-6xl font-bold">meet.js</p>
				<h1 className="p-4 text-xl font-medium">
					JavaScript meetups in Poland
				</h1>
				<Link
					href="/#joinus"
					className={buttonVariants({
						className: 'text-purple dark:bg-green dark:hover:bg-green/80',
						size: 'lg',
					})}
				>
					Join us
				</Link>
			</div>
		</header>
	);
};