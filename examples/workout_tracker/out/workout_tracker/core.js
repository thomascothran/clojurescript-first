// Compiled by ClojureScript 1.10.238 {}
goog.provide('workout_tracker.core');
goog.require('cljs.core');
goog.require('workout_tracker.utils.dom');
goog.require('workout_tracker.utils.date');
goog.require('hipo.core');
workout_tracker.core.toggle_modal = (function workout_tracker$core$toggle_modal(){
var modal = workout_tracker.utils.dom.by_selector.call(null,".modal");
return workout_tracker.utils.dom.toggle_class_BANG_.call(null,modal,"is-active");
});
workout_tracker.core.modal_togglers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_tracker.utils.dom.by_selector.call(null,".open-modal"),workout_tracker.utils.dom.by_selector.call(null,".modal-content button.cancel"),workout_tracker.utils.dom.by_selector.call(null,".modal-close")], null);
workout_tracker.utils.dom.listen_all_BANG_.call(null,workout_tracker.core.modal_togglers,new cljs.core.Keyword(null,"click","click",1912301393),workout_tracker.core.toggle_modal);
workout_tracker.core.panel_block = (function workout_tracker$core$panel_block(text){

var v36293 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.panel-block","a.panel-block",1110080403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-created-at","data-created-at",-469212247),Date.now()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-icon","span.panel-icon",1747807276),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-book","i.fas.fa-book",-688567552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null)], null),text], null);
var el__22244__auto__ = hipo.interpreter.create.call(null,v36293,null);
hipo.core.set_hiccup_BANG_.call(null,el__22244__auto__,v36293);

return el__22244__auto__;
});
workout_tracker.core.submit_workout_handler = (function workout_tracker$core$submit_workout_handler(evt){

var input_el = workout_tracker.utils.dom.by_selector.call(null,".modal-content input");
var workout_entry = input_el.value;
var panel = workout_tracker.utils.dom.by_selector.call(null,"nav.panel");
var entry = workout_tracker.core.panel_block.call(null,workout_entry);
var reset_btn_div = workout_tracker.utils.dom.by_selector.call(null,"div.reset-button");
workout_tracker.core.toggle_modal.call(null);

evt.preventDefault();

input_el.value = "";

return panel.insertBefore(entry,reset_btn_div);
});
workout_tracker.utils.dom.listen_BANG_.call(null,workout_tracker.utils.dom.by_selector.call(null,".modal-content button.submit"),new cljs.core.Keyword(null,"click","click",1912301393),workout_tracker.core.submit_workout_handler);
workout_tracker.core.in_timeframe = (function workout_tracker$core$in_timeframe(timespan,date_attr,element){

var el_timestamp = parseInt(element.getAttribute(date_attr));
var _ = cljs.core.prn.call(null,["el-timestamp -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(el_timestamp)].join(''));
return workout_tracker.utils.date.date_filter.call(null,timespan,el_timestamp);
});
workout_tracker.core.handle_date_filter = (function workout_tracker$core$handle_date_filter(evt){

var tab_el = evt.currentTarget;
var when_kw = cljs.core.keyword.call(null,tab_el.getAttribute("data-timeframe"));
var workout_els = workout_tracker.utils.dom.by_selector_all.call(null,"a.panel-block");
var filter_helper = ((function (tab_el,when_kw,workout_els){
return (function (el){
return workout_tracker.core.in_timeframe.call(null,when_kw,"data-created-at",el);
});})(tab_el,when_kw,workout_els))
;
var previous_tab = workout_tracker.utils.dom.by_selector.call(null,".panel-tabs a.is-active");
evt.preventDefault();

previous_tab.classList.remove("is-active");

tab_el.classList.add("is-active");

return workout_tracker.utils.dom.apply_filter.call(null,filter_helper,workout_els);
});
workout_tracker.utils.dom.listen_all_BANG_.call(null,workout_tracker.utils.dom.by_selector_all.call(null,".panel-tabs a"),new cljs.core.Keyword(null,"click","click",1912301393),workout_tracker.core.handle_date_filter);

//# sourceMappingURL=core.js.map?rel=1527196039610
