// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e29005){if((e29005 instanceof Error)){
var e = e29005;
return "Error: Unable to stringify";
} else {
throw e29005;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29008 = arguments.length;
switch (G__29008) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29006_SHARP_){
if(typeof p1__29006_SHARP_ === 'string'){
return p1__29006_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29006_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29011 = arguments.length;
var i__4500__auto___29012 = (0);
while(true){
if((i__4500__auto___29012 < len__4499__auto___29011)){
args__4502__auto__.push((arguments[i__4500__auto___29012]));

var G__29013 = (i__4500__auto___29012 + (1));
i__4500__auto___29012 = G__29013;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29010){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29010));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29015 = arguments.length;
var i__4500__auto___29016 = (0);
while(true){
if((i__4500__auto___29016 < len__4499__auto___29015)){
args__4502__auto__.push((arguments[i__4500__auto___29016]));

var G__29017 = (i__4500__auto___29016 + (1));
i__4500__auto___29016 = G__29017;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29014){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29014));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29018){
var map__29019 = p__29018;
var map__29019__$1 = ((((!((map__29019 == null)))?(((((map__29019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29019):map__29019);
var message = cljs.core.get.call(null,map__29019__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29019__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24035__auto___29098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___29098,ch){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___29098,ch){
return (function (state_29070){
var state_val_29071 = (state_29070[(1)]);
if((state_val_29071 === (7))){
var inst_29066 = (state_29070[(2)]);
var state_29070__$1 = state_29070;
var statearr_29072_29099 = state_29070__$1;
(statearr_29072_29099[(2)] = inst_29066);

(statearr_29072_29099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29071 === (1))){
var state_29070__$1 = state_29070;
var statearr_29073_29100 = state_29070__$1;
(statearr_29073_29100[(2)] = null);

(statearr_29073_29100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29071 === (4))){
var inst_29023 = (state_29070[(7)]);
var inst_29023__$1 = (state_29070[(2)]);
var state_29070__$1 = (function (){var statearr_29074 = state_29070;
(statearr_29074[(7)] = inst_29023__$1);

return statearr_29074;
})();
if(cljs.core.truth_(inst_29023__$1)){
var statearr_29075_29101 = state_29070__$1;
(statearr_29075_29101[(1)] = (5));

} else {
var statearr_29076_29102 = state_29070__$1;
(statearr_29076_29102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29071 === (15))){
var inst_29030 = (state_29070[(8)]);
var inst_29045 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29030);
var inst_29046 = cljs.core.first.call(null,inst_29045);
var inst_29047 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29046);
var inst_29048 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29047)].join('');
var inst_29049 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29048);
var state_29070__$1 = state_29070;
var statearr_29077_29103 = state_29070__$1;
(statearr_29077_29103[(2)] = inst_29049);

(statearr_29077_29103[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29071 === (13))){
var inst_29054 = (state_29070[(2)]);
var state_29070__$1 = state_29070;
var statearr_29078_29104 = state_29070__$1;
(statearr_29078_29104[(2)] = inst_29054);

(statearr_29078_29104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29071 === (6))){
var state_29070__$1 = state_29070;
var statearr_29079_29105 = state_29070__$1;
(statearr_29079_29105[(2)] = null);

(statearr_29079_29105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29071 === (17))){
var inst_29052 = (state_29070[(2)]);
var state_29070__$1 = state_29070;
var statearr_29080_29106 = state_29070__$1;
(statearr_29080_29106[(2)] = inst_29052);

(statearr_29080_29106[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29071 === (3))){
var inst_29068 = (state_29070[(2)]);
var state_29070__$1 = state_29070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29070__$1,inst_29068);
} else {
if((state_val_29071 === (12))){
var inst_29029 = (state_29070[(9)]);
var inst_29043 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29029,opts);
var state_29070__$1 = state_29070;
if(cljs.core.truth_(inst_29043)){
var statearr_29081_29107 = state_29070__$1;
(statearr_29081_29107[(1)] = (15));

} else {
var statearr_29082_29108 = state_29070__$1;
(statearr_29082_29108[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29071 === (2))){
var state_29070__$1 = state_29070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29070__$1,(4),ch);
} else {
if((state_val_29071 === (11))){
var inst_29030 = (state_29070[(8)]);
var inst_29035 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29036 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29030);
var inst_29037 = cljs.core.async.timeout.call(null,(1000));
var inst_29038 = [inst_29036,inst_29037];
var inst_29039 = (new cljs.core.PersistentVector(null,2,(5),inst_29035,inst_29038,null));
var state_29070__$1 = state_29070;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29070__$1,(14),inst_29039);
} else {
if((state_val_29071 === (9))){
var inst_29030 = (state_29070[(8)]);
var inst_29056 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29057 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29030);
var inst_29058 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29057);
var inst_29059 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29058)].join('');
var inst_29060 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29059);
var state_29070__$1 = (function (){var statearr_29083 = state_29070;
(statearr_29083[(10)] = inst_29056);

return statearr_29083;
})();
var statearr_29084_29109 = state_29070__$1;
(statearr_29084_29109[(2)] = inst_29060);

(statearr_29084_29109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29071 === (5))){
var inst_29023 = (state_29070[(7)]);
var inst_29025 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29026 = (new cljs.core.PersistentArrayMap(null,2,inst_29025,null));
var inst_29027 = (new cljs.core.PersistentHashSet(null,inst_29026,null));
var inst_29028 = figwheel.client.focus_msgs.call(null,inst_29027,inst_29023);
var inst_29029 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29028);
var inst_29030 = cljs.core.first.call(null,inst_29028);
var inst_29031 = figwheel.client.autoload_QMARK_.call(null);
var state_29070__$1 = (function (){var statearr_29085 = state_29070;
(statearr_29085[(9)] = inst_29029);

(statearr_29085[(8)] = inst_29030);

return statearr_29085;
})();
if(cljs.core.truth_(inst_29031)){
var statearr_29086_29110 = state_29070__$1;
(statearr_29086_29110[(1)] = (8));

} else {
var statearr_29087_29111 = state_29070__$1;
(statearr_29087_29111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29071 === (14))){
var inst_29041 = (state_29070[(2)]);
var state_29070__$1 = state_29070;
var statearr_29088_29112 = state_29070__$1;
(statearr_29088_29112[(2)] = inst_29041);

(statearr_29088_29112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29071 === (16))){
var state_29070__$1 = state_29070;
var statearr_29089_29113 = state_29070__$1;
(statearr_29089_29113[(2)] = null);

(statearr_29089_29113[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29071 === (10))){
var inst_29062 = (state_29070[(2)]);
var state_29070__$1 = (function (){var statearr_29090 = state_29070;
(statearr_29090[(11)] = inst_29062);

return statearr_29090;
})();
var statearr_29091_29114 = state_29070__$1;
(statearr_29091_29114[(2)] = null);

(statearr_29091_29114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29071 === (8))){
var inst_29029 = (state_29070[(9)]);
var inst_29033 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29029,opts);
var state_29070__$1 = state_29070;
if(cljs.core.truth_(inst_29033)){
var statearr_29092_29115 = state_29070__$1;
(statearr_29092_29115[(1)] = (11));

} else {
var statearr_29093_29116 = state_29070__$1;
(statearr_29093_29116[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24035__auto___29098,ch))
;
return ((function (switch__23945__auto__,c__24035__auto___29098,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23946__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23946__auto____0 = (function (){
var statearr_29094 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29094[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23946__auto__);

(statearr_29094[(1)] = (1));

return statearr_29094;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23946__auto____1 = (function (state_29070){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_29070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e29095){if((e29095 instanceof Object)){
var ex__23949__auto__ = e29095;
var statearr_29096_29117 = state_29070;
(statearr_29096_29117[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29118 = state_29070;
state_29070 = G__29118;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23946__auto__ = function(state_29070){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23946__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23946__auto____1.call(this,state_29070);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23946__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23946__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___29098,ch))
})();
var state__24037__auto__ = (function (){var statearr_29097 = f__24036__auto__.call(null);
(statearr_29097[(6)] = c__24035__auto___29098);

return statearr_29097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___29098,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29119_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29119_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29123 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29123){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29121 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29122 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29121,_STAR_print_fn_STAR_29122,sb,base_path_29123){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_29121,_STAR_print_fn_STAR_29122,sb,base_path_29123))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29122;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29121;
}}catch (e29120){if((e29120 instanceof Error)){
var e = e29120;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29123], null));
} else {
var e = e29120;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29123))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29124){
var map__29125 = p__29124;
var map__29125__$1 = ((((!((map__29125 == null)))?(((((map__29125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29125):map__29125);
var opts = map__29125__$1;
var build_id = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29125,map__29125__$1,opts,build_id){
return (function (p__29127){
var vec__29128 = p__29127;
var seq__29129 = cljs.core.seq.call(null,vec__29128);
var first__29130 = cljs.core.first.call(null,seq__29129);
var seq__29129__$1 = cljs.core.next.call(null,seq__29129);
var map__29131 = first__29130;
var map__29131__$1 = ((((!((map__29131 == null)))?(((((map__29131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29131):map__29131);
var msg = map__29131__$1;
var msg_name = cljs.core.get.call(null,map__29131__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29129__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29128,seq__29129,first__29130,seq__29129__$1,map__29131,map__29131__$1,msg,msg_name,_,map__29125,map__29125__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29128,seq__29129,first__29130,seq__29129__$1,map__29131,map__29131__$1,msg,msg_name,_,map__29125,map__29125__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29125,map__29125__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29133){
var vec__29134 = p__29133;
var seq__29135 = cljs.core.seq.call(null,vec__29134);
var first__29136 = cljs.core.first.call(null,seq__29135);
var seq__29135__$1 = cljs.core.next.call(null,seq__29135);
var map__29137 = first__29136;
var map__29137__$1 = ((((!((map__29137 == null)))?(((((map__29137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29137):map__29137);
var msg = map__29137__$1;
var msg_name = cljs.core.get.call(null,map__29137__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29135__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29139){
var map__29140 = p__29139;
var map__29140__$1 = ((((!((map__29140 == null)))?(((((map__29140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29140):map__29140);
var on_compile_warning = cljs.core.get.call(null,map__29140__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29140__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29140,map__29140__$1,on_compile_warning,on_compile_fail){
return (function (p__29142){
var vec__29143 = p__29142;
var seq__29144 = cljs.core.seq.call(null,vec__29143);
var first__29145 = cljs.core.first.call(null,seq__29144);
var seq__29144__$1 = cljs.core.next.call(null,seq__29144);
var map__29146 = first__29145;
var map__29146__$1 = ((((!((map__29146 == null)))?(((((map__29146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29146):map__29146);
var msg = map__29146__$1;
var msg_name = cljs.core.get.call(null,map__29146__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29144__$1;
var pred__29148 = cljs.core._EQ_;
var expr__29149 = msg_name;
if(cljs.core.truth_(pred__29148.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29149))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29148.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29149))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29140,map__29140__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto__,msg_hist,msg_names,msg){
return (function (state_29238){
var state_val_29239 = (state_29238[(1)]);
if((state_val_29239 === (7))){
var inst_29158 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
if(cljs.core.truth_(inst_29158)){
var statearr_29240_29287 = state_29238__$1;
(statearr_29240_29287[(1)] = (8));

} else {
var statearr_29241_29288 = state_29238__$1;
(statearr_29241_29288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (20))){
var inst_29232 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29242_29289 = state_29238__$1;
(statearr_29242_29289[(2)] = inst_29232);

(statearr_29242_29289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (27))){
var inst_29228 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29243_29290 = state_29238__$1;
(statearr_29243_29290[(2)] = inst_29228);

(statearr_29243_29290[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (1))){
var inst_29151 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29238__$1 = state_29238;
if(cljs.core.truth_(inst_29151)){
var statearr_29244_29291 = state_29238__$1;
(statearr_29244_29291[(1)] = (2));

} else {
var statearr_29245_29292 = state_29238__$1;
(statearr_29245_29292[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (24))){
var inst_29230 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29246_29293 = state_29238__$1;
(statearr_29246_29293[(2)] = inst_29230);

(statearr_29246_29293[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (4))){
var inst_29236 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29238__$1,inst_29236);
} else {
if((state_val_29239 === (15))){
var inst_29234 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29247_29294 = state_29238__$1;
(statearr_29247_29294[(2)] = inst_29234);

(statearr_29247_29294[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (21))){
var inst_29187 = (state_29238[(2)]);
var inst_29188 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29189 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29188);
var state_29238__$1 = (function (){var statearr_29248 = state_29238;
(statearr_29248[(7)] = inst_29187);

return statearr_29248;
})();
var statearr_29249_29295 = state_29238__$1;
(statearr_29249_29295[(2)] = inst_29189);

(statearr_29249_29295[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (31))){
var inst_29217 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29238__$1 = state_29238;
if(cljs.core.truth_(inst_29217)){
var statearr_29250_29296 = state_29238__$1;
(statearr_29250_29296[(1)] = (34));

} else {
var statearr_29251_29297 = state_29238__$1;
(statearr_29251_29297[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (32))){
var inst_29226 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29252_29298 = state_29238__$1;
(statearr_29252_29298[(2)] = inst_29226);

(statearr_29252_29298[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (33))){
var inst_29213 = (state_29238[(2)]);
var inst_29214 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29215 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29214);
var state_29238__$1 = (function (){var statearr_29253 = state_29238;
(statearr_29253[(8)] = inst_29213);

return statearr_29253;
})();
var statearr_29254_29299 = state_29238__$1;
(statearr_29254_29299[(2)] = inst_29215);

(statearr_29254_29299[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (13))){
var inst_29172 = figwheel.client.heads_up.clear.call(null);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(16),inst_29172);
} else {
if((state_val_29239 === (22))){
var inst_29193 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29194 = figwheel.client.heads_up.append_warning_message.call(null,inst_29193);
var state_29238__$1 = state_29238;
var statearr_29255_29300 = state_29238__$1;
(statearr_29255_29300[(2)] = inst_29194);

(statearr_29255_29300[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (36))){
var inst_29224 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29256_29301 = state_29238__$1;
(statearr_29256_29301[(2)] = inst_29224);

(statearr_29256_29301[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (29))){
var inst_29204 = (state_29238[(2)]);
var inst_29205 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29206 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29205);
var state_29238__$1 = (function (){var statearr_29257 = state_29238;
(statearr_29257[(9)] = inst_29204);

return statearr_29257;
})();
var statearr_29258_29302 = state_29238__$1;
(statearr_29258_29302[(2)] = inst_29206);

(statearr_29258_29302[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (6))){
var inst_29153 = (state_29238[(10)]);
var state_29238__$1 = state_29238;
var statearr_29259_29303 = state_29238__$1;
(statearr_29259_29303[(2)] = inst_29153);

(statearr_29259_29303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (28))){
var inst_29200 = (state_29238[(2)]);
var inst_29201 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29202 = figwheel.client.heads_up.display_warning.call(null,inst_29201);
var state_29238__$1 = (function (){var statearr_29260 = state_29238;
(statearr_29260[(11)] = inst_29200);

return statearr_29260;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(29),inst_29202);
} else {
if((state_val_29239 === (25))){
var inst_29198 = figwheel.client.heads_up.clear.call(null);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(28),inst_29198);
} else {
if((state_val_29239 === (34))){
var inst_29219 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(37),inst_29219);
} else {
if((state_val_29239 === (17))){
var inst_29178 = (state_29238[(2)]);
var inst_29179 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29180 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29179);
var state_29238__$1 = (function (){var statearr_29261 = state_29238;
(statearr_29261[(12)] = inst_29178);

return statearr_29261;
})();
var statearr_29262_29304 = state_29238__$1;
(statearr_29262_29304[(2)] = inst_29180);

(statearr_29262_29304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (3))){
var inst_29170 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29238__$1 = state_29238;
if(cljs.core.truth_(inst_29170)){
var statearr_29263_29305 = state_29238__$1;
(statearr_29263_29305[(1)] = (13));

} else {
var statearr_29264_29306 = state_29238__$1;
(statearr_29264_29306[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (12))){
var inst_29166 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29265_29307 = state_29238__$1;
(statearr_29265_29307[(2)] = inst_29166);

(statearr_29265_29307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (2))){
var inst_29153 = (state_29238[(10)]);
var inst_29153__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29238__$1 = (function (){var statearr_29266 = state_29238;
(statearr_29266[(10)] = inst_29153__$1);

return statearr_29266;
})();
if(cljs.core.truth_(inst_29153__$1)){
var statearr_29267_29308 = state_29238__$1;
(statearr_29267_29308[(1)] = (5));

} else {
var statearr_29268_29309 = state_29238__$1;
(statearr_29268_29309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (23))){
var inst_29196 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29238__$1 = state_29238;
if(cljs.core.truth_(inst_29196)){
var statearr_29269_29310 = state_29238__$1;
(statearr_29269_29310[(1)] = (25));

} else {
var statearr_29270_29311 = state_29238__$1;
(statearr_29270_29311[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (35))){
var state_29238__$1 = state_29238;
var statearr_29271_29312 = state_29238__$1;
(statearr_29271_29312[(2)] = null);

(statearr_29271_29312[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (19))){
var inst_29191 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29238__$1 = state_29238;
if(cljs.core.truth_(inst_29191)){
var statearr_29272_29313 = state_29238__$1;
(statearr_29272_29313[(1)] = (22));

} else {
var statearr_29273_29314 = state_29238__$1;
(statearr_29273_29314[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (11))){
var inst_29162 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29274_29315 = state_29238__$1;
(statearr_29274_29315[(2)] = inst_29162);

(statearr_29274_29315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (9))){
var inst_29164 = figwheel.client.heads_up.clear.call(null);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(12),inst_29164);
} else {
if((state_val_29239 === (5))){
var inst_29155 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29238__$1 = state_29238;
var statearr_29275_29316 = state_29238__$1;
(statearr_29275_29316[(2)] = inst_29155);

(statearr_29275_29316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (14))){
var inst_29182 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29238__$1 = state_29238;
if(cljs.core.truth_(inst_29182)){
var statearr_29276_29317 = state_29238__$1;
(statearr_29276_29317[(1)] = (18));

} else {
var statearr_29277_29318 = state_29238__$1;
(statearr_29277_29318[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (26))){
var inst_29208 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29238__$1 = state_29238;
if(cljs.core.truth_(inst_29208)){
var statearr_29278_29319 = state_29238__$1;
(statearr_29278_29319[(1)] = (30));

} else {
var statearr_29279_29320 = state_29238__$1;
(statearr_29279_29320[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (16))){
var inst_29174 = (state_29238[(2)]);
var inst_29175 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29176 = figwheel.client.heads_up.display_exception.call(null,inst_29175);
var state_29238__$1 = (function (){var statearr_29280 = state_29238;
(statearr_29280[(13)] = inst_29174);

return statearr_29280;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(17),inst_29176);
} else {
if((state_val_29239 === (30))){
var inst_29210 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29211 = figwheel.client.heads_up.display_warning.call(null,inst_29210);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(33),inst_29211);
} else {
if((state_val_29239 === (10))){
var inst_29168 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29281_29321 = state_29238__$1;
(statearr_29281_29321[(2)] = inst_29168);

(statearr_29281_29321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (18))){
var inst_29184 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29185 = figwheel.client.heads_up.display_exception.call(null,inst_29184);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(21),inst_29185);
} else {
if((state_val_29239 === (37))){
var inst_29221 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29282_29322 = state_29238__$1;
(statearr_29282_29322[(2)] = inst_29221);

(statearr_29282_29322[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (8))){
var inst_29160 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(11),inst_29160);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24035__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23945__auto__,c__24035__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23946__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23946__auto____0 = (function (){
var statearr_29283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29283[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23946__auto__);

(statearr_29283[(1)] = (1));

return statearr_29283;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23946__auto____1 = (function (state_29238){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_29238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e29284){if((e29284 instanceof Object)){
var ex__23949__auto__ = e29284;
var statearr_29285_29323 = state_29238;
(statearr_29285_29323[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29324 = state_29238;
state_29238 = G__29324;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23946__auto__ = function(state_29238){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23946__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23946__auto____1.call(this,state_29238);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23946__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23946__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto__,msg_hist,msg_names,msg))
})();
var state__24037__auto__ = (function (){var statearr_29286 = f__24036__auto__.call(null);
(statearr_29286[(6)] = c__24035__auto__);

return statearr_29286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto__,msg_hist,msg_names,msg))
);

return c__24035__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24035__auto___29353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___29353,ch){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___29353,ch){
return (function (state_29339){
var state_val_29340 = (state_29339[(1)]);
if((state_val_29340 === (1))){
var state_29339__$1 = state_29339;
var statearr_29341_29354 = state_29339__$1;
(statearr_29341_29354[(2)] = null);

(statearr_29341_29354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (2))){
var state_29339__$1 = state_29339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29339__$1,(4),ch);
} else {
if((state_val_29340 === (3))){
var inst_29337 = (state_29339[(2)]);
var state_29339__$1 = state_29339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29339__$1,inst_29337);
} else {
if((state_val_29340 === (4))){
var inst_29327 = (state_29339[(7)]);
var inst_29327__$1 = (state_29339[(2)]);
var state_29339__$1 = (function (){var statearr_29342 = state_29339;
(statearr_29342[(7)] = inst_29327__$1);

return statearr_29342;
})();
if(cljs.core.truth_(inst_29327__$1)){
var statearr_29343_29355 = state_29339__$1;
(statearr_29343_29355[(1)] = (5));

} else {
var statearr_29344_29356 = state_29339__$1;
(statearr_29344_29356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (5))){
var inst_29327 = (state_29339[(7)]);
var inst_29329 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29327);
var state_29339__$1 = state_29339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29339__$1,(8),inst_29329);
} else {
if((state_val_29340 === (6))){
var state_29339__$1 = state_29339;
var statearr_29345_29357 = state_29339__$1;
(statearr_29345_29357[(2)] = null);

(statearr_29345_29357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (7))){
var inst_29335 = (state_29339[(2)]);
var state_29339__$1 = state_29339;
var statearr_29346_29358 = state_29339__$1;
(statearr_29346_29358[(2)] = inst_29335);

(statearr_29346_29358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (8))){
var inst_29331 = (state_29339[(2)]);
var state_29339__$1 = (function (){var statearr_29347 = state_29339;
(statearr_29347[(8)] = inst_29331);

return statearr_29347;
})();
var statearr_29348_29359 = state_29339__$1;
(statearr_29348_29359[(2)] = null);

(statearr_29348_29359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__24035__auto___29353,ch))
;
return ((function (switch__23945__auto__,c__24035__auto___29353,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23946__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23946__auto____0 = (function (){
var statearr_29349 = [null,null,null,null,null,null,null,null,null];
(statearr_29349[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23946__auto__);

(statearr_29349[(1)] = (1));

return statearr_29349;
});
var figwheel$client$heads_up_plugin_$_state_machine__23946__auto____1 = (function (state_29339){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_29339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e29350){if((e29350 instanceof Object)){
var ex__23949__auto__ = e29350;
var statearr_29351_29360 = state_29339;
(statearr_29351_29360[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29361 = state_29339;
state_29339 = G__29361;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23946__auto__ = function(state_29339){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23946__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23946__auto____1.call(this,state_29339);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23946__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23946__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___29353,ch))
})();
var state__24037__auto__ = (function (){var statearr_29352 = f__24036__auto__.call(null);
(statearr_29352[(6)] = c__24035__auto___29353);

return statearr_29352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___29353,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto__){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto__){
return (function (state_29367){
var state_val_29368 = (state_29367[(1)]);
if((state_val_29368 === (1))){
var inst_29362 = cljs.core.async.timeout.call(null,(3000));
var state_29367__$1 = state_29367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29367__$1,(2),inst_29362);
} else {
if((state_val_29368 === (2))){
var inst_29364 = (state_29367[(2)]);
var inst_29365 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29367__$1 = (function (){var statearr_29369 = state_29367;
(statearr_29369[(7)] = inst_29364);

return statearr_29369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29367__$1,inst_29365);
} else {
return null;
}
}
});})(c__24035__auto__))
;
return ((function (switch__23945__auto__,c__24035__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23946__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23946__auto____0 = (function (){
var statearr_29370 = [null,null,null,null,null,null,null,null];
(statearr_29370[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23946__auto__);

(statearr_29370[(1)] = (1));

return statearr_29370;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23946__auto____1 = (function (state_29367){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_29367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e29371){if((e29371 instanceof Object)){
var ex__23949__auto__ = e29371;
var statearr_29372_29374 = state_29367;
(statearr_29372_29374[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29375 = state_29367;
state_29367 = G__29375;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23946__auto__ = function(state_29367){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23946__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23946__auto____1.call(this,state_29367);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23946__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23946__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto__))
})();
var state__24037__auto__ = (function (){var statearr_29373 = f__24036__auto__.call(null);
(statearr_29373[(6)] = c__24035__auto__);

return statearr_29373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto__))
);

return c__24035__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto__,figwheel_version,temp__5457__auto__){
return (function (state_29382){
var state_val_29383 = (state_29382[(1)]);
if((state_val_29383 === (1))){
var inst_29376 = cljs.core.async.timeout.call(null,(2000));
var state_29382__$1 = state_29382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29382__$1,(2),inst_29376);
} else {
if((state_val_29383 === (2))){
var inst_29378 = (state_29382[(2)]);
var inst_29379 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29380 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29379);
var state_29382__$1 = (function (){var statearr_29384 = state_29382;
(statearr_29384[(7)] = inst_29378);

return statearr_29384;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29382__$1,inst_29380);
} else {
return null;
}
}
});})(c__24035__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__23945__auto__,c__24035__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23946__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23946__auto____0 = (function (){
var statearr_29385 = [null,null,null,null,null,null,null,null];
(statearr_29385[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23946__auto__);

(statearr_29385[(1)] = (1));

return statearr_29385;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23946__auto____1 = (function (state_29382){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_29382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e29386){if((e29386 instanceof Object)){
var ex__23949__auto__ = e29386;
var statearr_29387_29389 = state_29382;
(statearr_29387_29389[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29390 = state_29382;
state_29382 = G__29390;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23946__auto__ = function(state_29382){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23946__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23946__auto____1.call(this,state_29382);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23946__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23946__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto__,figwheel_version,temp__5457__auto__))
})();
var state__24037__auto__ = (function (){var statearr_29388 = f__24036__auto__.call(null);
(statearr_29388[(6)] = c__24035__auto__);

return statearr_29388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto__,figwheel_version,temp__5457__auto__))
);

return c__24035__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29391){
var map__29392 = p__29391;
var map__29392__$1 = ((((!((map__29392 == null)))?(((((map__29392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29392):map__29392);
var file = cljs.core.get.call(null,map__29392__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29392__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29392__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29394 = "";
var G__29394__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29394),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29394);
var G__29394__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29394__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29394__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29394__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29394__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29395){
var map__29396 = p__29395;
var map__29396__$1 = ((((!((map__29396 == null)))?(((((map__29396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29396):map__29396);
var ed = map__29396__$1;
var formatted_exception = cljs.core.get.call(null,map__29396__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29396__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29396__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29398_29402 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29399_29403 = null;
var count__29400_29404 = (0);
var i__29401_29405 = (0);
while(true){
if((i__29401_29405 < count__29400_29404)){
var msg_29406 = cljs.core._nth.call(null,chunk__29399_29403,i__29401_29405);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29406);


var G__29407 = seq__29398_29402;
var G__29408 = chunk__29399_29403;
var G__29409 = count__29400_29404;
var G__29410 = (i__29401_29405 + (1));
seq__29398_29402 = G__29407;
chunk__29399_29403 = G__29408;
count__29400_29404 = G__29409;
i__29401_29405 = G__29410;
continue;
} else {
var temp__5457__auto___29411 = cljs.core.seq.call(null,seq__29398_29402);
if(temp__5457__auto___29411){
var seq__29398_29412__$1 = temp__5457__auto___29411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29398_29412__$1)){
var c__4319__auto___29413 = cljs.core.chunk_first.call(null,seq__29398_29412__$1);
var G__29414 = cljs.core.chunk_rest.call(null,seq__29398_29412__$1);
var G__29415 = c__4319__auto___29413;
var G__29416 = cljs.core.count.call(null,c__4319__auto___29413);
var G__29417 = (0);
seq__29398_29402 = G__29414;
chunk__29399_29403 = G__29415;
count__29400_29404 = G__29416;
i__29401_29405 = G__29417;
continue;
} else {
var msg_29418 = cljs.core.first.call(null,seq__29398_29412__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29418);


var G__29419 = cljs.core.next.call(null,seq__29398_29412__$1);
var G__29420 = null;
var G__29421 = (0);
var G__29422 = (0);
seq__29398_29402 = G__29419;
chunk__29399_29403 = G__29420;
count__29400_29404 = G__29421;
i__29401_29405 = G__29422;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29423){
var map__29424 = p__29423;
var map__29424__$1 = ((((!((map__29424 == null)))?(((((map__29424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29424):map__29424);
var w = map__29424__$1;
var message = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29426 = cljs.core.seq.call(null,plugins);
var chunk__29427 = null;
var count__29428 = (0);
var i__29429 = (0);
while(true){
if((i__29429 < count__29428)){
var vec__29430 = cljs.core._nth.call(null,chunk__29427,i__29429);
var k = cljs.core.nth.call(null,vec__29430,(0),null);
var plugin = cljs.core.nth.call(null,vec__29430,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29436 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29426,chunk__29427,count__29428,i__29429,pl_29436,vec__29430,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29436.call(null,msg_hist);
});})(seq__29426,chunk__29427,count__29428,i__29429,pl_29436,vec__29430,k,plugin))
);
} else {
}


var G__29437 = seq__29426;
var G__29438 = chunk__29427;
var G__29439 = count__29428;
var G__29440 = (i__29429 + (1));
seq__29426 = G__29437;
chunk__29427 = G__29438;
count__29428 = G__29439;
i__29429 = G__29440;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29426);
if(temp__5457__auto__){
var seq__29426__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29426__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29426__$1);
var G__29441 = cljs.core.chunk_rest.call(null,seq__29426__$1);
var G__29442 = c__4319__auto__;
var G__29443 = cljs.core.count.call(null,c__4319__auto__);
var G__29444 = (0);
seq__29426 = G__29441;
chunk__29427 = G__29442;
count__29428 = G__29443;
i__29429 = G__29444;
continue;
} else {
var vec__29433 = cljs.core.first.call(null,seq__29426__$1);
var k = cljs.core.nth.call(null,vec__29433,(0),null);
var plugin = cljs.core.nth.call(null,vec__29433,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29445 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29426,chunk__29427,count__29428,i__29429,pl_29445,vec__29433,k,plugin,seq__29426__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29445.call(null,msg_hist);
});})(seq__29426,chunk__29427,count__29428,i__29429,pl_29445,vec__29433,k,plugin,seq__29426__$1,temp__5457__auto__))
);
} else {
}


var G__29446 = cljs.core.next.call(null,seq__29426__$1);
var G__29447 = null;
var G__29448 = (0);
var G__29449 = (0);
seq__29426 = G__29446;
chunk__29427 = G__29447;
count__29428 = G__29448;
i__29429 = G__29449;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29451 = arguments.length;
switch (G__29451) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29452_29457 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29453_29458 = null;
var count__29454_29459 = (0);
var i__29455_29460 = (0);
while(true){
if((i__29455_29460 < count__29454_29459)){
var msg_29461 = cljs.core._nth.call(null,chunk__29453_29458,i__29455_29460);
figwheel.client.socket.handle_incoming_message.call(null,msg_29461);


var G__29462 = seq__29452_29457;
var G__29463 = chunk__29453_29458;
var G__29464 = count__29454_29459;
var G__29465 = (i__29455_29460 + (1));
seq__29452_29457 = G__29462;
chunk__29453_29458 = G__29463;
count__29454_29459 = G__29464;
i__29455_29460 = G__29465;
continue;
} else {
var temp__5457__auto___29466 = cljs.core.seq.call(null,seq__29452_29457);
if(temp__5457__auto___29466){
var seq__29452_29467__$1 = temp__5457__auto___29466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29452_29467__$1)){
var c__4319__auto___29468 = cljs.core.chunk_first.call(null,seq__29452_29467__$1);
var G__29469 = cljs.core.chunk_rest.call(null,seq__29452_29467__$1);
var G__29470 = c__4319__auto___29468;
var G__29471 = cljs.core.count.call(null,c__4319__auto___29468);
var G__29472 = (0);
seq__29452_29457 = G__29469;
chunk__29453_29458 = G__29470;
count__29454_29459 = G__29471;
i__29455_29460 = G__29472;
continue;
} else {
var msg_29473 = cljs.core.first.call(null,seq__29452_29467__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29473);


var G__29474 = cljs.core.next.call(null,seq__29452_29467__$1);
var G__29475 = null;
var G__29476 = (0);
var G__29477 = (0);
seq__29452_29457 = G__29474;
chunk__29453_29458 = G__29475;
count__29454_29459 = G__29476;
i__29455_29460 = G__29477;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29482 = arguments.length;
var i__4500__auto___29483 = (0);
while(true){
if((i__4500__auto___29483 < len__4499__auto___29482)){
args__4502__auto__.push((arguments[i__4500__auto___29483]));

var G__29484 = (i__4500__auto___29483 + (1));
i__4500__auto___29483 = G__29484;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29479){
var map__29480 = p__29479;
var map__29480__$1 = ((((!((map__29480 == null)))?(((((map__29480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29480):map__29480);
var opts = map__29480__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29478){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29478));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29485){if((e29485 instanceof Error)){
var e = e29485;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29485;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29486){
var map__29487 = p__29486;
var map__29487__$1 = ((((!((map__29487 == null)))?(((((map__29487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29487):map__29487);
var msg_name = cljs.core.get.call(null,map__29487__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1527040037994
