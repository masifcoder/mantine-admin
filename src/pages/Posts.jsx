import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { ArrowDownWideNarrow, FilePenLine, Trash, TableOfContents } from 'lucide-react';
import { Paper, Menu, rem } from '@mantine/core';
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
          <>
            <Menu shadow="md" width={100}>
              <Menu.Target>
                <TableOfContents style={{cursor: 'pointer'}}>Toggle</TableOfContents>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Actions</Menu.Label>
                <Menu.Item leftSection={<FilePenLine style={{ width: rem(14), height: rem(14) }} />}>
                  <Link to={`/edit/${row.id}`}>Edit</Link>
                </Menu.Item>
                <Menu.Item leftSection={<Trash style={{ width: rem(14), height: rem(14) }} />}>
                  <Link to={`/delete/${row.id}`}>Delete</Link>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </>
        )
      }
    }
  ];

  useEffect( () => {
    setLoading(true);
    setTimeout( () => setLoading(false), 3000)
  }, []);

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
          sortIcon={<ArrowDownWideNarrow />}
          pagination= {true}
          paginationPerPage={3}
          progressPending={loading}
        />
      </Paper>

    </div>
  )
}

export default Posts