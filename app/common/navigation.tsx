import { Link } from "react-router-dom";
import { Separator } from "~/common/components/ui/separator";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuLink, navigationMenuTriggerStyle } from "./components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./components/ui/dropdown-menu";
import { cn } from "~/lib/utils";
import { Button } from "./components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { BarChart, SettingsIcon, UserIcon, LogOutIcon, BellIcon, MessageCircleIcon } from "lucide-react";
const menus = [
    {
        name : "Products",
        to : "/products",
        items : [
            {
                name : "Products",
                description : "See the top performers in your community",
                to : "/products/leaderboards"
            },
            {
                name : "Categories",
                description : "See the top categories in your community",
                to : "/products/categories",
            },
            {
                name : "Search",
                description :"Search for a product",
                to : "/products/search",
            },
            {
                name : "Submit a Product",
                description : "Submit a product to our community",
                to : "/products/submit",
            },
            {
                name : "Promote",
                description : "Promote a product to our community",
                to : "/products/promote",
            }
        ],
    },
    {
        name : "Jobs",
        to: "/jobs",
        items : [
            {
                name : "Remote Jobs",
                description : "Find a job in our community",
                to : "/jobs?location=remote",
            },
            {
                name : "Full-Time Jobs",
                description : "Find a full-time job in our community",
                to : "/jobs?type=full-time",
            },
            {
                name : "Freelance Jobs",
                description : "Find a freelance job in our community",
                to : "/jobs?type=freelance",
            },
            {
                name : "Internships",
                description : "Find an internship in our community",
                to : "/jobs?type=internship",
            },
            {
                name : "Submit a Job",
                description : "Submit a job to our community",
                to : "/jobs/submit",
            }
        ]
   
    }
    ,
    {
        name : "Community",
        to : "/community",
        items : [
            {
                name : "All Posts",
                description : "See all posts in our community",
                to : "/community/",
            },{
                name : "Top Posts",
                description : "See the top posts in our community",
                to : "/community?sort=top",
            },{
                name : "New Posts",
                description : "See the new posts in our community",
                to : "/community?sort=new",
            },{
                name : "Create Posts",
                description : "Create a post in our community",
                to : "/community/create",
            }
        ]
    },
    {
        name : "IdeasGPT",
        to : "/ideasgpt",
        
    }
    ,{
        name : "Teams",
        to : "/teams",
        items : [
            {
                name : "All Teams",
                description : "See all teams in our community",
                to : "/teams",
            },
            {
                name : "Create a Team",
                description : "Create a team in our community",
                to : "/teams/create",
            }
        ]
    }
    
]



export default function Navigation({
    isLoggedIn,
    hasNotifications,
    hasMessages

}:{
    isLoggedIn: boolean
    hasNotifications: boolean
    hasMessages: boolean
}){
    return <nav className=" flex px-20  h-16 items-center justify-between backgroup-blur fixed
    top-0 left-0 right-0 bg-red-500/50">
        <div>
            <Link to="/" className="font-bold tracking-tight text-lg">
                Makers
            </Link>
            <Separator orientation="vertical" className="h-2 mx-4"/>
            <NavigationMenu>
                <NavigationMenuList>
                    {menus.map((menu) => (
                        <NavigationMenuItem key={menu.name}>
                           {menu.items? 
                           <>
                            <Link to={menu.to}>
                                <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                            </Link>
                            <NavigationMenuContent>
                                <ul className="grid w-[500px] font-light gap-3 p-4 grid-cols-2">
                                {menu.items?.map((item) => (
                                   
                                    <NavigationMenuItem 
                                        key={item.name} 
                                        className={cn([
                                        "select-none rounded-md transition-colors focus:bg-accent hover:bg-accent",
                                        item.to === "/products/promote" && "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                                        item.to === "/jobs/submit" && "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                                    ])}
                                    >
                                    <NavigationMenuLink asChild>
                                        <Link className="p-3 bg-primary/10 space-y-1 block leading-none no-underline outline-none"
                                        to={item.to}>
                                            <span className="text-sm text-primary-foreground font-medium leading-none">
                                                {item.name}
                                            </span>
                                            <p className="text-sm leading-snug text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                                </ul>
                            </NavigationMenuContent>
                           </> : <Link className={navigationMenuTriggerStyle()}  to={menu.to}>{menu.name}</Link>}
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
        <div>
            {isLoggedIn ? (
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" asChild className="relative">
                        <Link to="/my/notifications">
                            <BellIcon className="size-4" />
                            {hasNotifications && (
                                <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-sm w-2 h-2 flex items-center justify-center">
                                    {hasNotifications}
                                </div>
                            )}
                        </Link>
                       
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="relative"> 
                        <Link to="/my/messages">
                            <MessageCircleIcon className="size-4" />
                            {hasMessages && (
                                <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-sm w-2 h-2 flex items-center justify-center">
                                    {hasMessages}
                                </div>
                            )}
                        </Link>
                    </Button>
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>N</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel className="flex flex-col gap-1">
                        <span className="text-sm font-medium">John Doe</span>
                        <span className="text-xs text-muted-foreground">john@doe.com</span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                    <DropdownMenuItem asChild className="cursor-pointer">
                            <Link to="/dashboard"> 
                                <BarChart className="size-4 mr-2" />Dashboard
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link to="/profile"> 
                                <UserIcon className="size-4 mr-2" />Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link to="/my/settings">
                                <SettingsIcon className="size-4 mr-2" />Settings
                           </Link>
                        </DropdownMenuItem>

                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild className="cursor-pointer">
                        <Link to="/auth/logout">
                            <LogOutIcon className="size-4 mr-2" />Logout
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
            ) : (
                <div className="flex items-center gap-4">
                    <Button asChild variant="secondary" >
                        <Link to="/auth/login">Login</Link>
                    </Button>
                    <Button asChild>
                        <Link to="/auth/join">Join</Link>
                    </Button>
                </div>
            )}
        </div>
    </nav>
}