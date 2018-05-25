// Compiled by ClojureScript 1.10.238 {}
goog.provide('workout_tracker.utils.dom');
goog.require('cljs.core');
workout_tracker.utils.dom.by_selector = (function workout_tracker$utils$dom$by_selector(selector){

return document.querySelector(selector);
});
workout_tracker.utils.dom.by_selector_all = (function workout_tracker$utils$dom$by_selector_all(selector){

return cljs.core.array_seq.call(null,document.querySelectorAll(selector));
});
workout_tracker.utils.dom.toggle_class_BANG_ = (function workout_tracker$utils$dom$toggle_class_BANG_(element,class$){

return element.classList.toggle(class$);
});
workout_tracker.utils.dom.listen_BANG_ = (function workout_tracker$utils$dom$listen_BANG_(element,event_type,listener){

return element.addEventListener(cljs.core.name.call(null,event_type),listener);
});
workout_tracker.utils.dom.listen_all_BANG_ = (function workout_tracker$utils$dom$listen_all_BANG_(elements,event_type,listener){

var seq__36256 = cljs.core.seq.call(null,elements);
var chunk__36257 = null;
var count__36258 = (0);
var i__36259 = (0);
while(true){
if((i__36259 < count__36258)){
var element = cljs.core._nth.call(null,chunk__36257,i__36259);
workout_tracker.utils.dom.listen_BANG_.call(null,element,event_type,listener);


var G__36260 = seq__36256;
var G__36261 = chunk__36257;
var G__36262 = count__36258;
var G__36263 = (i__36259 + (1));
seq__36256 = G__36260;
chunk__36257 = G__36261;
count__36258 = G__36262;
i__36259 = G__36263;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36256);
if(temp__5457__auto__){
var seq__36256__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36256__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36256__$1);
var G__36264 = cljs.core.chunk_rest.call(null,seq__36256__$1);
var G__36265 = c__4319__auto__;
var G__36266 = cljs.core.count.call(null,c__4319__auto__);
var G__36267 = (0);
seq__36256 = G__36264;
chunk__36257 = G__36265;
count__36258 = G__36266;
i__36259 = G__36267;
continue;
} else {
var element = cljs.core.first.call(null,seq__36256__$1);
workout_tracker.utils.dom.listen_BANG_.call(null,element,event_type,listener);


var G__36268 = cljs.core.next.call(null,seq__36256__$1);
var G__36269 = null;
var G__36270 = (0);
var G__36271 = (0);
seq__36256 = G__36268;
chunk__36257 = G__36269;
count__36258 = G__36270;
i__36259 = G__36271;
continue;
}
} else {
return null;
}
}
break;
}
});
workout_tracker.utils.dom.hide_element = (function workout_tracker$utils$dom$hide_element(element){
return element.classList.add("hidden");
});
workout_tracker.utils.dom.unhide_element = (function workout_tracker$utils$dom$unhide_element(element){
return element.classList.remove("hidden");
});
workout_tracker.utils.dom.apply_filter = (function workout_tracker$utils$dom$apply_filter(predicate,els){

cljs.core.prn.call(null,["There are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,els))," in apply-filter"].join(''));

var seq__36272 = cljs.core.seq.call(null,els);
var chunk__36273 = null;
var count__36274 = (0);
var i__36275 = (0);
while(true){
if((i__36275 < count__36274)){
var el = cljs.core._nth.call(null,chunk__36273,i__36275);
if(cljs.core.truth_(predicate.call(null,el))){
workout_tracker.utils.dom.unhide_element.call(null,el);
} else {
workout_tracker.utils.dom.hide_element.call(null,el);
}


var G__36276 = seq__36272;
var G__36277 = chunk__36273;
var G__36278 = count__36274;
var G__36279 = (i__36275 + (1));
seq__36272 = G__36276;
chunk__36273 = G__36277;
count__36274 = G__36278;
i__36275 = G__36279;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36272);
if(temp__5457__auto__){
var seq__36272__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36272__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36272__$1);
var G__36280 = cljs.core.chunk_rest.call(null,seq__36272__$1);
var G__36281 = c__4319__auto__;
var G__36282 = cljs.core.count.call(null,c__4319__auto__);
var G__36283 = (0);
seq__36272 = G__36280;
chunk__36273 = G__36281;
count__36274 = G__36282;
i__36275 = G__36283;
continue;
} else {
var el = cljs.core.first.call(null,seq__36272__$1);
if(cljs.core.truth_(predicate.call(null,el))){
workout_tracker.utils.dom.unhide_element.call(null,el);
} else {
workout_tracker.utils.dom.hide_element.call(null,el);
}


var G__36284 = cljs.core.next.call(null,seq__36272__$1);
var G__36285 = null;
var G__36286 = (0);
var G__36287 = (0);
seq__36272 = G__36284;
chunk__36273 = G__36285;
count__36274 = G__36286;
i__36275 = G__36287;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=dom.js.map?rel=1527195887822
