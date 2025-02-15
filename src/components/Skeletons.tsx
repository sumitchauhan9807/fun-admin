import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const LoadingSkeleton = () => {
	return (
		<div role="status" className="max-w-sm animate-pulse">
			<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
			<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
			<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
			<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
			<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
			<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
			<span className="sr-only">Loading...</span>
		</div>
	);
};

export const ImagePreLoad = ({ height }: { height: any }) => {
	return (
		<div style={{ objectFit: "cover", width: "100%", height: height }} role="status" className="flex items-center justify-center bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
			<svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
				<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
				<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
			</svg>
			<span className="sr-only">Loading...</span>
		</div>
	);
};

export const ProfileSkeleton = () => {
	return (
		<div className="min-h-screen bg-white">
			<header className="bg-gray-300 py-8">
				<div className="max-w-4xl mx-auto px-4">
					<div className="animate-pulse flex items-center space-x-4">
						<div className="h-12 w-12 bg-gray-400 rounded-full" />
						<div>
							<div className="h-4 w-20 bg-gray-400 rounded" />
							<div className="h-4 w-16 bg-gray-400 rounded mt-2" />
						</div>
					</div>
				</div>
			</header>
			<div className="max-w-4xl mx-auto px-4 py-8">
				<div className="animate-pulse space-y-4">
					<div className="h-4 bg-gray-300 rounded w-2/3" />
					<div className="h-4 bg-gray-300 rounded" />
					<div className="h-4 bg-gray-300 rounded" />
					<div className="h-4 bg-gray-300 rounded w-1/2" />
					<div className="h-4 bg-gray-300 rounded" />
					<div className="h-4 bg-gray-300 rounded" />
					<div className="h-4 bg-gray-300 rounded w-3/4" />
				</div>
				<div className="animate-pulse space-y-4 mt-12">
					<div className="h-4 bg-gray-300 rounded w-2/3" />
					<div className="h-4 bg-gray-300 rounded" />
					<div className="h-4 bg-gray-300 rounded" />
					<div className="h-4 bg-gray-300 rounded w-1/2" />
					<div className="h-4 bg-gray-300 rounded" />
					<div className="h-4 bg-gray-300 rounded" />
				</div>
			</div>
		</div>
	);
};

export const PageSkeleton = () => {
	return (
		<SkeletonTheme highlightColor="#f5f5f5">
			<div className="min-h-screen bg-white">
				<header className="bg-gray-200 py-8">
					<div className="max-w-6xl mx-auto px-4">
						<div className="animate-pulse flex items-center space-x-4">
							<Skeleton circle={true} height={48} width={48} />
							<div>
								<Skeleton height={20} width={120} />
								<Skeleton height={16} width={80} className="mt-2" />
							</div>
						</div>
					</div>
				</header>
				<div className="max-w-6xl mx-auto px-4 py-8">
					<div className="animate-pulse space-y-6">
						<Skeleton height={32} width="50%" />
						<Skeleton height={24} width="80%" />
						<Skeleton height={24} width="70%" />
						<Skeleton height={24} width="60%" />
						<Skeleton height={24} width="90%" />
						<Skeleton height={24} width="75%" />
						<Skeleton height={24} width="85%" />
					</div>
					<div className="animate-pulse space-y-6 mt-12">
						<Skeleton height={24} width="80%" />
						<Skeleton height={24} width="70%" />
						<Skeleton height={24} width="60%" />
						<Skeleton height={24} width="90%" />
						<Skeleton height={24} width="75%" />
						<Skeleton height={24} width="85%" />
					</div>
				</div>
				<footer className="bg-gray-200 py-8 mt-12">
					<div className="max-w-6xl mx-auto px-4">
						<div className="animate-pulse space-y-4">
							<Skeleton height={16} width="30%" />
							<Skeleton height={16} width="40%" />
							<Skeleton height={16} width="50%" />
							<Skeleton height={16} width="60%" />
						</div>
					</div>
				</footer>
			</div>
		</SkeletonTheme>
	);
};

export const ChatBoxSkeleton = () => {
	return (
		<SkeletonTheme highlightColor="#f5f5f5">
			<div className="flex flex-col flex-auto h-full sm:p-6">
				<div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full sm:p-4">
					<div className="p-4 space-y-4">
						<Skeleton height={40} width="80%" />
						<Skeleton height={20} width="60%" />
						<Skeleton height={20} width="70%" />
						<Skeleton height={20} width="90%" />
						<Skeleton height={20} width="50%" />
					</div>
					<div className="mt-8 p-4 space-y-4">
						<Skeleton height={200} width="100%" />
						<Skeleton height={200} width="100%" />
					</div>
				</div>
			</div>
		</SkeletonTheme>
	);
};

export const PackageSkeleton = () => {
	return (
		<SkeletonTheme highlightColor="#f5f5f5">
			<div className="w-full relative cursor-pointer">
				<div className="flex justify-center text-center text-white z-[50]">
					<div className="absolute -top-10 w-[90%] py-6 rounded-xl z-[50] border-none bg-gray-200">
						<Skeleton height={30} width="60%" className="mb-2" />
						<Skeleton height={30} width="40%" />
					</div>
				</div>
				<div className="text-gray-600 bg-white py-24 text-lg h-[250px] rounded-lg shadow-[2px_2px_20px_rgba(0,0,0,0.1)] border border-gray-100 mt-10">
					<div className="px-4">
						<Skeleton count={5} />
					</div>
					<div className="flex justify-center">
						<div className="text-white absolute bottom-4 w-[90%]">
							<Skeleton height={50} width="100%" />
						</div>
					</div>
				</div>
			</div>
		</SkeletonTheme>
	);
};



export const NotificationModalSkeleton = () => (
	<div className="absolute -right-16 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
		<div className="p-3 border-b border-gray-200 flex justify-between items-center">
			<h3 className="text-lg font-semibold">Notifications</h3>
		</div>
		<ul className="px-2 pt-2">
			<SkeletonTheme highlightColor="#F0F0F0">
				{[...Array(5)].map((_, index) => (
					<li key={index} className="p-2 border-b border-gray-200 last:border-0 text-sm flex items-center">
						<Skeleton circle={true} height={32} width={32} className="mr-2" />
						<div className="flex flex-col">
							<Skeleton width={100} />
							<Skeleton width={150} />
						</div>
					</li>
				))}
			</SkeletonTheme>
		</ul>
	</div>
);

export const GiftsSkeleton = () => {
	return (
		<div className="absolute bottom-[50px] sm:left-0 z-[50]">
			<div className="w-[400px] p-2 h-[420px] overflow-hidden bg-gray-600 rounded-lg">
				<div className="grid grid-cols-4 gap-2">
					{[...Array(20)].map((_, index) => {
						return (
							<SkeletonTheme highlightColor="#F0F0F0" key={index}>
								<Skeleton className="h-20 rounded-lg" />
							</SkeletonTheme>
						);
					})}
				</div>
			</div>
		</div>
	);
};
