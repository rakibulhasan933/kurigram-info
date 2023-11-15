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
		title: "Bhurungamari",
		href: "/bhurungamari",
	},
	{
		title: "Chilmari ",
		href: "/chilmari ",
	},
	{
		title: "Rajarhat",
		href: "/rajarhat",
	},
	{
		title: "Rajibpur",
		href: "/rajibpur",
	}
]

export function DownMenu() {
	const { user, setUser } = useUser();
	function logOut() {
		localStorage.removeItem('id');
		setUser(null);
	}
	return (
		<div className=" flex flex-row">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger className=" md:text-base text-sm">Services</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="w-fit">
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
						<NavigationMenuTrigger className=" md:text-base text-sm">Upazila</NavigationMenuTrigger>
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
				{user?.phone ? (<AlertDialog>
					<AlertDialogTrigger asChild>
						<Image src={user?.photoUrl as string} className=' rounded-full' width={40} height={40} priority={true} alt='profile' />
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
				</AlertDialog>) :
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
