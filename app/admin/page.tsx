import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"

export default function Dashboard() {
    return (
        <>
            <div className="w-[68rem] m-auto flex justify-center items-center flex-col space-y-7">
                <h1 className="text-3xl">Manage Data</h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                            <Link href={`/admin/${2}`}>
                                <TableCell>Credit Card</TableCell>
                            </Link>
                                <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </>
    )

}
