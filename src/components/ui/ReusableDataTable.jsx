import React, { useState, useMemo, useCallback } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from "primereact/paginator";
import { Skeleton } from "primereact/skeleton";
import { Search, Download, Layers, ArrowUp, ArrowDown, ChevronDown } from "lucide-react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { debounce } from "lodash";
import ReusableForm from "./ReusableForm";

const ReusableDataTable = ({
    title = "Premium Data",
    data = [],
    columns = [],
    className = "",
    loading = false,
    dataKey = "id",
    rowsPerPageOptions = [10, 25, 50],
    lazy = false,
    totalRecords,
    onPageChange,
    onSortChange,
    onFilterChange,
}) => {
    const [globalFilter, setGlobalFilter] = useState("");
    const [sortConfig, setSortConfig] = useState({ multiSortMeta: [] });
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const debouncedGlobalFilter = useCallback(
        debounce((value) => {
            setGlobalFilter(value);
            onFilterChange?.({ global: value });
        }, 400),
        [onFilterChange]
    );

    const filteredData = useMemo(() => {
        if (lazy || !globalFilter) return data;
        const term = globalFilter.toLowerCase();
        return data.filter((row) =>
            Object.values(row).some((val) =>
                val?.toString().toLowerCase().includes(term)
            )
        );
    }, [data, globalFilter, lazy]);

    const displayData = lazy ? data : filteredData.slice(first, first + rows);
    const total = lazy ? (totalRecords || 0) : filteredData.length;

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(filteredData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        saveAs(new Blob([excelBuffer]), `Export_${new Date().getTime()}.xlsx`);
    };

    // Custom Sort Icon Logic
    const getSortIcon = (field) => {
        const activeSort = sortConfig.multiSortMeta?.find((s) => s.field === field);
        if (!activeSort) return <div className="opacity-60 group-hover:opacity-50 ml-1"><ArrowUp size={16} /></div>;
        return activeSort.order === 1
            ? <ArrowUp size={16} className="ml-1 text-cyan-400" />
            : <ArrowDown size={16} className="ml-1 text-cyan-400" />;
    };

    return (
        <div className={`glass-container p-2 rounded-[1.5rem] bg-black/10 border border-white/20 shadow-2xl ${className}`}>

            {/* Header Area */}
            <div className="flex flex-wrap items-center justify-between p-5 gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                        <Layers className="text-[var(--btnColor)]" size={20} />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-white tracking-tight">{title}</h2>
                        <div className="flex items-center gap-1.5 leading-none">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Live System</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3 flex-1 justify-end max-w-xl">
                    <div className="relative w-full max-w-xs group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--btnColor)] group-focus-within:text-cyan-400 transition-colors" size={18} />
                        <input
                            type="text"
                            onChange={(e) => debouncedGlobalFilter(e.target.value)}
                            placeholder="Search records..."
                            className="w-full bg-white/10 border border-white/20 text-white pl-10 pr-4 py-2.5 rounded-xl outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all text-sm"
                        />
                    </div>

                    <button
                        onClick={exportToExcel}
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-[var(--btnColor)] text-[var(--btnColor)] px-4 py-2.5 rounded-xl transition-all active:scale-95 whitespace-nowrap"
                    >
                        <Download size={16} />
                        <span className="text-sm font-medium">Export</span>
                    </button>
                </div>
            </div>

            {/* Premium Table */}
            <div className="mx-2 overflow-hidden rounded-xl border border-white/10 bg-black/20 whitespace-nowrap">
                <DataTable
                    value={loading ? Array(5).fill({}) : displayData}
                    dataKey={dataKey}
                    className="custom-table"
                    sortMode="multiple"
                    multiSortMeta={sortConfig.multiSortMeta}
                    onSort={(e) => setSortConfig(e)}
                    responsiveLayout="scroll"
                    emptyMessage={
                        <div className="text-center text-gray-400 py-4">
                            <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                <Search size={16} />
                            </div>
                            <p className="text-sm">No records found</p>
                        </div>
                    }
                >
                    {columns.map((col, i) => (
                        <Column
                            key={i}
                            field={col.key}
                            header={
                                <div className="flex items-center group cursor-pointer w-full py-1 text-gray-400">
                                    <span className="text-sm font-bold capitalize tracking-wider text-slate-300 group-hover:text-slate-200 transition-colors">
                                        {col.label}
                                    </span>
                                    {col.sortable !== false && getSortIcon(col.key)}
                                </div>
                            }
                            body={(rowData, options) => (
                                loading ? <Skeleton width="70%" height="1rem" className="!bg-white/5" /> : (
                                    <div className="text-slate-300 text-sm font-medium py-1">
                                        {col.render ? col.render(rowData[col.key], rowData, options.rowIndex) : (rowData[col.key] ?? "-")}
                                    </div>
                                )
                            )}
                        />
                    ))}
                </DataTable>
            </div>

            {/* Paginator Fix */}
            <div className="p-4 mt-2">
                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={total}
                    onPageChange={(e) => {
                        setFirst(e.first);
                        setRows(e.rows);
                        onPageChange?.(e);
                    }}
                    template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    className="custom-paginator"
                />
            </div>

            <style>{`
                /* Hide Default PrimeReact Sort Icons */
                .p-sortable-column-icon {
                    display: none !important;
                }
                
                .custom-table .p-datatable-thead > tr > th {
                    background: rgba(255, 255, 255, 0.1) !important;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
                    padding: 1rem !important;
                    color: #ffffff !important;
                }

                .custom-table .p-datatable-tbody > tr {
                    background: transparent !important;
                    transition: 0.2s;
                }

                .custom-table .p-datatable-tbody > tr:hover {
                    background: rgba(255, 255, 255, 0.03) !important;
                }

                .custom-table .p-datatable-tbody > tr > td {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.03) !important;
                    padding: 1rem !important;
                }

                /* Paginator Fixes */
                .custom-paginator {
                    background: transparent !important;
                    border: none !important;
                    padding: 0 !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    gap: 8px;
                }

                .custom-paginator .p-paginator-page, 
                .custom-paginator .p-link {
                    background: rgba(255, 255, 255, 0.03) !important;
                    color: #94a3b8 !important;
                    border-radius: 10px !important;
                    min-width: 2.2rem !important;
                    height: 2.2rem !important;
                    border: 1px solid rgba(255, 255, 255, 0.05) !important;
                    transition: 0.3s;
                }

                .custom-paginator .p-paginator-page.p-highlight {
                    background: rgba(6, 182, 212, 0.2) !important;
                    color: #22d3ee !important;
                    border-color: rgba(34, 211, 238, 0.3) !important;
                }

                /* Rows Per Page Dropdown Fix */
                .p-dropdown {
                    background: rgba(255, 255, 255, 0.05) !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    border-radius: 10px !important;
                    padding: 2px 5px !important;
                }
                .p-dropdown-label { color: white !important; font-size: 13px !important; }
                .p-dropdown-trigger { color: #94a3b8 !important; }
            `}</style>
        </div>
    );
};

export default ReusableDataTable;