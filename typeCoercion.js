/*
# what is type coercion?
--- Convert one type to another type

# Type of Coercion:
--- Explicit and Implicit

# Three Type of Coercion: 1.String  2.Boolean & 3. Number

***NOTE: Primitive and Object Conversions are Different.
*/
/*
('hello'+12) --- hello12 === implicit return
*** Oparator--- left to right
(3+5+'hello'+12)---8hello12

***symbol-- only convert String & always return explict do not implict.


*/

/////// String Conversion ///////
let n = String(1000)
console.log(typeof n) // string
console.log(n) // '1000'

let a = String(true)
console.log(typeof a) // string
console.log(a) // true

let b = String(function(){})
console.log(typeof b) // string
console.log(b) // function(){}

let c = String({})
console.log(typeof c) // string
console.log(c) // [object Object]

String(123) // '123'
String(-123) // '-123'
String(null) // 'null,
String(true) // 'true'
String(false) // 'false'

/////// Boolean Conversion //////
Boolean(2) // true --- explicit
if(2){} // true --- implicit
if(''){} // false --- implicit
!2 // false
!!2 // true

Boolean('') // false
Boolean() // false
Boolean(0) // false
Boolean(-0) // false
Boolean(NaN) // false
Boolean(undefined) // false
Boolean(false) // false

Boolean([]) // true
Boolean({}) // true
Boolean(()=>{}) // true

///// Numetic Conversion /////
// >, <, >=, <= instant convert Number
// ! ~ ^ &  convert Number
// + - * / % convert Number 
/// ### if binay+ then string not covert Number: 'abc'+100 // abc100
///  unary+ convert Number: +'abc' // NaN
let d = +'abc'
console.log(typeof d) // number

// = != losly equal sing --- convert Number but if both oparent is Srting then not convert
'123'=='123' // true
123 == '123' // true
123 != '323' // true
4>'5' // false
6/nul // infinity -- null convert Number
true | 0 // 1
false | 0 // 0
Number(null) // 0
Number(undefined) // NaN
Number(true) // 1
Number(false) // 0


null == null // true
null == 'null' // false
null == undefinde // true
null == true // false
null == false // false
null == 434 // false
null == 'str' // false

//*** NaN kokhono karo soman na */
NaN == NaN // false
NaN == 'NaN' // false
NaN == 34 //everything is false

// Ex: 1
12/'2' 
6

// Ex: 2
true + false 
1 + 0 
1

// Ex: 3
"number" + 15 + 3
"number" + "15" + 3
"number15" + 3
"number15" + "3"
"number153"

// Ex: 4
15 + 5 + 'number'
20 + 'number'
'20' + 'number'
'20number'

// Ex: 5
[1] > null
'1' > null
1 > null
true

// Ex: 6
'foo'+ +'bar'
'foo'+(+'bar')
'foo'+NaN
'foo'+'NaN'
'fooNaN'

// Ex: 7
'true' == true
NaN == 1
false

// Ex: 8
null == ''
false

// Ex: 9
!!'false' == !!'true'
!!true == !!true
!false == !false
true == true
1 == 1
true

// Ex: 10
['x'] == 'x'
'x' == 'x'
true

// Ex: 11
[] + null + 1
'' + null + 1
'null' + '1'
'null1'

// Ex: 12
0 || '0' && {}
(0 || '0') && {}
        (false || true) && {} // internally convert to string but return accuall value
'1' &&{}
        true && true // internally convert to string but return accuall value
{}

// Ex: 13
{ } + [] + {} + [1]
    + [] + {} + [1]
       0 + {} + [1]
       '0[object object]' + [1]
       '0[object object]' + '1'
       '0[object object]1'

// Ex: 14
! + [] + [] + ![]
(! + []) + [] + (![])
(!0) + [] + false
true + [] + false
'true' + [] + 'false'
'truefalse'

// Ex: 15
[] + [] + 'foo'.split('')
[] + [] + ['f','o','o']
'' + '' + 'f,o,o'
'f,o,o'

// Ex: 16
('b'+'a'+ +'a'+'a').toLowerCase()
('b'+'a'+ (+'a')+'a').toLowerCase()
('b'+'a'+ NaN +'a').toLowerCase()
('baNaNa').toLowerCase()
'banana'

