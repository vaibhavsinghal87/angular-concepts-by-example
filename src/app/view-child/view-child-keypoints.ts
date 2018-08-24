export const keypoints: Array<String> = [
  `The @ViewChild is a decorator function that takes the name of a component class as its input and 
  finds its selector in the template of the containing component to bind to.`,
  `If we want to make sure that the references injected by @ViewChild are present, we should always
   write our initialization code using ngAfterViewInit(). Depending on the situation, the template
   references might already be present on ngOnInit(), but we shouldn't count on it`,
   `The @ViewChild decorator cannot see across component boundaries! This means that queries done 
   using @ViewChild can only see elements inside the template of the component itself.`,
   ``,
]