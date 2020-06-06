function resizeGridItem(item){
  grid = document.getElementsByClassName("main")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  console.log(rowHeight)
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  console.log(rowGap)
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height)/(rowHeight+rowGap));
  console.log(rowSpan)
  item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  console.log('insdie resizeAllGridItems')
  allItems = document.getElementsByClassName("bug-card");
  console.log(allItems)
  for(x=0;x<allItems.length;x++){
     resizeGridItem(allItems[x]);
  }
}

resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);