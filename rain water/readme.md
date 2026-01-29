Pattern
--------
 - Always process the side with the smaller height
     - while (left < right)
  
Area type
----------
 - The area is always limited by the shorter of the two lines
 - Therefore, moving the taller line cannot improve the area, because the shorter line still limits it.
 - Less than 2 line → cannot calculate area

Trapping type
--------------
  - If current bar is taller than anything we’ve seen → update leftMax
  - Otherwise → water gets trapped above it,
  - Then move the pointer inward.
  - Less than 3 bars cannot trap water
