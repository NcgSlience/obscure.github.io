(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{329:function(t,a,s){"use strict";s.r(a);var _=s(4),v=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"plc原理及其应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plc原理及其应用"}},[t._v("#")]),t._v(" PLC原理及其应用")]),t._v(" "),a("h2",{attrs:{id:"序论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序论"}},[t._v("#")]),t._v(" 序论")]),t._v(" "),a("p",[t._v("PLC(可编程逻辑控制器)    P:programmable,L:logic,C:controller")]),t._v(" "),a("p",[t._v("1969年，美国通用汽车公司生产了第一个PLC")]),t._v(" "),a("p",[t._v("PLC图文符号大全:"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/144748604",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎大佬整理系列"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("老国标为KM，新国标为QA（文章中全部都是新国标）")]),t._v(" "),a("h2",{attrs:{id:"第一章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一章"}},[t._v("#")]),t._v(" 第一章")]),t._v(" "),a("p",[t._v("1.什么是低压电器？（小题）")]),t._v(" "),a("p",[t._v("交流1200V以下，直流1500V以下的电器叫低压电器")]),t._v(" "),a("p",[t._v("采用电磁式原理的低压电器用的是电磁式低压电器")]),t._v(" "),a("p",[t._v("电磁式低压电器的结构：电池机构，触头，灭弧装置")]),t._v(" "),a("p",[t._v("常用的低压电器：接触器和继电器")]),t._v(" "),a("p",[t._v("2.线圈得电，常开触电常闭，常闭触点常开（小题）")]),t._v(" "),a("p",[t._v("线圈得电，常开触电常开，常闭触点常闭")]),t._v(" "),a("h2",{attrs:{id:"_1-1-1接触器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1接触器"}},[t._v("#")]),t._v(" 1.1.1接触器")]),t._v(" "),a("p",[t._v("交流接触器和直流接触器中所说的交流和直流是控制回路中（也就是缠绕在线圈上的线圈中所通过的电流）")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img2.imgtp.com/2024/03/06/nfbwpvBa.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("必考知识点")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img2.imgtp.com/2024/03/06/oG8NmBTf.png",loading:"lazy"}})]),t._v(" "),a("h3",{attrs:{id:"上课时ppt上的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上课时ppt上的问题"}},[t._v("#")]),t._v(" 上课时PPT上的问题")]),t._v(" "),a("p",[t._v("交流接触器通相同电压的直流电会发生什么？")]),t._v(" "),a("p",[t._v("我们知道线圈中的电阻在通交流电的时候，电阻本身除了阻值是有电抗的，电流是这样的表达式：\n"),a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img2.imgtp.com/2024/03/06/t2J31jc0.png",loading:"lazy"}}),t._v("\n而通了直流电的时候，流过的电流就只有电压除以阻值，所以电流会明显变大，根据功率等于电流的平方乘以电阻和时间，\n通电一段事件后，会产生热量，烧坏电阻。")]),t._v(" "),a("p",[t._v("直流接触器通相同电压的交流电会发生什么？")]),t._v(" "),a("p",[t._v("线圈通相同电压的交流电后，电阻会有感抗，会导致电流减小，接触器没有足够的电流启动。")]),t._v(" "),a("h2",{attrs:{id:"_1-1-2继电器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2继电器"}},[t._v("#")]),t._v(" 1.1.2继电器")]),t._v(" "),a("p",[t._v("保护特性曲线一定要在过载特性曲线的下面，如果超过，器件可能损坏。\n"),a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img2.imgtp.com/2024/03/06/I0zjh14Y.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"_1-1-3热继电器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3热继电器"}},[t._v("#")]),t._v(" 1.1.3热继电器")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img2.imgtp.com/2024/03/06/pbaM0Kua.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("热继电器的作用：过流保护。")]),t._v(" "),a("p",[t._v("温度继电器：过温或者过低温保护。")]),t._v(" "),a("h2",{attrs:{id:"_1-1-4开关电器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4开关电器"}},[t._v("#")]),t._v(" 1.1.4开关电器")]),t._v(" "),a("p",[t._v("固态继电器采用半导体器件组装而成的一种无触点继电器")]),t._v(" "),a("p",[t._v("低压断路器：俗称空气开关，对电路或电气设备发生严重的短路、严重过载及欠电压等进行保护。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img2.imgtp.com/2024/03/06/E6nttOK8.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("上图中虚线的作用：表示这个图中的所有触头同时闭合，同时断开。")]),t._v(" "),a("h2",{attrs:{id:"_1-1-5-熔断器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-5-熔断器"}},[t._v("#")]),t._v(" 1.1.5 熔断器")]),t._v(" "),a("p",[t._v("熔断器的主要由熔断管（或盖或座），熔体及导电部分原件组成，其中熔体为主要组成部分，即是感测元件又是执行元件。")]),t._v(" "),a("p",[t._v("工作原理：基于电流热效应原理以及发热元件热熔断原理设计。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img2.imgtp.com/2024/03/06/C61m8D72.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("熔断器的主要作用：短路保护")]),t._v(" "),a("p",[t._v("注：考试时没有标注的按钮都是复位按钮。")]),t._v(" "),a("h2",{attrs:{id:"敬请期待"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#敬请期待"}},[t._v("#")]),t._v(" 敬请期待！")])])}),[],!1,null,null,null);a.default=v.exports}}]);