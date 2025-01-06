window.__require=function t(e,n,o){function i(c,a){if(!n[c]){if(!e[c]){var s=c.split("/");if(s=s[s.length-1],!e[s]){var l="function"==typeof __require&&__require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+c+"'")}c=s}var p=n[c]={exports:{}};e[c][0].call(p.exports,function(t){return i(e[c][1][t]||t)},p,p.exports,t,e,n,o)}return n[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<o.length;c++)i(o[c]);return i}({CenterLayout:[function(t,e,n){"use strict";cc._RF.push(e,"8f898cuIplDpruAWxGuGcxr","CenterLayout");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c,a=cc._decorator,s=a.ccclass,l=a.inspector,p=a.property,u=a.disallowMultiple,h=a.menu;(function(t){t[t.LEFT_TO_RIGHT=0]="LEFT_TO_RIGHT",t[t.RIGHT_TO_LEFT=1]="RIGHT_TO_LEFT",t[t.CENTER_TO_SIDE=2]="CENTER_TO_SIDE"})(c||(c={}));var d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.centerHorizontalDirection=c.CENTER_TO_SIDE,e}return i(e,t),e.prototype._doLayoutHorizontally=function(t,e,n,o){var i=this.node.getAnchorPoint(),r=this.node.children,a=1,s=this.paddingLeft,l=-i.x*t;this.centerHorizontalDirection===c.RIGHT_TO_LEFT&&(a=-1,l=(1-i.x)*t,s=this.paddingRight);for(var p=l+a*s-a*this.spacingX,u=0,h=0,d=0,f=0,_=0,m=0,y=0,v=0;v<r.length;++v)(C=r[v]).activeInHierarchy&&y++;var S=this.cellSize.width;for(this.type!==cc.Layout.Type.GRID&&this.resizeMode===cc.Layout.ResizeMode.CHILDREN&&(S=(t-(this.paddingLeft+this.paddingRight)-(y-1)*this.spacingX)/y),v=0;v<r.length;++v){var C=r[v],E=this._getUsedScaleValue(C.scaleX),g=this._getUsedScaleValue(C.scaleY);if(C.activeInHierarchy){this.resizeMode===cc.Layout.ResizeMode.CHILDREN&&(C.width=S/E,this.type===cc.Layout.Type.GRID&&(C.height=this.cellSize.height/g));var N=C.anchorX,b=C.width*E,R=C.height*g;d>h&&(h=d),R>=h&&(d=h,h=R,m=C.getAnchorPoint().y),this.centerHorizontalDirection===c.RIGHT_TO_LEFT&&(N=1-C.anchorX),p=p+a*N*b+a*this.spacingX;var w=a*(1-N)*b;if(e){var G=p+w+a*(a>0?this.paddingRight:this.paddingLeft),P=this.centerHorizontalDirection!==c.RIGHT_TO_LEFT&&G>(1-i.x)*t,T=this.centerHorizontalDirection===c.RIGHT_TO_LEFT&&G<-i.x*t;(P||T)&&(R>=h?(0===d&&(d=h),u+=d,d=h):(u+=h,d=R,h=0),p=l+a*(s+N*b),f++)}var B=n(C,u,f);t>=b+this.paddingLeft+this.paddingRight&&o&&C.setPosition(cc.v2(p,B));var O,I=1,A=0===h?R:h;this.verticalDirection===cc.Layout.VerticalDirection.TOP_TO_BOTTOM?(_=_||this.node.height,(O=B+(I=-1)*(A*m+this.paddingBottom))<_&&(_=O)):(_=_||-this.node.height,(O=B+I*(A*m+this.paddingTop))>_&&(_=O)),p+=w}}if(r.length>0&&this.centerHorizontalDirection==c.CENTER_TO_SIDE){var L=(.5-i.x)*t,M=0,k=-1,j=Number.MIN_SAFE_INTEGER;a=-1;for(var D=r.length-1;D>=0;D--){var z=r[D];E=this._getUsedScaleValue(z.scaleX),N=z.anchorX,b=z.width*E,Math.abs(z.y-j)>1&&(j=z.y,M=z.x+(1-N)*b+this.paddingRight,k=L+.5*(M=t*i.x+M)+a*s-a*this.spacingX),z.activeInHierarchy&&(k=k+a*N*b+a*this.spacingX,z.x=k,k+=w=a*(1-N)*b)}}return _},e.prototype._getUsedScaleValue=function(t){return this.affectedByScale?Math.abs(t):1},r([p({type:cc.Enum(c)})],e.prototype,"centerHorizontalDirection",void 0),r([s,u(),h("\u81ea\u5b9a\u4e49\u7ec4\u4ef6/CenterLayout"),l("packages://custom_inspector/centerlayout.js")],e)}(cc.Layout);n.default=d,cc._RF.pop()},{}],CongratulationView:[function(t,e,n){"use strict";cc._RF.push(e,"315c7S0ZxdCC6rb4bdurlVS","CongratulationView");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=t("./GameEvent"),a=cc._decorator,s=a.ccclass,l=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.frame=[],e.namePrefab=null,e.winMoneyLabel=null,e._curNameNodeList=[],e._winMoneyList=["66,000","50,000","30,000","20,000","15,000","10,000","$$$$$"],e._canClickExit=!1,e}return i(e,t),e.prototype.onLoad=function(){cc.director.on(c.GameEvent.GameController.ShowCongratulationViewPage,this._onShowCongratulationViewPage,this),this.node.active=!1},e.prototype._onShowCongratulationViewPage=function(t,e){var n=this;this.node.active=!0,this._curNameNodeList.forEach(function(t){t.destroy()}),this._curNameNodeList=[];var o=null;e.length>4?(this.frame[0].active=!1,this.frame[1].active=!0,o=this.frame[1]):(this.frame[0].active=!0,this.frame[1].active=!1,o=this.frame[0]),e.forEach(function(t){var e=cc.instantiate(n.namePrefab);e.parent=o,e.getComponent(cc.Label).string=t,n._curNameNodeList.push(e)}),this.winMoneyLabel.string=this._winMoneyList[t],cc.tween(this.node).to(.5,{opacity:255}).call(function(){n._canClickExit=!0}).start()},e.prototype.closeClick=function(){var t=this;this._canClickExit&&(this._canClickExit=!1,cc.director.emit(c.GameEvent.CongratulationView.Notify.CloseView),cc.tween(this.node).to(.5,{opacity:0}).call(function(){t.node.active=!1}).start())},r([l([cc.Node])],e.prototype,"frame",void 0),r([l(cc.Prefab)],e.prototype,"namePrefab",void 0),r([l(cc.Label)],e.prototype,"winMoneyLabel",void 0),r([s],e)}(cc.Component);n.default=p,cc._RF.pop()},{"./GameEvent":"GameEvent"}],GameController:[function(t,e,n){"use strict";cc._RF.push(e,"893df5TNyBKjZnv1GGZSX9c","GameController");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=t("./GameEvent"),a=cc._decorator,s=a.ccclass,l=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.gameAudioClip=[],e._prizeNumArr=[1,1,2,3,5,8,1],e._winInfo=[],e._soundList=new Map,e._clipMap=new Map,e._sameLoopSoundPlaying=[],e._curIndex=-1,e}return i(e,t),e.prototype.onLoad=function(){cc.director.on(c.GameEvent.PrizeBtn.Notify.Click,this._onSelectPrize,this),cc.director.on(c.GameEvent.MainSceneView.Notify.SpinBtnClick,this._onSpinBtnClick,this),cc.director.on(c.GameEvent.MainSceneView.Notify.RespinBtnClick,this._onRespinBtnClick,this),cc.director.on(c.GameEvent.MainSceneView.Notify.TicketBtnClick,this._onTicketBtnClick,this),cc.director.on(c.GameEvent.Reel.Notify.Stop,this._onStop,this),cc.director.on(c.GameEvent.Reel.Notify.WinnerInfo,this._onWinnerInfo,this),cc.director.on(c.GameEvent.CongratulationView.Notify.CloseView,this._onCongratulationViewClose,this),cc.director.on(c.GameEvent.SoundController.PlaySound,this._playSound,this),cc.director.on(c.GameEvent.SoundController.StopSound,this._stopSound,this),this._onInit(),cc.director.emit(c.GameEvent.SoundController.PlaySound,{soundName:c.SoundName.SND_BGM,isMusic:!0,isLoop:!0})},e.prototype._onInit=function(){var t=this;this._prizeNumArr.forEach(function(e,n){t._winInfo[n]=[]}),this.gameAudioClip.forEach(function(e){t._soundList.set(e.name,e)})},e.prototype._onSelectPrize=function(t){cc.director.emit(c.GameEvent.GameController.SelectPrize,t),this._curIndex=t,cc.director.emit(c.GameEvent.SoundController.PlaySound,{soundName:c.SoundName.SND_PRIZE_BTN})},e.prototype._onSpinBtnClick=function(){this._prizeNumArr[this._curIndex]--,cc.director.emit(c.GameEvent.GameController.StartSpin,this._curIndex,this._prizeNumArr[this._curIndex]),cc.director.emit(c.GameEvent.SoundController.PlaySound,{soundName:c.SoundName.SND_SPIN_BTN}),cc.director.emit(c.GameEvent.SoundController.PlaySound,{soundName:c.SoundName.SND_REEL,isLoop:!0})},e.prototype._onRespinBtnClick=function(){this._winInfo[this._curIndex].splice(-1),cc.director.emit(c.GameEvent.GameController.StartRespin),cc.director.emit(c.GameEvent.SoundController.PlaySound,{soundName:c.SoundName.SND_RESPIN_BTN})},e.prototype._onStop=function(){var t=!(this._prizeNumArr[this._curIndex]>0);cc.director.emit(c.GameEvent.GameController.ReelStop,t),cc.director.emit(c.GameEvent.SoundController.StopSound,{soundName:c.SoundName.SND_REEL}),cc.director.emit(c.GameEvent.SoundController.PlaySound,{soundName:c.SoundName.SND_REEL_STOP})},e.prototype._onWinnerInfo=function(t){this._winInfo[this._curIndex].push(t)},e.prototype._onTicketBtnClick=function(){cc.director.emit(c.GameEvent.GameController.ShowCongratulationViewPage,this._curIndex,this._winInfo[this._curIndex]),cc.director.emit(c.GameEvent.SoundController.PlaySound,{soundName:c.SoundName.SND_SUMMARY_SHOW})},e.prototype._onCongratulationViewClose=function(){cc.director.emit(c.GameEvent.SoundController.PlaySound,{soundName:c.SoundName.SND_SUMMARY_HIDE}),this._prizeNumArr.every(function(t){return 0==t})&&cc.director.emit(c.GameEvent.GameController.AllFinish)},e.prototype._playSound=function(t){var e,n=t,o=this._soundList.get(n.soundName);if(o){if(n.isMusic)cc.audioEngine.stopMusic(),e=cc.audioEngine.playMusic(o,!0);else{if(n.isLoop&&cc.audioEngine.getState(this._clipMap.get(n.soundName))==cc.audioEngine.AudioState.PLAYING)return void this._sameLoopSoundPlaying.push(this._clipMap.get(n.soundName));e=cc.audioEngine.play(o,n.isLoop,1)}this._clipMap.set(n.soundName,e)}},e.prototype._stopSound=function(t){var e=t,n=this._clipMap.get(e.soundName),o=this._sameLoopSoundPlaying.indexOf(this._clipMap.get(e.soundName));o>=0?this._sameLoopSoundPlaying.splice(o,1):n>=0&&(e.isMusic?cc.audioEngine.stopMusic():cc.audioEngine.stop(n))},r([l([cc.AudioClip])],e.prototype,"gameAudioClip",void 0),r([s],e)}(cc.Component);n.default=p,cc._RF.pop()},{"./GameEvent":"GameEvent"}],GameEvent:[function(t,e,n){"use strict";cc._RF.push(e,"d24058DAKlDKpfBO5hH9dsd","GameEvent"),Object.defineProperty(n,"__esModule",{value:!0}),n.SoundName=n.CoinAnim=n.GameEvent=void 0,n.GameEvent={MainSceneView:{Notify:{SpinBtnClick:"GameEvent.MainSceneView.Notify.SpinBtnClick",RespinBtnClick:"GameEvent.MainSceneView.Notify.RespinBtnClick",TicketBtnClick:"GameEvent.MainSceneView.Notify.TicketBtnClick"}},Reel:{Notify:{Stop:"GameEvent.Reel.Notify.Stop",WinnerInfo:"GameEvent.Reel.Notify.WinnerInfo"}},PrizeBtn:{Notify:{Click:"GameEvent.PrizeBtn.Notify.Click"}},CongratulationView:{Notify:{CloseView:"GameEvent.CongratulationView.Notify.CloseView"}},GameController:{SelectPrize:"GameEvent.GameController.SelectPrize",StartSpin:"GameEvent.GameController.StartSpin",StartRespin:"GameEvent.GameController.StartRespin",ReelStop:"GameEvent.GameController.ReelStop",ShowCongratulationViewPage:"GameEvent.GameController.ShowCongratulationViewPage",AllFinish:"GameEvent.GameController.AllFinish"},SoundController:{PlaySound:"GameEvent.SoundController.PlaySound",StopSound:"GameEvent.SoundController.StopSound"}},function(t){t.CoinStart="CoinStart",t.CoinLoop="CoinLoop",t.CoinEnd="CoinEnd"}(n.CoinAnim||(n.CoinAnim={})),function(t){t.SND_BGM="SndBgm2FreeSpin1",t.SND_SPIN_BTN="SndSpin1Button",t.SND_REEL="SndSpin3Reel",t.SND_RESPIN_BTN="SndSpin11BuyButton",t.SND_COUNT_LOOP="SndWinCountUpLoop",t.SND_COUNT_END="SndWinCountUpEnd",t.SND_PRIZE_BTN="SndSpin1Button2",t.SND_REEL_STOP="SndCard7FreeSpins",t.SND_TICKET_SHOW="SndCard3PickOK",t.SND_SUMMARY_SHOW="SndAnimation2Transition",t.SND_SUMMARY_HIDE="SndAnimation3Page"}(n.SoundName||(n.SoundName={})),cc._RF.pop()},{}],MainSceneView:[function(t,e,n){"use strict";cc._RF.push(e,"f57a2DKom5M04Lk9LTl3Q7q","MainSceneView");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c,a,s,l=t("./GameEvent"),p=t("./Reel"),u=cc._decorator,h=u.ccclass,d=u.property;(function(t){t.ReelWin="ReelWin",t.ReelNormal="ReelNormal"})(c||(c={})),function(t){t.HeadBoardIdle="HeadBoardIdle",t.HeadBoardWin="HeadBoardWin"}(a||(a={})),function(t){t.TableTicketStart="TableTicketStart",t.TableTicketEnd="TableTicketIdle",t.TableTicketHide="TableTicketHide"}(s||(s={}));var f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defaultSetJson=null,e.realSetJson=null,e.reelCut=[],e.headBoardAnim=null,e.winItems=[],e.reelNode=null,e.spinButton=null,e.respinButton=null,e.spinBarAnim=null,e.winEffect=[],e.titleSprite=[],e.titleNode=null,e.tableNode=null,e._reelView=null,e._reelAnim=null,e._tableAnim=null,e._ticketShow=!1,e._ticketBtn=null,e}return i(e,t),e.prototype.onLoad=function(){this._reelView=this.reelNode.getComponent(p.default),this._reelAnim=this.reelNode.getComponent(cc.Animation),this._tableAnim=this.tableNode.getComponent(cc.Animation),this._ticketBtn=this.tableNode.getComponentInChildren(cc.Button),this.spinButton.node.on("click",this._onSpinClick,this),this.respinButton.node.on("click",this._onReSpinClick,this),cc.director.on(l.GameEvent.GameController.ReelStop,this._onReelStop,this),cc.director.on(l.GameEvent.GameController.SelectPrize,this._onPrizeBtnClick,this),cc.director.on(l.GameEvent.GameController.AllFinish,this._onAllFinish,this),this._reelView.init(this.defaultSetJson.json,this.realSetJson.json),this._onInit()},e.prototype._onInit=function(){this.respinButton.interactable=!1,this.spinButton.interactable=!1,this._ticketBtn.interactable=!1,this.reelCut[0].active=!0},e.prototype._onSpinClick=function(){cc.director.emit(l.GameEvent.MainSceneView.Notify.SpinBtnClick),this.spinButton.interactable=!1,this.respinButton.interactable=!1,this._reelView.doSpin(),this._reelAnim.play(c.ReelNormal),this.spinBarAnim.play(),this.headBoardAnim.play(a.HeadBoardIdle),this.winEffect.forEach(function(t){t.getComponent(cc.Animation).play(l.CoinAnim.CoinEnd)})},e.prototype._onReSpinClick=function(){cc.director.emit(l.GameEvent.MainSceneView.Notify.RespinBtnClick),this.winEffect.forEach(function(t){t.getComponent(cc.Animation).play(l.CoinAnim.CoinEnd)}),this.respinButton.interactable=!1,this._reelView.doSpin(),this._reelAnim.play(c.ReelNormal),this.spinBarAnim.play(),this.headBoardAnim.play(a.HeadBoardIdle),this._ticketShow&&(this._ticketShow=!1,this._ticketBtn.interactable=!1,this._tableAnim.play(s.TableTicketHide))},e.prototype._onReelStop=function(t){var e=this;this.respinButton.interactable=!0,this._reelAnim.play(c.ReelWin),this.headBoardAnim.play(a.HeadBoardWin),this.winEffect.forEach(function(t){0==t.active&&(t.active=!0),t.getComponent(cc.Animation).play(l.CoinAnim.CoinStart).once("finished",function(){t.getComponent(cc.Animation).play(l.CoinAnim.CoinLoop)})}),t?(cc.director.emit(l.GameEvent.SoundController.PlaySound,{soundName:l.SoundName.SND_TICKET_SHOW}),this._tableAnim.play(s.TableTicketStart).once("finished",function(){e._tableAnim.play(s.TableTicketEnd),e._ticketBtn.interactable=!0,e._ticketShow=!0})):this.spinButton.interactable=!0},e.prototype._onPrizeBtnClick=function(t){this.titleNode.getComponent(cc.Sprite).spriteFrame=this.titleSprite[t],this._reelView.resetInfo(),this.spinButton.interactable=!0,this.respinButton.interactable=!0,this.reelCut[0].active=!1,this.winEffect.forEach(function(t){0!=t.active&&t.getComponent(cc.Animation).play(l.CoinAnim.CoinEnd)}),this._ticketShow&&(this._ticketShow=!1,this._ticketBtn.interactable=!1,this._tableAnim.play(s.TableTicketHide))},e.prototype._onAllFinish=function(){this.reelCut[1].active=!0},e.prototype.ticketBtnClick=function(){this.respinButton.interactable=!1,this.spinButton.interactable=!1,this._ticketBtn.interactable=!1,this._ticketShow=!1,this._tableAnim.play(s.TableTicketHide),cc.director.emit(l.GameEvent.MainSceneView.Notify.TicketBtnClick)},r([d(cc.JsonAsset)],e.prototype,"defaultSetJson",void 0),r([d(cc.JsonAsset)],e.prototype,"realSetJson",void 0),r([d([cc.Node])],e.prototype,"reelCut",void 0),r([d(cc.Animation)],e.prototype,"headBoardAnim",void 0),r([d([cc.Node])],e.prototype,"winItems",void 0),r([d(cc.Node)],e.prototype,"reelNode",void 0),r([d(cc.Button)],e.prototype,"spinButton",void 0),r([d(cc.Button)],e.prototype,"respinButton",void 0),r([d(cc.Animation)],e.prototype,"spinBarAnim",void 0),r([d([cc.Node])],e.prototype,"winEffect",void 0),r([d([cc.SpriteFrame])],e.prototype,"titleSprite",void 0),r([d(cc.Node)],e.prototype,"titleNode",void 0),r([d(cc.Node)],e.prototype,"tableNode",void 0),r([h],e)}(cc.Component);n.default=f,cc._RF.pop()},{"./GameEvent":"GameEvent","./Reel":"Reel"}],PrizeBtn:[function(t,e,n){"use strict";cc._RF.push(e,"9e3aeIzH5BBnpRL3TjVAGRi","PrizeBtn");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=cc._decorator,a=c.ccclass,s=c.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.cancelLine=null,e.selectFrame=null,e.curNumber=null,e}return i(e,t),e.prototype.setNumber=function(t){null!=this.curNumber&&(this.curNumber.string=0==t?"":t.toString())},e.prototype.onFinish=function(){this.cancelLine.active=!0},e.prototype.onSelect=function(){this.selectFrame.active=!0},r([s(cc.Node)],e.prototype,"cancelLine",void 0),r([s(cc.Node)],e.prototype,"selectFrame",void 0),r([s(cc.Label)],e.prototype,"curNumber",void 0),r([a],e)}(cc.Component);n.default=l,cc._RF.pop()},{}],PrizeView:[function(t,e,n){"use strict";cc._RF.push(e,"37240/lGlpIppnOw4g/ilCm","PrizeView");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=t("./GameEvent"),a=t("./PrizeBtn"),s=cc._decorator,l=s.ccclass,p=s.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.prizeBtns=[],e._finishPrize=[],e}return i(e,t),e.prototype.onLoad=function(){cc.director.on(c.GameEvent.GameController.StartSpin,this._onStartSpin,this),cc.director.on(c.GameEvent.GameController.StartRespin,this._onRespin,this),cc.director.on(c.GameEvent.GameController.ReelStop,this._onReelStop,this),this._onInit()},e.prototype._onInit=function(){var t=this;this.prizeBtns.forEach(function(e,n){e.node.on("click",function(){t.prizeBtns.forEach(function(t,e){t.node.getComponent(a.default).selectFrame.active=e==n}),cc.director.emit(c.GameEvent.PrizeBtn.Notify.Click,n)},t)})},e.prototype._onStartSpin=function(t,e){this.prizeBtns.forEach(function(t){t.interactable=!1}),0==e&&(this.prizeBtns[t].node.getComponent(a.default).onFinish(),this._finishPrize.push(t)),this.prizeBtns[t].getComponent(a.default).setNumber(e)},e.prototype._onRespin=function(){this.prizeBtns.forEach(function(t){t.interactable=!1})},e.prototype._onReelStop=function(){var t=this;this.prizeBtns.forEach(function(e,n){t._finishPrize.includes(n)||(e.interactable=!0)})},r([p([cc.Button])],e.prototype,"prizeBtns",void 0),r([l],e)}(cc.Component);n.default=u,cc._RF.pop()},{"./GameEvent":"GameEvent","./PrizeBtn":"PrizeBtn"}],Reel:[function(t,e,n){"use strict";cc._RF.push(e,"a6f4ax2UkdI25iCthjZwA/C","Reel");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c,a=t("./GameEvent"),s=t("./SymbolInfo"),l=cc._decorator,p=l.ccclass,u=l.property;(function(t){t[t.Stop=0]="Stop",t[t.rolling=1]="rolling"})(c||(c={}));var h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.items=[],e.anticipationNode=null,e.height=0,e.reelState=c.Stop,e.runTime=0,e.runEndTime=10,e.moveLen=0,e.prevMove=0,e.moveSymbol=0,e._defaultSet=null,e._realSetArr=null,e}return i(e,t),e.prototype._resetItemPos=function(){for(var t=0,e=this.items.length-1;e>=0;e--)this.items[e].y=t,t+=this.height},e.prototype._moving=function(t){for(var e=this._moveDown(t),n=0;n<this.items.length;n++)this.items[n].y-=e;for(n=0;n<this.items.length;n++){var o=this.items[n];if(o.y<-1*this.height){this.moveSymbol+=1;var i=n==this.items.length-1?0:n+1;if(o.y=this.items[i].y+this.height,console.log("moveSymbol",this.moveSymbol),87==this.moveSymbol){var r=Math.floor(Math.random()*this._realSetArr.length);this.items[i].getComponent(s.default).setInfo(this._realSetArr[r].UName,this._realSetArr[r].UDepartment),cc.director.emit(a.GameEvent.Reel.Notify.WinnerInfo,this._realSetArr[r].UName),this._realSetArr.splice(r,1),cc.tween(this.anticipationNode).to(.5,{opacity:0}).start()}else this._setRandomItem(this.items[n].getComponent(s.default))}}},e.prototype._moveDown=function(t){this.runTime+=t;var e=this.runTime/this.runEndTime,n=(e=(e-=1)*e*e+1)*this.moveLen,o=n-this.prevMove;return this.prevMove=n,console.log("runTime",this.runTime),this.runTime>=this.runEndTime&&(this.reelState=c.Stop,cc.director.emit(a.GameEvent.Reel.Notify.Stop)),o},e.prototype._moveDownStart=function(t){this.runTime+=t;var e=this.runTime/this.runEndTime,n=(e=(e-=1)*e*e+1)*this.moveLen,o=n-this.prevMove;return this.prevMove=n,o},e.prototype._moveDownLoop=function(t){this.runTime+=t;var e=this.runTime/this.runEndTime,n=(e=(e-=1)*e*e+1)*this.moveLen,o=n-this.prevMove;return this.prevMove=n,o},e.prototype._moveDownEnd=function(t){this.runTime+=t;var e=this.runTime/this.runEndTime,n=(e=(e-=1)*e*e+1)*this.moveLen,o=n-this.prevMove;return this.prevMove=n,this.runTime>=this.runEndTime&&(this.reelState=c.Stop,cc.director.emit(a.GameEvent.Reel.Notify.Stop)),o},e.prototype._setRandomItem=function(t){var e=Math.floor(Math.random()*this._defaultSet.UNames.length),n=Math.floor(Math.random()*this._defaultSet.UDepartments.length);t.setInfo(this._defaultSet.UNames[e],this._defaultSet.UDepartments[n])},e.prototype.doSpin=function(){this._resetItemPos(),this.moveSymbol=0,this._setRandomItem(this.items[0].getComponent(s.default)),this._setRandomItem(this.items[2].getComponent(s.default)),cc.tween(this.anticipationNode).to(.5,{opacity:255}).start(),this.runTime=0,this.moveLen=88*this.height,this.prevMove=0,this.reelState=c.rolling},e.prototype.start=function(){this.height=415},e.prototype.update=function(t){this.reelState==c.rolling&&this._moving(t)},e.prototype.init=function(t,e){this._defaultSet=t,this._realSetArr=e},e.prototype.resetInfo=function(){this.items.forEach(function(t){t.getComponent(s.default).setInfo("\u60f3\u5f97\u734e\u7684\u4eba","RedCypress")})},r([u([cc.Node])],e.prototype,"items",void 0),r([u(cc.Node)],e.prototype,"anticipationNode",void 0),r([p],e)}(cc.Component);n.default=h,cc._RF.pop()},{"./GameEvent":"GameEvent","./SymbolInfo":"SymbolInfo"}],SymbolInfo:[function(t,e,n){"use strict";cc._RF.push(e,"6dacf7Fl4dK3JmUzlsOqFab","SymbolInfo");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=cc._decorator,a=c.ccclass,s=c.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.nameLabel=null,e.departmentLabel=null,e}return i(e,t),e.prototype.setInfo=function(t,e){this.nameLabel.string=t,this.departmentLabel.string=e},r([s(cc.Label)],e.prototype,"nameLabel",void 0),r([s(cc.Label)],e.prototype,"departmentLabel",void 0),r([a],e)}(cc.Component);n.default=l,cc._RF.pop()},{}]},{},["CenterLayout","CongratulationView","GameController","GameEvent","MainSceneView","PrizeBtn","PrizeView","Reel","SymbolInfo"]);