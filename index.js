function produceDrivingRange(range){
  return function(start_range, end_range){
    if (Math.abs(start_range-end_range) < 10){
        return `within range by ${Math.abs(start_range-end_range)-range}`
    }else if (Math.abs(start_range-end_range) < 10){
        return `${Math.abs(start_range-end_range)-range} blocks out of range.`
    }
  }
}