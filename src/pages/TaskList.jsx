import { useCallback, useContext, useMemo, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import TaskRow from '../components/TaskRow'

function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(value)
        }, delay)
    }
}

const TaskList = () => {

    const { tasks } = useContext(GlobalContext)

    const [searchQuery, setSearchQuery] = useState("")
    const debounceSearch = useCallback(debounce(setSearchQuery, 500), []);


    const [sortBy, setSortBy] = useState('createdAt')
    const [sortOrder, setSortOrder] = useState(1)

    const sortIcon = sortOrder === 1 ? "↑" : "↓"

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(prev => prev * -1)
        } else {
            setSortBy(field)
            setSortOrder(1)
        }
    }

    const filteredSortedTask = useMemo(() => {
        return [...tasks]
            .filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a, b) => {
                let comparison;
                if (sortBy === 'title') {
                    comparison = a.title.localeCompare(b.title);
                } else if (sortBy === 'status') {
                    const statusOption = ["To do", "Doing", "Done"];
                    comparison = statusOption.indexOf(a.status) - statusOption.indexOf(b.status);
                } else if (sortBy === 'createdAt') {
                    const dateA = new Date(a.createdAt).getTime();
                    const dateB = new Date(b.createdAt).getTime();
                    comparison = dateA - dateB
                }

                return comparison * sortOrder
            })
    }, [tasks, sortBy, sortOrder, searchQuery])

    return (
        <div className="container">
            <div className="row d-flex">
                <div className="col-12">
                    <h1>Lista Tasks</h1>
                    <input
                        className='form-control my-3'
                        type="text" placeholder='Cerca...'
                        onChange={e => debounceSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className="col-12">
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => handleSort('title')}>Nome {sortBy === 'title' && sortIcon}</th>
                            <th onClick={() => handleSort('status')}>Stato {sortBy === 'status' && sortIcon}</th>
                            <th onClick={() => handleSort('createdAt')}>Data di creazione {sortBy === 'createdAt' && sortIcon}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSortedTask.map(task => (
                            <TaskRow key={task.id} task={task} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TaskList
