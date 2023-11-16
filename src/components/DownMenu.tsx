"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useUser } from "./ContextProvider"
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"


const components: { title: string; href: string; }[] = [
	{
		title: "Institutions",
		href: "/education",
	},
	{
		title: "Hotels",
		href: "/hotels",
	},
	{
		title: "Restaurants",
		href: "/restaurants",
	},
	{
		title: "Places",
		href: "/places",
	}
]
const components2: { title: string; href: string; }[] = [

	{
		title: "Kurigram Sadar",
		href: "/",
	},
	{
		title: "Bhurungamari",
		href: "/bhurugamari",
	},
	{
		title: "Nageshwari",
		href: "/nageshwari",
	},
	{
		title: "Phulbari",
		href: "/phulbari",
	},
	{
		title: "Rajarhat",
		href: "/rajarhat",
	},
	{
		title: "Phulbari",
		href: "/phulbari",
	},
	{
		title: "Chilmari ",
		href: "/chilmari ",
	},
	{
		title: "Ulipur",
		href: "/ulipur",
	},
	{
		title: "Chor Rajibpur",
		href: "/charrajibpur",
	},
	{
		title: "Raomari",
		href: "/raomari",
	}
]

export function DownMenu() {
	const { user, setUser } = useUser();
	function logOut() {
		localStorage.removeItem('id');
		setUser(null);
	}
	return (
		<div className="flex flex-row">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger className="md:text-base text-xs">Services</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="w-fit p-2">
								{components.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}
									>
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger className="md:text-base text-xs">Upazila</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[120px] gap-1 p-1 md:w-[200px] md:grid-cols-1 ">
								{components2.map((component, index) => (
									<NavigationMenuLink href={component.href} className="p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm font-medium" key={index}>{component.title}</NavigationMenuLink>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<div className="mx-1">
				{user?.phone ? (
					<Sheet>
						<SheetTrigger>
							<Image src={user?.photoUrl as string} className=' rounded-full' width={40} height={40} priority={true} alt='profile' />
						</SheetTrigger>
						<SheetContent className=' flex justify-center'>
							<SheetHeader>
								<SheetTitle>DashBoard NavBar</SheetTitle>
								<ul className='mx-2 flex flex-col justify-center gap-x-14'>
									<li className='text-lg font-medium my-4 bg-blue-500 text-white rounded px-4 py-2'>
										<Link href="/dashboard">Dashboard</Link>
									</li>
									<li className='text-lg font-medium my-4 bg-red-500 text-white rounded px-4 py-2'>
										<AlertDialog>
											<AlertDialogTrigger asChild>
												<button>Logout</button>
											</AlertDialogTrigger>
											<AlertDialogContent>
												<AlertDialogHeader>
													<AlertDialogTitle>Logout Are you absolutely sure?</AlertDialogTitle>
												</AlertDialogHeader>
												<AlertDialogFooter>
													<AlertDialogCancel>Cancel</AlertDialogCancel>
													<AlertDialogAction onClick={() => logOut()} >Continue</AlertDialogAction>
												</AlertDialogFooter>
											</AlertDialogContent>
										</AlertDialog>
									</li>
								</ul>

							</SheetHeader>
						</SheetContent>
					</Sheet>
				) :
					<Button className='text-sm bg-blue-400 text-white' asChild>
						<Link href="/login">Login</Link>
					</Button>}
			</div>
		</div>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"
