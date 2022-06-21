import React , {useState , useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import SearchBar from "material-ui-search-bar";
import { useSelector} from 'react-redux';

const columns = [
  { field: 'orderID', headerName: 'Order ID', width: 200 },
  {
    field: 'orderStatus',
    headerName: 'Status',
    width: 150,
  
  },
  {
    field: 'customerName',    
    headerName: 'Company Name',
    width: 200,
  },
  {
    field: 'customerName',
    headerName: 'Customer Name',
    type: 'string',
    width: 200,
  },
  {
    field: 'purDate',
    headerName: 'Date',
    // sortable: false,
    width: 200,
    // valueGetter: (params) =>
    //   `${params.getValue(params.id, 'firstName') || ''} ${
    //     params.getValue(params.id, 'lastName') || ''
    //   }`,
  },
  {
    field: 'fulfillDate',
    headerName: 'Fulfill Date',
    type: 'string',
    width: 200,
  },
  {
    field: 'invoiceStatus',
    headerName: 'Invoice Status',
    type: 'string',
    width: 200,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 200,
  },
  {
    field: 'currency',
    headerName: 'Currency ',
    width: 200,
  },
];

export default function DataTable() {

  const tableData = useSelector((state)=>state.dataTableStore.data)
  const [rows, setRows] = useState(tableData);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    
    const filteredRows = tableData.filter((row) => {

      return (row.orderID.toString().includes(searchedVal.toString()) || row.customerName?.toLowerCase().includes(searchedVal.toLowerCase()))
       
    });

    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

useEffect(()=>{

},[tableData])
  return (
    <div>
       <SearchBar
          placeholder={`Search by Order Id , Customer,Buyer..`}
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
   
    <div style={{ display:'flex',textAlign:'center',height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
       
      />
    </div>
    </div>
  );
}