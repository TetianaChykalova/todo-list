import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { RootState } from '../redux/store'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as filterVal from '../variables/_variables'
import { useDispatch, useSelector } from 'react-redux'
import { filterTodos } from '../redux/actions'

const FilterSelect = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state: RootState) => state.todos.filter)

  const handleChange = (event: SelectChangeEvent) => {
    const selectedFilter = event.target.value
    selectedFilter && dispatch(filterTodos(selectedFilter))
  }

  return (
    <FormControl
      sx={{ 'm': 1, 'minWidth': 120 }}
      size='small'
    >
      <InputLabel id="demo-select-small-label">Filter</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={filter}
        label="Filter"
        onChange={handleChange}
      >
        <MenuItem value={filterVal.FILTER_ALL}>All</MenuItem>
        <MenuItem value={filterVal.FILTER_COMPLETE}>Complite</MenuItem>
        <MenuItem value={filterVal.FILTER_INCOMPLETE}>Incomplite</MenuItem>
      </Select>
    </FormControl>
  )
}

export default FilterSelect
