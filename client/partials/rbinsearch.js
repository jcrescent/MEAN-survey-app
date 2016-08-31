function rBinarySearch(arr, num){
	var mid = arr[arr.length / 2];
	if(mid == num){
		return true
	}
	if(num < mid && arr.length > 1){
		return rBinarySearch(arr.slice(0, mid), num)
	}
	if(num > mid && arr.length > 1){
		return rBinarySearch(arr.slice(mid), num)
	}
	return false
}

rBinarySearch([1,2,3,4,5,6], 5)