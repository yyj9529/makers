import type { Route } from "./+types/leaderboard-redirection-page";
import { data, redirect } from "react-router";
import { DateTime } from "luxon";

export function loader({params,request} : Route.LoaderArgs){
    const {period} = params;
    let url : string;
    const today = DateTime.now().setZone("Asia/Seoul");
    
    if(period === "daily"){
        url = `/products/leaderboards/daily/${today.year}/${today.month}/${today.day}`;  
    }else if(period === "weekly"){
        const weekNumber = Math.ceil(today.weekNumber / 4);
        url = `/products/leaderboards/weekly/${today.year}/${weekNumber}`;
    }else if(period === "monthly"){
        url = `/products/leaderboards/monthly/${today.year}/${today.month}`;
    }else if(period === "yearly"){
        url = `/products/leaderboards/yearly/${today.year}`;
    }else{
        return data(null,{status :400});
    }
    return redirect(url);
}