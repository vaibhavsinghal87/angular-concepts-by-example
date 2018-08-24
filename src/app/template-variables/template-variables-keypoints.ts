export const keypoints: Array<String> = [
  `If you attempt to interpolate title.value and then manipulate the input field, you will not see the browser update. This is because Angular 2
  no longer supports bidirectional data binding in this way. Angular will decline to update the DOM until it thinks it needs to. This need is determined
  by what behavior in the application might cause the interpolated data to change. A bound
  event, which will propagate upwards through the component tree, may cause a data
  change. Thus, you can create an event binding on an element, and the mere presence of this
  event binding will trigger Angular to update the template.`,
  `It's important to recall that these template variables are only accessible within the template. 
  If you want to pass them back to the controller, you'll have to use it as a handler argument.`
]