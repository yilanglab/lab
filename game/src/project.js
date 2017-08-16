require=function t(e,n,i){function o(c,d){if(!n[c]){if(!e[c]){var u="function"==typeof require&&require;if(!d&&u)return u(c,!0);if(s)return s(c,!0);var r=new Error("Cannot find module '"+c+"'");throw r.code="MODULE_NOT_FOUND",r}var a=n[c]={exports:{}};e[c][0].call(a.exports,function(t){var n=e[c][1][t];return o(n?n:t)},a,a.exports,t,e,n,i)}return n[c].exports}for(var s="function"==typeof require&&require,c=0;c<i.length;c++)o(i[c]);return o}({game:[function(t,e,n){"use strict";cc._RF.push(e,"280c3rsZJJKnZ9RqbALVwtK","game"),cc.Class({"extends":cc.Component,properties:{studentPrefab:{"default":null,type:cc.Prefab},DstudentPrefab:{"default":null,type:cc.Prefab},hatPrefab:{"default":null,type:cc.Prefab},barPrefab:{"default":null,type:cc.Prefab},column:{"default":null,type:cc.Label},row:{"default":null,type:cc.Label},drawingButton:{"default":null,type:cc.Button},buttonAudio:{"default":null,url:cc.AudioClip},hatAudio:{"default":null,url:cc.AudioClip},genSpeed:8},spawnStudents:function(){var t=this;for(t.studentLoc=[],i=0;i<8;i++)for(var e=0;e<8;e++){t.studentLoc[8*i+e]=cc.p(70*i-240,300-70*e),t.studentLoc[8*i+e].k=!1;var n=cc.instantiate(this.studentPrefab);this.node.addChild(n,2,200+10*i+e),n.setPosition(t.studentLoc[8*i+e]);var o=cc.instantiate(this.DstudentPrefab);this.node.addChild(o,1,100+10*i+e),o.setPosition(t.studentLoc[8*i+e])}for(var s=0;s<3;s++){var c=cc.instantiate(this.barPrefab);this.node.addChild(c,2,1002),c.setPosition(-135+140*s,335)}},isStudentsPressed:function(){var t=this,e=[];for(i=0;i<8;i++)for(var n=0;n<8;n++)e[8*i+n]=t.node.getChildByTag(200+10*i+n),e[8*i+n].k=200+10*i+n,e[8*i+n].on(cc.Node.EventType.TOUCH_START,function(e){t.studentPressed=!0,cc.audioEngine.playEffect(t.buttonAudio,!1),console.log("按钮按下")}),e[8*i+n].on(cc.Node.EventType.TOUCH_END,function(e){t.studentPressed=!1,console.log("按钮松开")})},disabledStudent:function(){var t=this,e=[];for(i=0;i<8;i++)for(var n=0;n<8;n++)e[8*i+n]=t.node.getChildByTag(200+10*i+n),e[8*i+n].l=200+10*i+n,e[8*i+n].k=8*i+n,255!=e[8*i+n].opacity?e[8*i+n].on(cc.Node.EventType.TOUCH_START,function(e){t.node.getChildByTag(this.l).opacity=255,t.studentLoc[this.k].k=!1,console.log(this.k+" "+t.studentLoc[this.k].k)}):e[8*i+n].on(cc.Node.EventType.TOUCH_START,function(e){t.node.getChildByTag(this.l).opacity=0,t.studentLoc[this.k].k=!0,console.log(this.k+" "+t.studentLoc[this.k].k)})},genHat:function(){var t=cc.instantiate(this.hatPrefab),e=Math.floor(63.999*cc.random0To1()),n=this.node.getChildByTag(1001),i=Math.ceil(e/8),o=Math.ceil(8-e%8);return n&&n.destroy(),this.studentLoc[e].k?void this.genHat():(this.node.addChild(t,3,1001),t.setPosition(this.studentLoc[e]),this.column.string="Column: "+i,void(this.row.string="Row: "+o))},isPressed:function(){var t=this;t.drawingButton.node.on(cc.Node.EventType.TOUCH_START,function(e){t.button=!0,console.log("按钮按下")}),t.drawingButton.node.on(cc.Node.EventType.TOUCH_END,function(e){t.button=!1,console.log("按钮松开")})},onLoad:function(){this.spawnStudents(),this.isStudentsPressed(),this.disabledStudent(),this.isPressed(),this.button=!1,this.timer=0,this.speed=1},update:function(t){if(this.studentPressed&&this.disabledStudent(),this.button){if(this.timer>this.speed/20)return this.genHat(),cc.audioEngine.playEffect(this.hatAudio,!1),void(this.timer=0);this.timer+=t}}}),cc._RF.pop()},{}],hat:[function(t,e,n){"use strict";cc._RF.push(e,"aae59YUxJlD44sd8tgnBM90","hat"),cc.Class({"extends":cc.Component,properties:{isOneHat:!1,destroySpeed:1},deHat:function(){setTimeout(function(){this.node.destroy()}.bind(this),1e3*this.destroySpeed)},onLoad:function(){}}),cc._RF.pop()},{}],student:[function(t,e,n){"use strict";cc._RF.push(e,"44fbc2k2oZCXK9W8tBIEMor","student"),cc.Class({"extends":cc.Component,properties:{isDisabled:!1},onLoad:function(){},update:function(t){}}),cc._RF.pop()},{}]},{},["game","hat","student"]);