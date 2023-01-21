import FilterItem from "./FilterItem"

const teams = [{ value: "marvel", text: "Marvel Team" }]
const types = [
  { value: "janitor", text: "Janitor" },
  { value: "collector", text: "Collector" }
]
function FilterBar() {
  return (
    <div className="flex flex-between">
      <FilterItem field="Team" value="" options={teams} />
      <FilterItem field="Type" value="" options={types} />
      <FilterItem field="Time" value="" />
    </div>
  )
}

export default FilterBar
