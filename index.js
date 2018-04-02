function produceDrivingRange(range){
  range = parseInt(range)

  return function(start_range, end_range){
      start_range = parseInt(start_range)
  end_range = parseInt(end_range)
    if (Math.abs(start_range-end_range) < 10){
        return `within range by ${Math.abs(range - Math.abs(start_range-end_range))}`
    }else {
        return `${Math.abs(range-Math.abs(start_range-end_range))} blocks out of range`
    }
  }
}