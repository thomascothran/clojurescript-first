// Compiled by ClojureScript 1.10.238 {}
goog.provide('workout_tracker.utils.date');
goog.require('cljs.core');
/**
 * A map with associating timespans to milliseconds
 */
workout_tracker.utils.date.timespans = (function (){var day = (86400000);
var week = (day * (7));
var month = (day * (30));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"day","day",-274800446),day,new cljs.core.Keyword(null,"week","week",-1326473278),week,new cljs.core.Keyword(null,"month","month",-1960248533),month], null);
})();
workout_tracker.utils.date.date_filter = (function workout_tracker$utils$date$date_filter(when_range,unix_timestamp){

var now = Date.now();
var difference = (now - unix_timestamp);
var G__22295 = when_range;
var G__22295__$1 = (((G__22295 instanceof cljs.core.Keyword))?G__22295.fqn:null);
switch (G__22295__$1) {
case "today":
return (difference < new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(workout_tracker.utils.date.timespans));

break;
case "yesterday":
return (((difference > new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(workout_tracker.utils.date.timespans))) && ((difference < ((2) * new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(workout_tracker.utils.date.timespans)))));

break;
case "last-week":
return (difference < new cljs.core.Keyword(null,"week","week",-1326473278).cljs$core$IFn$_invoke$arity$1(workout_tracker.utils.date.timespans));

break;
case "last-month":
return (difference < new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(workout_tracker.utils.date.timespans));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22295__$1)].join('')));

}
});

//# sourceMappingURL=date.js.map?rel=1527040031962
