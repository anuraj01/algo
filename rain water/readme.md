Pattern
--------
    - while (left < right)
  
Area type
----------
 - The area is always limited by the shorter of the two lines
 - Therefore, moving the taller line cannot improve the area, because the shorter line still limits it.
 - First find the current area
       - Width is distance between left and right
       - Height is minHeight of left and right
       - Update the maxArea 
 - Less than 2 line → cannot calculate area

Trapping type
--------------
  - Always process the side with the smaller height
  - If current bar is taller than anything we’ve seen → update leftMax
  - Otherwise → water gets trapped above it,
  - Then move the pointer inward.
  - Less than 3 bars cannot trap water
