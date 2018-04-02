function produceDrivingRange(range){
  return function(start_range, end_range){
    if (Math.abs(start_range-end_range) < 10){
        return true
    }else if (Math.abs(start_range-end_range) < 10){
        return false
    }
  }
}