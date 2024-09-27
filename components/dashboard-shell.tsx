import { cn } from "@/lib/utils";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface DashBoardShellProps  extends React.HTMLAttributes<HTMLDivElement> {}

export default function DashBoardShell({ 
    children , 
    className, 
    ...props
} : DashBoardShellProps) {
    return (
        <div className={cn("grid items-center gap-8", className)} {...props}>
            {children}
        </div>
    )
}