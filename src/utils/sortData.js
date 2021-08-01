import { useState, useMemo } from "react";

export const sortData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);
    const sortedList = useMemo(() => {
      let list = [...items];
      if (sortConfig !== null) {
        list.sort((a,b)=>{
            if(a.properties[sortConfig.key] > b.properties[sortConfig.key]){
                return sortConfig.direction === "ascending" ? 1 : -1;
            }
            else if(a.properties[sortConfig.key] < b.properties[sortConfig.key]){
                return sortConfig.direction === "ascending" ? -1 : 1;
            }
            else {
                return 0;
            }
        })}
      return list;
    }, [items, sortConfig]);

 const sortBy = (key) => {
        let direction;
        if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        else{
            direction = "ascending";
        }
        setSortConfig({ key, direction });
    }
    return {sortedList, sortBy, sortConfig };
  }