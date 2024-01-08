 /*05отделение*/
 let dep05 = document.querySelector('.three')
 let oneRec01 = document.querySelector('.department05')

 oneRec01.addEventListener('mouseover', function () {
     dep05.style.background = 'rgb(28, 244, 255)';
     dep05.style.borderColor = 'rgb(28, 244, 255)';



 })
 oneRec01.addEventListener('mouseout', function () {
     dep05.style.background = ' rgb(119, 227, 119)';
     dep05.style.border = 'none';

 })

 /*13 отделение*/

 let dep13 = document.querySelector('.department13')
 let dep13Rec01 = document.querySelector('.two')

 dep13.addEventListener('mouseover', function () {
     dep13Rec01.style.background = 'rgb(28, 244, 255)';
     dep13Rec01.style.boxShadow = '';
     dep05Rec01.style.borderColor = 'rgb(28, 244, 255)';

 })
 dep13.addEventListener('mouseout', function () {
     dep13Rec01.style.background = ' rgb(119, 227, 119)';
     dep13Rec01.style.boxShadow = 'none';
     dep05Rec01.style.border = 'solid';

 })

 /*12 отделение*/



 let dep12 = document.querySelector('.department12')
 let dep12Rec01 = document.querySelector('.two')
 let dep12Rec10 = document.querySelector('.rectangle10')

 dep12.addEventListener('mouseover', function () {
     dep12Rec01.style.background = 'rgb(28, 244, 255)';
     dep12Rec01.style.borderColor = 'rgb(28, 244, 255)';

     dep12Rec10.style.background = 'rgb(28, 244, 255)';
     dep12Rec10.style.borderColor = 'rgb(28, 244, 255)';

 })
 dep12.addEventListener('mouseout', function () {
     dep12Rec01.style.background = ' rgb(119, 227, 119)';
     dep12Rec01.style.border = '';

     dep12Rec10.style.background = ' rgb(119, 227, 119)';
     dep12Rec10.style.border = '';

 })

 /*16 отделение*/

 let dep16 = document.querySelector('.department16');
 let dep16Rec21 = document.querySelector('.rectangle21');

 dep16.addEventListener('mouseover', function () {
     dep16Rec21.style.background = 'rgb(28, 244, 255)';
     dep16Rec21.style.boxShadow = '';
     dep16Rec21.style.borderColor = 'rgb(28, 244, 255)';

 })
 dep16.addEventListener('mouseout', function () {
     dep16Rec21.style.background = ' rgb(119, 227, 119)';
     dep16Rec21.style.boxShadow = 'none';
     dep16Rec21.style.border = 'solid';

 })

 /*22 отделений*/

 let dep22 = document.querySelector('.department22');
 let dep22Rec03 = document.querySelector('.rectangle03');
 let dep22Rec73 = document.querySelector('.rectangle73');
 let dep22Rec74 = document.querySelector('.rectangle74');

 dep22.addEventListener('mouseover', function () {
     dep22Rec03.style.background = 'rgb(28, 244, 255)';
     dep22Rec03.style.borderColor = 'rgb(28, 244, 255)';

     dep22Rec73.style.background = 'rgb(28, 244, 255)';
     dep22Rec73.style.borderColor = 'rgb(28, 244, 255)';

     dep22Rec74.style.background = 'rgb(28, 244, 255)';
     dep22Rec74.style.border = 'dotted';

 })
 dep22.addEventListener('mouseout', function () {
     dep22Rec03.style.background = 'rgb(119, 227, 119)';
     dep22Rec03.style.borderColor = '';

     dep22Rec73.style.background = 'rgb(119, 227, 119)';
     dep22Rec73.style.borderColor = '';

     dep22Rec74.style.background = 'rgb(119, 227, 119)';
     dep22Rec74.style.border = '';

 })

 /*83 отделение*/

 let dep83 = document.querySelector('.department83');
 let dep83Rec11 = document.querySelector('.rectangle11');
 let dep83Rec01 = document.querySelector('.one');


 dep83.addEventListener('mouseover', function () {
     dep83Rec11.style.background = 'rgb(28, 244, 255)';
     dep83Rec11.style.borderColor = 'rgb(28, 244, 255)';

     dep83Rec01.style.background = 'rgb(28, 244, 255)';
     dep83Rec01.style.border = 'none';



 })
 dep83.addEventListener('mouseout', function () {
     dep83Rec11.style.background = 'rgb(119, 227, 119)';
     dep83Rec11.style.border = '';

     dep83Rec01.style.background = 'rgb(119, 227, 119)';
     dep83Rec01.style.border = '';



 })

 /*84 Отделение*/

 let dep84 = document.querySelector('.department84');
 let dep84Rec81 = document.querySelector('.rectangle81');

 dep84.addEventListener('mouseover', function () {
     dep84Rec81.style.background = 'rgb(28, 244, 255)';

     dep84Rec81.style.borderColor = 'rgb(28, 244, 255)';

 })
 dep84.addEventListener('mouseout', function () {
     dep84Rec81.style.background = ' rgb(119, 227, 119)';

     dep84Rec81.style.border = 'solid';

 })

 /*87 отделение*/


 let dep87 = document.querySelector('.department87');
 let dep87Rec81 = document.querySelector('.rectangle81');
 let dep87Rec42 = document.querySelector('.rectangle42');
 let dep87Rec45 = document.querySelector('.rectangle45');
 let dep87Rec10 = document.querySelector('.rectangle12');


 dep87.addEventListener('mouseover', function () {
     dep87Rec42.style.background = 'rgb(28, 244, 255)';
     dep87Rec42.style.borderColor = 'rgb(28, 244, 255)';

     dep87Rec45.style.background = 'rgb(28, 244, 255)';
     dep87Rec45.style.borderColor = 'rgb(28, 244, 255)';

     dep87Rec10.style.borderColor = 'rgb(28, 244, 255)';
     dep87Rec10.style.background = 'rgb(28, 244, 255)';

     dep87Rec81.style.background = 'rgb(28, 244, 255)';
     dep87Rec81.style.borderColor = 'rgb(28, 244, 255)';



 })
 dep87.addEventListener('mouseout', function () {
     dep87Rec10.style.background = 'rgb(119, 227, 119)';
     dep87Rec10.style.borderColor = '';

     dep87Rec81.style.background = 'rgb(119, 227, 119)';
     dep87Rec81.style.borderColor = '';

     dep87Rec42.style.background = 'rgb(119, 227, 119)';
     dep87Rec42.style.borderColor = '';

     dep87Rec45.style.background = 'rgb(119, 227, 119)';
     dep87Rec45.style.border = '';


 })

 /*97 отделение*/

 let dep97 = document.querySelector('.department97');
 let dep97Rec01 = document.querySelector('.one');



 dep97.addEventListener('mouseover', function () {

     dep97Rec01.style.background = 'rgb(28, 244, 255)';
     dep97Rec01.style.border = 'none';



 })
 dep97.addEventListener('mouseout', function () {


     dep97Rec01.style.background = 'rgb(119, 227, 119)';
     dep97Rec01.style.border = '';



 })