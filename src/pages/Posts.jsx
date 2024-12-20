import { useState } from 'react'
import DataTable from 'react-data-table-component';
import { Paper } from '@mantine/core';
import { Link } from 'react-router-dom';


function Posts() {
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'Name',
      selector: row => row.name,
    },
    {
      name: 'Email',
      selector: row => row.email,
    },
    {
      name: "Actions",
      selector: (row) => {
        return (
          <div>
            <Link to={`/edit/${row.id}`} className='bg-blue-500 py-1 px-4 text-white me-3 inline-block'>Edit</Link>
            <Link to={`/delete/${row.id}`} className='bg-red-500 py-1 px-4 text-white me-3 inline-block'>Delete</Link>
          </div>
        )
      }
    }
  ];

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 4, name: 'Kashif Doe', email: 'kashif@example.com' },
    { id: 5, name: 'sarmad Smith', email: 'sarmad@example.com' },
    { id: 6, name: 'Aisha Johnson', email: 'aisha@example.com' },
  ];


  return (
    <div>
      <Paper shadow="xs" p="xl">
        <DataTable
          columns={columns}
          data={data}
          pagination={true}
          paginationPerPage={2}
        />
      </Paper>
    </div >
  )


}

export default Posts