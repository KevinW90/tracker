function resizeGridItem(item){
  grid = document.getElementsByClassName("main")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height)/(rowHeight+rowGap));
  item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  allItems = document.getElementsByClassName("bug-card");
  for(x=0;x<allItems.length;x++){
     resizeGridItem(allItems[x]);
  }
}

resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);