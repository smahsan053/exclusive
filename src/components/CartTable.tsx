"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { poppins } from "@/app/fonts";

const data: Payment[] = [
  {
    id: "1",
    productname: "LCD Monitor",
    productlink: "/Monitor.png",
    price: 650,
    quantity: 0,
    subtotal: 0,
  },
  {
    id: "2",
    productname: "H1 Gamepad",
    productlink: "/gamepad.png",
    price: 550,
    quantity: 0,
    subtotal: 0,
  },
];

export type Payment = {
  id: string;
  productname: string;
  productlink: string;
  price: number;
  quantity: number;
  subtotal: number;
};

export function CartTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [quantities, setQuantities] = React.useState<Record<string, number>>(
    () => Object.fromEntries(data.map((item) => [item.id, item.quantity]))
  );

  const handleQuantityChange = (id: string, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + change),
    }));
  };

  const columns: ColumnDef<Payment, unknown>[] = [
    {
      id: "product",
      header: "Product",
      cell: ({ row }) => (
        <div className="flex items-center space-x-4 justify-center">
          <Image
            src={row.original.productlink}
            alt="product"
            width={60}
            height={60}
            className="rounded-md"
          />
          <span className="capitalize font-medium">
            {row.original.productname}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "price",
      header: () => <div className="text-center">Price</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("price"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);
        return <div className="text-center font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
      cell: ({ row }) => {
        const id = row.original.id;
        const quantity = quantities[id] || 0;

        return (
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => handleQuantityChange(id, -1)}
              className="w-6 h-6 text-center bg-gray-200 rounded hover:bg-gray-300"
            >
              ↓
            </button>
            <span className="text-center font-medium">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(id, 1)}
              className="w-6 h-6 text-center bg-gray-200 rounded hover:bg-gray-300"
            >
              ↑
            </button>
          </div>
        );
      },
    },
    {
      accessorKey: "subtotal",
      header: () => (
        <div className="flex justify-center items-center gap-2">Subtotal</div>
      ),
      cell: ({ row }) => {
        const id = row.original.id;
        const quantity = quantities[id] || 0;
        const amount = row.original.price * quantity;

        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return <div className="text-center font-medium">{formatted}</div>;
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  // Calculate totals dynamically
  const getSubtotal = () => {
    return data.reduce((total, item) => {
      const quantity = quantities[item.id] || 0;
      return total + item.price * quantity;
    }, 0);
  };

  const getTotal = () => {
    const subtotal = getSubtotal();
    return subtotal; // Here you can add shipping logic if necessary
  };

  return (
    <div className="flex flex-col items-center justify-between mb-24">
      <div className="w-[95%] md:w-[80%] mt-10">
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="text-center align-middle px-4 py-2"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="space-y-4">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="text-center align-middle shadow-md bg-white rounded-lg border"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="text-center align-middle px-4 py-2"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center align-middle"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Buttons section */}
      <div className="flex flex-col sm:flex-row w-[95%] md:w-[80%] justify-between pt-12 gap-4 mx-4 sm:mx-0">
        <button
          className={`px-12 py-4 sm:px-12 ${poppins.className} font-medium text-base bg-none border border-black border-opacity-50 text-text2 rounded text-nowrap`}
        >
          Return To Shop
        </button>
        <button
          className={`px-12 py-4 sm:px-12 ${poppins.className} font-medium text-base bg-none border border-black border-opacity-50 text-text2 rounded text-nowrap`}
        >
          Update Cart
        </button>
      </div>

      {/* Coupon code and cart total section */}
      <div className="flex flex-col lg:flex-row w-[95%] md:w-[80%] justify-between pt-12 gap-4 sm:mx-0">
        <div className="flex gap-4 w-full lg:w-auto justify-between">
          <input
            type="text"
            className="border border-black border-opacity-50 h-14 rounded w-72 placeholder:px-6"
            placeholder="Coupon Code"
          />
          <button
            className={`px-12 h-14 ${poppins.className} font-medium text-base bg-button2 text-text rounded`}
          >
            Apply Coupon{" "}
          </button>
        </div>
        <div
          className={`h-80 w-full lg:w-[470px] border border-black border-opacity-50 flex flex-col p-4 text-text2 ${poppins.className}`}
        >
          <h1 className="text-xl font-medium py-4">Cart Total</h1>
          <div className="flex justify-center items-center flex-col w-full">
            <div className="flex justify-between items-center w-full font-normal text-base leading-6 pb-4">
              <p>Subtotal:</p>
              <p>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(getSubtotal())}
              </p>
            </div>
            <div className="border-t border-black border-opacity-50 w-[90%] pb-4"></div>
            <div className="flex justify-between items-center w-full font-normal text-base leading-6 pb-4">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="border-t border-black border-opacity-50 w-[90%] pb-4"></div>
            <div className="flex justify-between items-center w-full font-normal text-base leading-6 pb-4">
              <p>Total:</p>
              <p>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(getTotal())}
              </p>
            </div>
          </div>
          <button
            className={`px-12 h-14 ${poppins.className} font-medium text-base bg-button2 text-text rounded`}
          >
            Proceed to Checkout{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
