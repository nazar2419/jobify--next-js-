import { Skeleton } from "@/components/ui/skeleton";
function loading() {
    return ( 
    <div className='text-xl font-medium capitalize'>
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
    </div>
    )
}
export default loading;