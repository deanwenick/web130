Responsive menu
=======

###### From [tutsplus] (http://webdesign.tutsplus.com/tutorials/big-menus-small-screens-responsive-multi-level-navigation--webdesign-8452)

We left on on Thursday with a menu that looks nice on desktop and mobile browsers. On small screens the menu can be toggled by a menu button. If you open it up in a mobile browser, you'll get a very usable vertical accordion list, if you open it in your desktop browser, you'll get a nice horizontal drop-down list. If you resize your desktop browser down to mobile widths, however, our navigation still only works on hover, and the menu isn't hidden with the toggle feature. For most applications, this is fine. After all, your average web site visitor doesn't grab the edge of their browser and start dragging madly back and forth.

We'll fix this by setting up our script to respond to the `resize event`, and execute our conditional code when the browser is resized below the breakpoint.

