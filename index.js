import test from 'tape'
import tapeBrowserColor from 'tap-browser-color'

import level1 from './level1'
import level2 from './level2'
import level3 from './level3'
import level4 from './level4'
import level5 from './level5'
import level6 from './level6'
import level7 from './level7'

// level7()
level6()
// level5()
// level4()
// level3()
// level2()
// level1()

window.test = test
tapeBrowserColor()

console.log('Welcome to Cybertron\n')
