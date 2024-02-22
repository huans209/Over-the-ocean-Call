$('.ifitem1').hover(function(){
    $('.ifitem7').toggleClass('ofitem7')
    $('.ifitem2').toggleClass('ofitem2')
    $('.ifitem3').toggleClass('ofitem3')
    $('.ifitem4').toggleClass('ofitem4')
    $('.ifitem5').toggleClass('ofitem5')
    $('.ifitem6').toggleClass('ofitem6')
    $('.cyitem1').toggleClass('ycitem1')
    $('.cyitem2').toggleClass('ycitem2')
    $('.cyitem3').toggleClass('ycitem3')
    $('.cyitem4').toggleClass('ycitem4')
    $('.cyitem5').toggleClass('ycitem5')
    $('.cyitem6').toggleClass('ycitem6')
    $('.cyitem7').toggleClass('ycitem7')
});
$('.ifitem2').hover(function(){
    $('.ifitem1').toggleClass('ofitem1')
    $('.ifitem7').toggleClass('ofitem7')
    $('.ifitem3').toggleClass('ofitem3')
    $('.ifitem4').toggleClass('ofitem4')
    $('.ifitem5').toggleClass('ofitem5')
    $('.ifitem6').toggleClass('ofitem6')
    $('.cyitem1').toggleClass('ycitem1')
    $('.cyitem2').toggleClass('ycitem2')
    $('.cyitem3').toggleClass('ycitem3')
    $('.cyitem4').toggleClass('ycitem4')
    $('.cyitem5').toggleClass('ycitem5')
    $('.cyitem6').toggleClass('ycitem6')
    $('.cyitem7').toggleClass('ycitem7')
});
$('.ifitem3').hover(function(){
    $('.ifitem1').toggleClass('ofitem1')
    $('.ifitem2').toggleClass('ofitem2')
    $('.ifitem7').toggleClass('ofitem7')
    $('.ifitem4').toggleClass('ofitem4')
    $('.ifitem5').toggleClass('ofitem5')
    $('.ifitem6').toggleClass('ofitem6')
    $('.cyitem1').toggleClass('ycitem1')
    $('.cyitem2').toggleClass('ycitem2')
    $('.cyitem3').toggleClass('ycitem3')
    $('.cyitem4').toggleClass('ycitem4')
    $('.cyitem5').toggleClass('ycitem5')
    $('.cyitem6').toggleClass('ycitem6')
    $('.cyitem7').toggleClass('ycitem7')
});
$('.ifitem4').hover(function(){
    $('.ifitem1').toggleClass('ofitem1')
    $('.ifitem2').toggleClass('ofitem2')
    $('.ifitem3').toggleClass('ofitem3')
    $('.ifitem7').toggleClass('ofitem7')
    $('.ifitem5').toggleClass('ofitem5')
    $('.ifitem6').toggleClass('ofitem6')
    $('.cyitem1').toggleClass('ycitem1')
    $('.cyitem2').toggleClass('ycitem2')
    $('.cyitem3').toggleClass('ycitem3')
    $('.cyitem4').toggleClass('ycitem4')
    $('.cyitem5').toggleClass('ycitem5')
    $('.cyitem6').toggleClass('ycitem6')
    $('.cyitem7').toggleClass('ycitem7')
});
$('.ifitem5').hover(function(){
    $('.ifitem1').toggleClass('ofitem1')
    $('.ifitem2').toggleClass('ofitem2')
    $('.ifitem3').toggleClass('ofitem3')
    $('.ifitem4').toggleClass('ofitem4')
    $('.ifitem7').toggleClass('ofitem7')
    $('.ifitem6').toggleClass('ofitem6')
    $('.cyitem1').toggleClass('ycitem1')
    $('.cyitem2').toggleClass('ycitem2')
    $('.cyitem3').toggleClass('ycitem3')
    $('.cyitem4').toggleClass('ycitem4')
    $('.cyitem5').toggleClass('ycitem5')
    $('.cyitem6').toggleClass('ycitem6')
    $('.cyitem7').toggleClass('ycitem7')
});
$('.ifitem6').hover(function(){
    $('.ifitem1').toggleClass('ofitem1')
    $('.ifitem2').toggleClass('ofitem2')
    $('.ifitem3').toggleClass('ofitem3')
    $('.ifitem4').toggleClass('ofitem4')
    $('.ifitem5').toggleClass('ofitem5')
    $('.ifitem7').toggleClass('ofitem7')
    $('.cyitem1').toggleClass('ycitem1')
    $('.cyitem2').toggleClass('ycitem2')
    $('.cyitem3').toggleClass('ycitem3')
    $('.cyitem4').toggleClass('ycitem4')
    $('.cyitem5').toggleClass('ycitem5')
    $('.cyitem6').toggleClass('ycitem6')
    $('.cyitem7').toggleClass('ycitem7')
});
$('.ifitem7').hover(function(){
    $('.ifitem1').toggleClass('ofitem1')
    $('.ifitem2').toggleClass('ofitem2')
    $('.ifitem3').toggleClass('ofitem3')
    $('.ifitem4').toggleClass('ofitem4')
    $('.ifitem5').toggleClass('ofitem5')
    $('.ifitem6').toggleClass('ofitem6')
    $('.cyitem1').toggleClass('ycitem1')
    $('.cyitem2').toggleClass('ycitem2')
    $('.cyitem3').toggleClass('ycitem3')
    $('.cyitem4').toggleClass('ycitem4')
    $('.cyitem5').toggleClass('ycitem5')
    $('.cyitem6').toggleClass('ycitem6')
    $('.cyitem7').toggleClass('ycitem7')
});

$('.hidebutton').hover(function(){
    $('.cyitem1').toggleClass('yhitem1')
    $('.cyitem2').toggleClass('yhitem2')
    $('.cyitem3').toggleClass('yhitem3')
    $('.cyitem4').toggleClass('yhitem4')
    $('.cyitem5').toggleClass('yhitem5')
    $('.cyitem6').toggleClass('yhitem6')
    $('.cyitem7').toggleClass('yhitem7')
});

// var words = ['Turn out so I have nothin' in the ,corner,', 'I also like css', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'sed do eiusmod tempor incididunt'],
//     part,
//     i = 0,
//     offset = 0,
//     len = words.length,
//     forwards = true,
//     skip_count = 0,
//     skip_delay = 15,
//     speed = 70;
// var wordflick = function () {
//   setInterval(function () {
//     if (forwards) {
//       if (offset >= words[i].length) {
//         ++skip_count;
//         if (skip_count == skip_delay) {
//           forwards = false;
//           skip_count = 0;
//         }
//       }
//     }
//     else {
//       if (offset == 0) {
//         forwards = true;
//         i++;
//         offset = 0;
//         if (i >= len) {
//           i = 0;
//         }
//       }
//     }
//     part = words[i].substr(0, offset);
//     if (skip_count == 0) {
//       if (forwards) {
//         offset++;
//       }
//       else {
//         offset--;
//       }
//     }
//     $('.word').text(part);
//   },speed);
// };

// $(document).ready(function () {
//   wordflick();
// });

// var TxtType = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];

//     if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//     var that = this;
//     var delta = 200 - Math.random() * 100;

//     if (this.isDeleting) { delta /= 2; }

//     if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//     }

//     setTimeout(function() {
//     that.tick();
//     }, delta);
// };

// window.onload = function() {
//     var elements = document.getElementsByClassName('typewrite');
//     for (var i=0; i<elements.length; i++) {
//         var toRotate = elements[i].getAttribute('data-type');
//         var period = elements[i].getAttribute('data-period');
//         if (toRotate) {
//           new TxtType(elements[i], JSON.parse(toRotate), period);
//         }
//     }
//     // INJECT CSS
//     var css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//     document.body.appendChild(css);
// };

// /*
//   This is your site JavaScript code - you can add interactivity!
// */

// // Print a message in the browser's dev tools console each time the page loads
// // Use your menus or right-click / control-click and choose "Inspect" > "Console"
// console.log("Hello 🌎");

// /* 
// Make the "Click me!" button move when the visitor clicks it:
// - First add the button to the page by following the steps in the TODO 🚧
// */
// const btn = document.querySelector("button"); // Get the button from the page
// if (btn) { // Detect clicks on the button
//   btn.onclick = function () {
//     // The 'dipped' class in style.css changes the appearance on click
//     btn.classList.toggle("dipped");
//   };
// }


// // ----- GLITCH STARTER PROJECT HELPER CODE -----

// // Open file when the link in the preview is clicked
// let goto = (file, line) => {
//   window.parent.postMessage(
//     { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
//   );
// };
// // Get the file opening button from its class name
// const filer = document.querySelectorAll(".fileopener");
// filer.forEach((f) => {
//   f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
// });

// new TypeIt("#introcall", { 
//     lifeLike: false, 
//     speed: 0 
// })
// 	.type("*")
// 	.pause(346)
// 	.type("*")
// 	.pause(356)
// 	.type("*")
// 	.pause(361)
// 	.type("*")
// 	.pause(3609)
// 	.break()
// 	.pause(744)
// 	.break()
// 	.pause(2867)
// 	.type("T")
// 	.pause(376)
// 	.type("u")
// 	.pause(188)
// 	.type("r")
// 	.pause(199)
// 	.type("n")
// 	.pause(132)
// 	.type(" ")
// 	.pause(161)
// 	.type("o")
// 	.pause(215)
// 	.type("u")
// 	.pause(172)
// 	.type("t")
// 	.pause(253)
// 	.type(" ")
// 	.pause(292)
// 	.type("s")
// 	.pause(112)
// 	.type("o")
// 	.pause(205)
// 	.type(" ")
// 	.pause(351)
// 	.type("I")
// 	.pause(866)
// 	.type("'")
// 	.pause(174)
// 	.type("v")
// 	.pause(200)
// 	.type("e")
// 	.pause(223)
// 	.type(" ")
// 	.pause(200)
// 	.type("n")
// 	.pause(187)
// 	.type("o")
// 	.pause(128)
// 	.type("t")
// 	.pause(137)
// 	.type("h")
// 	.pause(205)
// 	.type("i")
// 	.pause(187)
// 	.type("n")
// 	.pause(651)
// 	.type("'")
// 	.pause(174)
// 	.type(" ")
// 	.pause(153)
// 	.type("i")
// 	.pause(161)
// 	.type("n")
// 	.pause(103)
// 	.type(" ")
// 	.pause(170)
// 	.type("t")
// 	.pause(141)
// 	.type("h")
// 	.pause(182)
// 	.type("e")
// 	.pause(144)
// 	.type(" ")
// 	.pause(138)
// 	.type("c")
// 	.pause(242)
// 	.type("o")
// 	.pause(238)
// 	.type("r")
// 	.pause(196)
// 	.type("n")
// 	.pause(222)
// 	.type("e")
// 	.pause(222)
// 	.type("r")
// 	.pause(249)
// 	.type(" ")
// 	.pause(712)
// 	.type("(")
// 	.pause(454)
// 	.type("N")
// 	.pause(399)
// 	.type("o")
// 	.pause(701)
// 	.type(")")
// 	.pause(702)
// 	.break()
// 	.pause(756)
// 	.type("P")
// 	.pause(297)
// 	.type("l")
// 	.pause(141)
// 	.type("e")
// 	.pause(205)
// 	.type("a")
// 	.pause(190)
// 	.type("s")
// 	.pause(200)
// 	.type("e")
// 	.pause(399)
// 	.type(",")
// 	.pause(169)
// 	.type(" ")
// 	.pause(181)
// 	.type("j")
// 	.pause(213)
// 	.type("u")
// 	.pause(131)
// 	.type("s")
// 	.pause(261)
// 	.type("t")
// 	.pause(307)
// 	.type("-")
// 	.pause(943)
// 	.type(" ")
// 	.pause(691)
// 	.type("(")
// 	.pause(525)
// 	.type("N")
// 	.pause(272)
// 	.type("o")
// 	.pause(294)
// 	.type(",")
// 	.pause(311)
// 	.type(" ")
// 	.pause(398)
// 	.type("h")
// 	.pause(205)
// 	.type("o")
// 	.pause(209)
// 	.type("l")
// 	.pause(98)
// 	.type("d")
// 	.pause(168)
// 	.type(" ")
// 	.pause(176)
// 	.type("o")
// 	.pause(219)
// 	.type("n")
// 	.pause(299)
// 	.type(",")
// 	.pause(345)
// 	.type(" ")
// 	.pause(768)
// 	.type("I")
// 	.pause(383)
// 	.type("'")
// 	.pause(266)
// 	.type("m")
// 	.pause(876)
// 	.type("-")
// 	.pause(631)
// 	.type(" ")
// 	.pause(650)
// 	.delete(1)
// 	.pause(355)
// 	.type(",")
// 	.pause(388)
// 	.type(" ")
// 	.pause(327)
// 	.type("h")
// 	.pause(108)
// 	.type("o")
// 	.pause(211)
// 	.type("l")
// 	.pause(147)
// 	.type("d")
// 	.pause(224)
// 	.type(" ")
// 	.pause(149)
// 	.type("o")
// 	.pause(207)
// 	.type("n")
// 	.pause(802)
// 	.type(")")
// 	.pause(827)
// 	.break()
// 	.pause(1265)
// 	.type("A")
// 	.pause(339)
// 	.type("l")
// 	.pause(126)
// 	.type("r")
// 	.pause(150)
// 	.type("i")
// 	.pause(107)
// 	.type("g")
// 	.pause(159)
// 	.type("h")
// 	.pause(198)
// 	.type("t")
// 	.pause(242)
// 	.type(",")
// 	.pause(166)
// 	.type(" ")
// 	.pause(562)
// 	.type("y")
// 	.pause(17)
// 	.type("o")
// 	.pause(164)
// 	.type("u")
// 	.pause(107)
// 	.type(" ")
// 	.pause(92)
// 	.type("j")
// 	.pause(176)
// 	.type("u")
// 	.pause(103)
// 	.type("s")
// 	.pause(178)
// 	.type("t")
// 	.pause(123)
// 	.type(" ")
// 	.pause(311)
// 	.type("b")
// 	.pause(134)
// 	.type("a")
// 	.pause(181)
// 	.type("c")
// 	.pause(172)
// 	.type("k")
// 	.pause(142)
// 	.type(" ")
// 	.pause(203)
// 	.type("o")
// 	.pause(137)
// 	.type("f")
// 	.pause(180)
// 	.type("f")
// 	.pause(275)
// 	.type(",")
// 	.pause(168)
// 	.type(" ")
// 	.pause(250)
// 	.type("b")
// 	.pause(88)
// 	.type("a")
// 	.pause(183)
// 	.type("c")
// 	.pause(96)
// 	.type("k")
// 	.pause(115)
// 	.type(" ")
// 	.pause(203)
// 	.type("u")
// 	.pause(150)
// 	.type("p")
// 	.pause(640)
// 	.break()
// 	.pause(1447)
// 	.type("N")
// 	.pause(312)
// 	.type("o")
// 	.pause(155)
// 	.type("w")
// 	.pause(367)
// 	.type(" ")
// 	.pause(306)
// 	.type("w")
// 	.pause(195)
// 	.type("e")
// 	.pause(283)
// 	.type("'")
// 	.pause(127)
// 	.type("r")
// 	.pause(167)
// 	.type("e")
// 	.pause(98)
// 	.type(" ")
// 	.pause(125)
// 	.type("g")
// 	.pause(73)
// 	.type("o")
// 	.pause(180)
// 	.type("n")
// 	.pause(176)
// 	.type("n")
// 	.pause(132)
// 	.type("a")
// 	.pause(121)
// 	.type(" ")
// 	.pause(203)
// 	.type("s")
// 	.pause(385)
// 	.type("t")
// 	.pause(265)
// 	.type("a")
// 	.pause(204)
// 	.type("r")
// 	.pause(440)
// 	.type("t")
// 	.pause(688)
// 	.break()
// 	.pause(1381)
// 	.type("F")
// 	.pause(303)
// 	.type("i")
// 	.pause(134)
// 	.type("v")
// 	.pause(146)
// 	.type("e")
// 	.pause(85)
// 	.type(" ")
// 	.pause(130)
// 	.type("t")
// 	.pause(59)
// 	.type("o")
// 	.pause(135)
// 	.type(" ")
// 	.pause(123)
// 	.type("s")
// 	.pause(172)
// 	.type("e")
// 	.pause(234)
// 	.type("v")
// 	.pause(266)
// 	.type("e")
// 	.pause(224)
// 	.type("n")
// 	.pause(146)
// 	.type(" ")
// 	.pause(159)
// 	.type("d")
// 	.pause(165)
// 	.type("a")
// 	.pause(113)
// 	.type("y")
// 	.pause(131)
// 	.type("s")
// 	.pause(152)
// 	.type(" ")
// 	.pause(1389)
// 	.type("(")
// 	.pause(989)
// 	.type("o")
// 	.pause(312)
// 	.type("k")
// 	.pause(276)
// 	.type("a")
// 	.pause(319)
// 	.type("y")
// 	.pause(568)
// 	.type(")")
// 	.pause(843)
// 	.break()
// 	.pause(961)
// 	.type("A")
// 	.pause(284)
// 	.type("l")
// 	.pause(133)
// 	.type("r")
// 	.pause(131)
// 	.type("i")
// 	.pause(102)
// 	.type("g")
// 	.pause(152)
// 	.type("h")
// 	.pause(105)
// 	.type("t")
// 	.go();