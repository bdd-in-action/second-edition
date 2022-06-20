"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[76],{1076:(B,a,e)=>{e.r(a),e.d(a,{BookingModule:()=>k});var r=e(9808),g=e(5675),c=e(655),o=e(5e3),u=e(2340),l=e(520);let p=(()=>{class n{constructor(t){this.http=t,this.url=`${u.N.API_URL}/api/bookings`}getUserBookings(t){return this.http.get(`${this.url}?email=${t}`)}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(l.eN))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var d=e(629);function m(n,i){if(1&n&&(o.TgZ(0,"div",3)(1,"p"),o._uU(2),o.qZA(),o.TgZ(3,"small"),o._uU(4),o.ALo(5,"date"),o.qZA(),o.TgZ(6,"p"),o._uU(7),o.qZA(),o.TgZ(8,"small"),o._uU(9),o.ALo(10,"date"),o.qZA(),o.TgZ(11,"p"),o._uU(12),o.qZA(),o.TgZ(13,"p"),o._uU(14),o.qZA()()),2&n){const t=i.$implicit;o.xp6(2),o.hij("Order number: ",t.orderNumber,""),o.xp6(2),o.Oqu(o.xi3(5,6,t.departureDate,"yyyy-MM-dd, h:mm a")),o.xp6(3),o.hij("Departure: ",t.departure.name,""),o.xp6(2),o.Oqu(o.xi3(10,9,t.arrivalDate,"yyyy-MM-dd, h:mm a")),o.xp6(3),o.hij("Arrival: ",t.destination.name," "),o.xp6(2),o.hij("Class: ",t.class,"")}}function h(n,i){1&n&&(o.TgZ(0,"h2"),o._uU(1,"No bookings yet"),o.qZA())}const v=[{path:"",component:(()=>{class n{constructor(t,s){this.bookingService=t,this.authService=s,this.bookings=[]}ngOnInit(){return(0,c.mG)(this,void 0,void 0,function*(){const t=this.authService.getLoggedInUser().email;this.bookings=yield this.bookingService.getUserBookings(t).toPromise()})}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(p),o.Y36(d.e))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-booking"]],decls:3,vars:2,consts:[[1,"container"],["class","card",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"card"]],template:function(t,s){1&t&&(o.TgZ(0,"div",0),o.YNc(1,m,15,12,"div",1),o.YNc(2,h,2,0,"h2",2),o.qZA()),2&t&&(o.xp6(1),o.Q6J("ngForOf",s.bookings),o.xp6(1),o.Q6J("ngIf",0===s.bookings.length))},directives:[r.sg,r.O5],pipes:[r.uU],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:10px auto;width:80vw}.card[_ngcontent-%COMP%]{min-width:20%}"]}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[g.Bz.forChild(v)],g.Bz]}),n})(),k=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[r.ez,f]]}),n})()}}]);