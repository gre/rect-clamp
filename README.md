rect-clamp
==========

Constraint a Rectangle into another by preserving the ratio.

```javascript
var rect = rectClamp([-100,-100,200,200], [0,0,800,600]);
// rect == [0, 0, 200, 200]
var rect2 = rectClamp([-100,-100,2000,2000], [0,0,800,600]);
// rect2 == [ 0, 0, 600, 600 ]
```
