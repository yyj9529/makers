import { Link, useSearchParams } from "react-router";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis,
} from "./ui/pagination";

type ProductPaginationProps = {
    totalPages: number;
}

export default function ProductPagination({totalPages}: ProductPaginationProps){

        const [searchParams,setSearchParams] = useSearchParams();
      //  const page = Number(searchParams.get("page")) ?? 1;
        const page = (searchParams.get("page") !==null) ? Number(searchParams.get("page")) : 1;

        if(isNaN(page) || page < 1 || page > totalPages){
            throw new Error("Invalid page number");
        }
        const onClick =(page : number) => {
            console.log("page.toString()...",page.toString());
            console.log("searchParams...",searchParams);
            searchParams.set("page",page.toString());
            setSearchParams (searchParams,{
              
                preventScrollReset:true,
            });
        }
        const basePath = searchParams.get("basePath") ?? "";
        const query = searchParams.toString();
        const url = `${basePath}?${query}`;
        return (
            <div>
                <Pagination>
                    <PaginationContent>
                    {page === 1 ? null : (
                        <>
                            <PaginationItem>
                            <PaginationPrevious to={`?page=${page-1}`}  onClick={(event)=>{
                                event.preventDefault();
                                onClick(page-1);
                            }}/>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink to={`?page=${page-1}`} onClick={(event)=>{
                                event.preventDefault();
                                onClick(page-1);
                            }}>{page-1}
                            </PaginationLink>
                        </PaginationItem>
                        </>
                        )}
                        <PaginationItem>
                        <PaginationLink to={`?page=${page}`} isActive>
                            {page}
                        </PaginationLink>
                        </PaginationItem>
                       {
                        page === totalPages ? null : (
                            <>
                             <PaginationItem>
                                <PaginationLink to={`?page=${page+1}`}>{page+1}</PaginationLink>
                                </PaginationItem>
                                {page +1 ===totalPages ? null : (
                                    <>
                                     <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    </>
                                )}
                               

                                <PaginationItem>
                                <PaginationNext to={`?page=${page+1}`} />
                            </PaginationItem>
                            </>
                        )
                       }
                    </PaginationContent>
                </Pagination>   
            </div>      
        )
      
}