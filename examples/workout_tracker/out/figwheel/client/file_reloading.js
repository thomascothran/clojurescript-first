// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27244_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27244_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27245 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27246 = null;
var count__27247 = (0);
var i__27248 = (0);
while(true){
if((i__27248 < count__27247)){
var n = cljs.core._nth.call(null,chunk__27246,i__27248);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27249 = seq__27245;
var G__27250 = chunk__27246;
var G__27251 = count__27247;
var G__27252 = (i__27248 + (1));
seq__27245 = G__27249;
chunk__27246 = G__27250;
count__27247 = G__27251;
i__27248 = G__27252;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27245);
if(temp__5457__auto__){
var seq__27245__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27245__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27245__$1);
var G__27253 = cljs.core.chunk_rest.call(null,seq__27245__$1);
var G__27254 = c__4319__auto__;
var G__27255 = cljs.core.count.call(null,c__4319__auto__);
var G__27256 = (0);
seq__27245 = G__27253;
chunk__27246 = G__27254;
count__27247 = G__27255;
i__27248 = G__27256;
continue;
} else {
var n = cljs.core.first.call(null,seq__27245__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27257 = cljs.core.next.call(null,seq__27245__$1);
var G__27258 = null;
var G__27259 = (0);
var G__27260 = (0);
seq__27245 = G__27257;
chunk__27246 = G__27258;
count__27247 = G__27259;
i__27248 = G__27260;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27261){
var vec__27262 = p__27261;
var _ = cljs.core.nth.call(null,vec__27262,(0),null);
var v = cljs.core.nth.call(null,vec__27262,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__27265){
var vec__27266 = p__27265;
var k = cljs.core.nth.call(null,vec__27266,(0),null);
var v = cljs.core.nth.call(null,vec__27266,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27278_27286 = cljs.core.seq.call(null,deps);
var chunk__27279_27287 = null;
var count__27280_27288 = (0);
var i__27281_27289 = (0);
while(true){
if((i__27281_27289 < count__27280_27288)){
var dep_27290 = cljs.core._nth.call(null,chunk__27279_27287,i__27281_27289);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_27290;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27290));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27290,(depth + (1)),state);
} else {
}


var G__27291 = seq__27278_27286;
var G__27292 = chunk__27279_27287;
var G__27293 = count__27280_27288;
var G__27294 = (i__27281_27289 + (1));
seq__27278_27286 = G__27291;
chunk__27279_27287 = G__27292;
count__27280_27288 = G__27293;
i__27281_27289 = G__27294;
continue;
} else {
var temp__5457__auto___27295 = cljs.core.seq.call(null,seq__27278_27286);
if(temp__5457__auto___27295){
var seq__27278_27296__$1 = temp__5457__auto___27295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27278_27296__$1)){
var c__4319__auto___27297 = cljs.core.chunk_first.call(null,seq__27278_27296__$1);
var G__27298 = cljs.core.chunk_rest.call(null,seq__27278_27296__$1);
var G__27299 = c__4319__auto___27297;
var G__27300 = cljs.core.count.call(null,c__4319__auto___27297);
var G__27301 = (0);
seq__27278_27286 = G__27298;
chunk__27279_27287 = G__27299;
count__27280_27288 = G__27300;
i__27281_27289 = G__27301;
continue;
} else {
var dep_27302 = cljs.core.first.call(null,seq__27278_27296__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_27302;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27302));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27302,(depth + (1)),state);
} else {
}


var G__27303 = cljs.core.next.call(null,seq__27278_27296__$1);
var G__27304 = null;
var G__27305 = (0);
var G__27306 = (0);
seq__27278_27286 = G__27303;
chunk__27279_27287 = G__27304;
count__27280_27288 = G__27305;
i__27281_27289 = G__27306;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27282){
var vec__27283 = p__27282;
var seq__27284 = cljs.core.seq.call(null,vec__27283);
var first__27285 = cljs.core.first.call(null,seq__27284);
var seq__27284__$1 = cljs.core.next.call(null,seq__27284);
var x = first__27285;
var xs = seq__27284__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27283,seq__27284,first__27285,seq__27284__$1,x,xs,get_deps__$1){
return (function (p1__27269_SHARP_){
return clojure.set.difference.call(null,p1__27269_SHARP_,x);
});})(vec__27283,seq__27284,first__27285,seq__27284__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27307 = cljs.core.seq.call(null,provides);
var chunk__27308 = null;
var count__27309 = (0);
var i__27310 = (0);
while(true){
if((i__27310 < count__27309)){
var prov = cljs.core._nth.call(null,chunk__27308,i__27310);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27311_27319 = cljs.core.seq.call(null,requires);
var chunk__27312_27320 = null;
var count__27313_27321 = (0);
var i__27314_27322 = (0);
while(true){
if((i__27314_27322 < count__27313_27321)){
var req_27323 = cljs.core._nth.call(null,chunk__27312_27320,i__27314_27322);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27323,prov);


var G__27324 = seq__27311_27319;
var G__27325 = chunk__27312_27320;
var G__27326 = count__27313_27321;
var G__27327 = (i__27314_27322 + (1));
seq__27311_27319 = G__27324;
chunk__27312_27320 = G__27325;
count__27313_27321 = G__27326;
i__27314_27322 = G__27327;
continue;
} else {
var temp__5457__auto___27328 = cljs.core.seq.call(null,seq__27311_27319);
if(temp__5457__auto___27328){
var seq__27311_27329__$1 = temp__5457__auto___27328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27311_27329__$1)){
var c__4319__auto___27330 = cljs.core.chunk_first.call(null,seq__27311_27329__$1);
var G__27331 = cljs.core.chunk_rest.call(null,seq__27311_27329__$1);
var G__27332 = c__4319__auto___27330;
var G__27333 = cljs.core.count.call(null,c__4319__auto___27330);
var G__27334 = (0);
seq__27311_27319 = G__27331;
chunk__27312_27320 = G__27332;
count__27313_27321 = G__27333;
i__27314_27322 = G__27334;
continue;
} else {
var req_27335 = cljs.core.first.call(null,seq__27311_27329__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27335,prov);


var G__27336 = cljs.core.next.call(null,seq__27311_27329__$1);
var G__27337 = null;
var G__27338 = (0);
var G__27339 = (0);
seq__27311_27319 = G__27336;
chunk__27312_27320 = G__27337;
count__27313_27321 = G__27338;
i__27314_27322 = G__27339;
continue;
}
} else {
}
}
break;
}


var G__27340 = seq__27307;
var G__27341 = chunk__27308;
var G__27342 = count__27309;
var G__27343 = (i__27310 + (1));
seq__27307 = G__27340;
chunk__27308 = G__27341;
count__27309 = G__27342;
i__27310 = G__27343;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27307);
if(temp__5457__auto__){
var seq__27307__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27307__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27307__$1);
var G__27344 = cljs.core.chunk_rest.call(null,seq__27307__$1);
var G__27345 = c__4319__auto__;
var G__27346 = cljs.core.count.call(null,c__4319__auto__);
var G__27347 = (0);
seq__27307 = G__27344;
chunk__27308 = G__27345;
count__27309 = G__27346;
i__27310 = G__27347;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27307__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27315_27348 = cljs.core.seq.call(null,requires);
var chunk__27316_27349 = null;
var count__27317_27350 = (0);
var i__27318_27351 = (0);
while(true){
if((i__27318_27351 < count__27317_27350)){
var req_27352 = cljs.core._nth.call(null,chunk__27316_27349,i__27318_27351);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27352,prov);


var G__27353 = seq__27315_27348;
var G__27354 = chunk__27316_27349;
var G__27355 = count__27317_27350;
var G__27356 = (i__27318_27351 + (1));
seq__27315_27348 = G__27353;
chunk__27316_27349 = G__27354;
count__27317_27350 = G__27355;
i__27318_27351 = G__27356;
continue;
} else {
var temp__5457__auto___27357__$1 = cljs.core.seq.call(null,seq__27315_27348);
if(temp__5457__auto___27357__$1){
var seq__27315_27358__$1 = temp__5457__auto___27357__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27315_27358__$1)){
var c__4319__auto___27359 = cljs.core.chunk_first.call(null,seq__27315_27358__$1);
var G__27360 = cljs.core.chunk_rest.call(null,seq__27315_27358__$1);
var G__27361 = c__4319__auto___27359;
var G__27362 = cljs.core.count.call(null,c__4319__auto___27359);
var G__27363 = (0);
seq__27315_27348 = G__27360;
chunk__27316_27349 = G__27361;
count__27317_27350 = G__27362;
i__27318_27351 = G__27363;
continue;
} else {
var req_27364 = cljs.core.first.call(null,seq__27315_27358__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27364,prov);


var G__27365 = cljs.core.next.call(null,seq__27315_27358__$1);
var G__27366 = null;
var G__27367 = (0);
var G__27368 = (0);
seq__27315_27348 = G__27365;
chunk__27316_27349 = G__27366;
count__27317_27350 = G__27367;
i__27318_27351 = G__27368;
continue;
}
} else {
}
}
break;
}


var G__27369 = cljs.core.next.call(null,seq__27307__$1);
var G__27370 = null;
var G__27371 = (0);
var G__27372 = (0);
seq__27307 = G__27369;
chunk__27308 = G__27370;
count__27309 = G__27371;
i__27310 = G__27372;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27373_27377 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27374_27378 = null;
var count__27375_27379 = (0);
var i__27376_27380 = (0);
while(true){
if((i__27376_27380 < count__27375_27379)){
var ns_27381 = cljs.core._nth.call(null,chunk__27374_27378,i__27376_27380);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27381);


var G__27382 = seq__27373_27377;
var G__27383 = chunk__27374_27378;
var G__27384 = count__27375_27379;
var G__27385 = (i__27376_27380 + (1));
seq__27373_27377 = G__27382;
chunk__27374_27378 = G__27383;
count__27375_27379 = G__27384;
i__27376_27380 = G__27385;
continue;
} else {
var temp__5457__auto___27386 = cljs.core.seq.call(null,seq__27373_27377);
if(temp__5457__auto___27386){
var seq__27373_27387__$1 = temp__5457__auto___27386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27373_27387__$1)){
var c__4319__auto___27388 = cljs.core.chunk_first.call(null,seq__27373_27387__$1);
var G__27389 = cljs.core.chunk_rest.call(null,seq__27373_27387__$1);
var G__27390 = c__4319__auto___27388;
var G__27391 = cljs.core.count.call(null,c__4319__auto___27388);
var G__27392 = (0);
seq__27373_27377 = G__27389;
chunk__27374_27378 = G__27390;
count__27375_27379 = G__27391;
i__27376_27380 = G__27392;
continue;
} else {
var ns_27393 = cljs.core.first.call(null,seq__27373_27387__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27393);


var G__27394 = cljs.core.next.call(null,seq__27373_27387__$1);
var G__27395 = null;
var G__27396 = (0);
var G__27397 = (0);
seq__27373_27377 = G__27394;
chunk__27374_27378 = G__27395;
count__27375_27379 = G__27396;
i__27376_27380 = G__27397;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27398__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27399__i = 0, G__27399__a = new Array(arguments.length -  0);
while (G__27399__i < G__27399__a.length) {G__27399__a[G__27399__i] = arguments[G__27399__i + 0]; ++G__27399__i;}
  args = new cljs.core.IndexedSeq(G__27399__a,0,null);
} 
return G__27398__delegate.call(this,args);};
G__27398.cljs$lang$maxFixedArity = 0;
G__27398.cljs$lang$applyTo = (function (arglist__27400){
var args = cljs.core.seq(arglist__27400);
return G__27398__delegate(args);
});
G__27398.cljs$core$IFn$_invoke$arity$variadic = G__27398__delegate;
return G__27398;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__27401_SHARP_,p2__27402_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27401_SHARP_)].join('')),p2__27402_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__27403_SHARP_,p2__27404_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27403_SHARP_)].join(''),p2__27404_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27405 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27405.addCallback(((function (G__27405){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27405))
);

G__27405.addErrback(((function (G__27405){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27405))
);

return G__27405;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27406){if((e27406 instanceof Error)){
var e = e27406;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27406;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27407){if((e27407 instanceof Error)){
var e = e27407;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27407;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27408 = cljs.core._EQ_;
var expr__27409 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27408.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27409))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27408.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27409))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27408.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27409))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27408,expr__27409){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27408,expr__27409))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27411,callback){
var map__27412 = p__27411;
var map__27412__$1 = ((((!((map__27412 == null)))?(((((map__27412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27412):map__27412);
var file_msg = map__27412__$1;
var request_url = cljs.core.get.call(null,map__27412__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27412,map__27412__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27412,map__27412__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto__){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto__){
return (function (state_27450){
var state_val_27451 = (state_27450[(1)]);
if((state_val_27451 === (7))){
var inst_27446 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
var statearr_27452_27478 = state_27450__$1;
(statearr_27452_27478[(2)] = inst_27446);

(statearr_27452_27478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (1))){
var state_27450__$1 = state_27450;
var statearr_27453_27479 = state_27450__$1;
(statearr_27453_27479[(2)] = null);

(statearr_27453_27479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (4))){
var inst_27416 = (state_27450[(7)]);
var inst_27416__$1 = (state_27450[(2)]);
var state_27450__$1 = (function (){var statearr_27454 = state_27450;
(statearr_27454[(7)] = inst_27416__$1);

return statearr_27454;
})();
if(cljs.core.truth_(inst_27416__$1)){
var statearr_27455_27480 = state_27450__$1;
(statearr_27455_27480[(1)] = (5));

} else {
var statearr_27456_27481 = state_27450__$1;
(statearr_27456_27481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (15))){
var inst_27429 = (state_27450[(8)]);
var inst_27431 = (state_27450[(9)]);
var inst_27433 = inst_27431.call(null,inst_27429);
var state_27450__$1 = state_27450;
var statearr_27457_27482 = state_27450__$1;
(statearr_27457_27482[(2)] = inst_27433);

(statearr_27457_27482[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (13))){
var inst_27440 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
var statearr_27458_27483 = state_27450__$1;
(statearr_27458_27483[(2)] = inst_27440);

(statearr_27458_27483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (6))){
var state_27450__$1 = state_27450;
var statearr_27459_27484 = state_27450__$1;
(statearr_27459_27484[(2)] = null);

(statearr_27459_27484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (17))){
var inst_27437 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
var statearr_27460_27485 = state_27450__$1;
(statearr_27460_27485[(2)] = inst_27437);

(statearr_27460_27485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (3))){
var inst_27448 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27450__$1,inst_27448);
} else {
if((state_val_27451 === (12))){
var state_27450__$1 = state_27450;
var statearr_27461_27486 = state_27450__$1;
(statearr_27461_27486[(2)] = null);

(statearr_27461_27486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (2))){
var state_27450__$1 = state_27450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27450__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27451 === (11))){
var inst_27421 = (state_27450[(10)]);
var inst_27427 = figwheel.client.file_reloading.blocking_load.call(null,inst_27421);
var state_27450__$1 = state_27450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27450__$1,(14),inst_27427);
} else {
if((state_val_27451 === (9))){
var inst_27421 = (state_27450[(10)]);
var state_27450__$1 = state_27450;
if(cljs.core.truth_(inst_27421)){
var statearr_27462_27487 = state_27450__$1;
(statearr_27462_27487[(1)] = (11));

} else {
var statearr_27463_27488 = state_27450__$1;
(statearr_27463_27488[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (5))){
var inst_27422 = (state_27450[(11)]);
var inst_27416 = (state_27450[(7)]);
var inst_27421 = cljs.core.nth.call(null,inst_27416,(0),null);
var inst_27422__$1 = cljs.core.nth.call(null,inst_27416,(1),null);
var state_27450__$1 = (function (){var statearr_27464 = state_27450;
(statearr_27464[(11)] = inst_27422__$1);

(statearr_27464[(10)] = inst_27421);

return statearr_27464;
})();
if(cljs.core.truth_(inst_27422__$1)){
var statearr_27465_27489 = state_27450__$1;
(statearr_27465_27489[(1)] = (8));

} else {
var statearr_27466_27490 = state_27450__$1;
(statearr_27466_27490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (14))){
var inst_27431 = (state_27450[(9)]);
var inst_27421 = (state_27450[(10)]);
var inst_27429 = (state_27450[(2)]);
var inst_27430 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27431__$1 = cljs.core.get.call(null,inst_27430,inst_27421);
var state_27450__$1 = (function (){var statearr_27467 = state_27450;
(statearr_27467[(8)] = inst_27429);

(statearr_27467[(9)] = inst_27431__$1);

return statearr_27467;
})();
if(cljs.core.truth_(inst_27431__$1)){
var statearr_27468_27491 = state_27450__$1;
(statearr_27468_27491[(1)] = (15));

} else {
var statearr_27469_27492 = state_27450__$1;
(statearr_27469_27492[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (16))){
var inst_27429 = (state_27450[(8)]);
var inst_27435 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27429);
var state_27450__$1 = state_27450;
var statearr_27470_27493 = state_27450__$1;
(statearr_27470_27493[(2)] = inst_27435);

(statearr_27470_27493[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (10))){
var inst_27442 = (state_27450[(2)]);
var state_27450__$1 = (function (){var statearr_27471 = state_27450;
(statearr_27471[(12)] = inst_27442);

return statearr_27471;
})();
var statearr_27472_27494 = state_27450__$1;
(statearr_27472_27494[(2)] = null);

(statearr_27472_27494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (8))){
var inst_27422 = (state_27450[(11)]);
var inst_27424 = eval(inst_27422);
var state_27450__$1 = state_27450;
var statearr_27473_27495 = state_27450__$1;
(statearr_27473_27495[(2)] = inst_27424);

(statearr_27473_27495[(1)] = (10));


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
});})(c__24035__auto__))
;
return ((function (switch__23945__auto__,c__24035__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23946__auto__ = null;
var figwheel$client$file_reloading$state_machine__23946__auto____0 = (function (){
var statearr_27474 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27474[(0)] = figwheel$client$file_reloading$state_machine__23946__auto__);

(statearr_27474[(1)] = (1));

return statearr_27474;
});
var figwheel$client$file_reloading$state_machine__23946__auto____1 = (function (state_27450){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_27450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e27475){if((e27475 instanceof Object)){
var ex__23949__auto__ = e27475;
var statearr_27476_27496 = state_27450;
(statearr_27476_27496[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27497 = state_27450;
state_27450 = G__27497;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23946__auto__ = function(state_27450){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23946__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23946__auto____1.call(this,state_27450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23946__auto____0;
figwheel$client$file_reloading$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23946__auto____1;
return figwheel$client$file_reloading$state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto__))
})();
var state__24037__auto__ = (function (){var statearr_27477 = f__24036__auto__.call(null);
(statearr_27477[(6)] = c__24035__auto__);

return statearr_27477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto__))
);

return c__24035__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27499 = arguments.length;
switch (G__27499) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27501,callback){
var map__27502 = p__27501;
var map__27502__$1 = ((((!((map__27502 == null)))?(((((map__27502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27502):map__27502);
var file_msg = map__27502__$1;
var namespace = cljs.core.get.call(null,map__27502__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27502,map__27502__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27502,map__27502__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27504){
var map__27505 = p__27504;
var map__27505__$1 = ((((!((map__27505 == null)))?(((((map__27505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27505):map__27505);
var file_msg = map__27505__$1;
var namespace = cljs.core.get.call(null,map__27505__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27507){
var map__27508 = p__27507;
var map__27508__$1 = ((((!((map__27508 == null)))?(((((map__27508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27508):map__27508);
var file_msg = map__27508__$1;
var namespace = cljs.core.get.call(null,map__27508__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27510,callback){
var map__27511 = p__27510;
var map__27511__$1 = ((((!((map__27511 == null)))?(((((map__27511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27511):map__27511);
var file_msg = map__27511__$1;
var request_url = cljs.core.get.call(null,map__27511__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27511__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24035__auto___27561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___27561,out){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___27561,out){
return (function (state_27546){
var state_val_27547 = (state_27546[(1)]);
if((state_val_27547 === (1))){
var inst_27520 = cljs.core.seq.call(null,files);
var inst_27521 = cljs.core.first.call(null,inst_27520);
var inst_27522 = cljs.core.next.call(null,inst_27520);
var inst_27523 = files;
var state_27546__$1 = (function (){var statearr_27548 = state_27546;
(statearr_27548[(7)] = inst_27522);

(statearr_27548[(8)] = inst_27521);

(statearr_27548[(9)] = inst_27523);

return statearr_27548;
})();
var statearr_27549_27562 = state_27546__$1;
(statearr_27549_27562[(2)] = null);

(statearr_27549_27562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27547 === (2))){
var inst_27529 = (state_27546[(10)]);
var inst_27523 = (state_27546[(9)]);
var inst_27528 = cljs.core.seq.call(null,inst_27523);
var inst_27529__$1 = cljs.core.first.call(null,inst_27528);
var inst_27530 = cljs.core.next.call(null,inst_27528);
var inst_27531 = (inst_27529__$1 == null);
var inst_27532 = cljs.core.not.call(null,inst_27531);
var state_27546__$1 = (function (){var statearr_27550 = state_27546;
(statearr_27550[(10)] = inst_27529__$1);

(statearr_27550[(11)] = inst_27530);

return statearr_27550;
})();
if(inst_27532){
var statearr_27551_27563 = state_27546__$1;
(statearr_27551_27563[(1)] = (4));

} else {
var statearr_27552_27564 = state_27546__$1;
(statearr_27552_27564[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27547 === (3))){
var inst_27544 = (state_27546[(2)]);
var state_27546__$1 = state_27546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27546__$1,inst_27544);
} else {
if((state_val_27547 === (4))){
var inst_27529 = (state_27546[(10)]);
var inst_27534 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27529);
var state_27546__$1 = state_27546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27546__$1,(7),inst_27534);
} else {
if((state_val_27547 === (5))){
var inst_27540 = cljs.core.async.close_BANG_.call(null,out);
var state_27546__$1 = state_27546;
var statearr_27553_27565 = state_27546__$1;
(statearr_27553_27565[(2)] = inst_27540);

(statearr_27553_27565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27547 === (6))){
var inst_27542 = (state_27546[(2)]);
var state_27546__$1 = state_27546;
var statearr_27554_27566 = state_27546__$1;
(statearr_27554_27566[(2)] = inst_27542);

(statearr_27554_27566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27547 === (7))){
var inst_27530 = (state_27546[(11)]);
var inst_27536 = (state_27546[(2)]);
var inst_27537 = cljs.core.async.put_BANG_.call(null,out,inst_27536);
var inst_27523 = inst_27530;
var state_27546__$1 = (function (){var statearr_27555 = state_27546;
(statearr_27555[(9)] = inst_27523);

(statearr_27555[(12)] = inst_27537);

return statearr_27555;
})();
var statearr_27556_27567 = state_27546__$1;
(statearr_27556_27567[(2)] = null);

(statearr_27556_27567[(1)] = (2));


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
});})(c__24035__auto___27561,out))
;
return ((function (switch__23945__auto__,c__24035__auto___27561,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23946__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23946__auto____0 = (function (){
var statearr_27557 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27557[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23946__auto__);

(statearr_27557[(1)] = (1));

return statearr_27557;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23946__auto____1 = (function (state_27546){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_27546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e27558){if((e27558 instanceof Object)){
var ex__23949__auto__ = e27558;
var statearr_27559_27568 = state_27546;
(statearr_27559_27568[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27569 = state_27546;
state_27546 = G__27569;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23946__auto__ = function(state_27546){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23946__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23946__auto____1.call(this,state_27546);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23946__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23946__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___27561,out))
})();
var state__24037__auto__ = (function (){var statearr_27560 = f__24036__auto__.call(null);
(statearr_27560[(6)] = c__24035__auto___27561);

return statearr_27560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___27561,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27570,opts){
var map__27571 = p__27570;
var map__27571__$1 = ((((!((map__27571 == null)))?(((((map__27571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27571):map__27571);
var eval_body = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27573){var e = e27573;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27574_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27574_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27575){
var vec__27576 = p__27575;
var k = cljs.core.nth.call(null,vec__27576,(0),null);
var v = cljs.core.nth.call(null,vec__27576,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27579){
var vec__27580 = p__27579;
var k = cljs.core.nth.call(null,vec__27580,(0),null);
var v = cljs.core.nth.call(null,vec__27580,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27586,p__27587){
var map__27588 = p__27586;
var map__27588__$1 = ((((!((map__27588 == null)))?(((((map__27588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27588):map__27588);
var opts = map__27588__$1;
var before_jsload = cljs.core.get.call(null,map__27588__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27588__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27588__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27589 = p__27587;
var map__27589__$1 = ((((!((map__27589 == null)))?(((((map__27589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27589):map__27589);
var msg = map__27589__$1;
var files = cljs.core.get.call(null,map__27589__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27589__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27589__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27743){
var state_val_27744 = (state_27743[(1)]);
if((state_val_27744 === (7))){
var inst_27603 = (state_27743[(7)]);
var inst_27605 = (state_27743[(8)]);
var inst_27604 = (state_27743[(9)]);
var inst_27606 = (state_27743[(10)]);
var inst_27611 = cljs.core._nth.call(null,inst_27604,inst_27606);
var inst_27612 = figwheel.client.file_reloading.eval_body.call(null,inst_27611,opts);
var inst_27613 = (inst_27606 + (1));
var tmp27745 = inst_27603;
var tmp27746 = inst_27605;
var tmp27747 = inst_27604;
var inst_27603__$1 = tmp27745;
var inst_27604__$1 = tmp27747;
var inst_27605__$1 = tmp27746;
var inst_27606__$1 = inst_27613;
var state_27743__$1 = (function (){var statearr_27748 = state_27743;
(statearr_27748[(7)] = inst_27603__$1);

(statearr_27748[(11)] = inst_27612);

(statearr_27748[(8)] = inst_27605__$1);

(statearr_27748[(9)] = inst_27604__$1);

(statearr_27748[(10)] = inst_27606__$1);

return statearr_27748;
})();
var statearr_27749_27832 = state_27743__$1;
(statearr_27749_27832[(2)] = null);

(statearr_27749_27832[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (20))){
var inst_27646 = (state_27743[(12)]);
var inst_27654 = figwheel.client.file_reloading.sort_files.call(null,inst_27646);
var state_27743__$1 = state_27743;
var statearr_27750_27833 = state_27743__$1;
(statearr_27750_27833[(2)] = inst_27654);

(statearr_27750_27833[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (27))){
var state_27743__$1 = state_27743;
var statearr_27751_27834 = state_27743__$1;
(statearr_27751_27834[(2)] = null);

(statearr_27751_27834[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (1))){
var inst_27595 = (state_27743[(13)]);
var inst_27592 = before_jsload.call(null,files);
var inst_27593 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27594 = (function (){return ((function (inst_27595,inst_27592,inst_27593,state_val_27744,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27583_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27583_SHARP_);
});
;})(inst_27595,inst_27592,inst_27593,state_val_27744,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27595__$1 = cljs.core.filter.call(null,inst_27594,files);
var inst_27596 = cljs.core.not_empty.call(null,inst_27595__$1);
var state_27743__$1 = (function (){var statearr_27752 = state_27743;
(statearr_27752[(14)] = inst_27593);

(statearr_27752[(13)] = inst_27595__$1);

(statearr_27752[(15)] = inst_27592);

return statearr_27752;
})();
if(cljs.core.truth_(inst_27596)){
var statearr_27753_27835 = state_27743__$1;
(statearr_27753_27835[(1)] = (2));

} else {
var statearr_27754_27836 = state_27743__$1;
(statearr_27754_27836[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (24))){
var state_27743__$1 = state_27743;
var statearr_27755_27837 = state_27743__$1;
(statearr_27755_27837[(2)] = null);

(statearr_27755_27837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (39))){
var inst_27696 = (state_27743[(16)]);
var state_27743__$1 = state_27743;
var statearr_27756_27838 = state_27743__$1;
(statearr_27756_27838[(2)] = inst_27696);

(statearr_27756_27838[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (46))){
var inst_27738 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
var statearr_27757_27839 = state_27743__$1;
(statearr_27757_27839[(2)] = inst_27738);

(statearr_27757_27839[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (4))){
var inst_27640 = (state_27743[(2)]);
var inst_27641 = cljs.core.List.EMPTY;
var inst_27642 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27641);
var inst_27643 = (function (){return ((function (inst_27640,inst_27641,inst_27642,state_val_27744,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27584_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27584_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27584_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27584_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_27640,inst_27641,inst_27642,state_val_27744,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27644 = cljs.core.filter.call(null,inst_27643,files);
var inst_27645 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27646 = cljs.core.concat.call(null,inst_27644,inst_27645);
var state_27743__$1 = (function (){var statearr_27758 = state_27743;
(statearr_27758[(12)] = inst_27646);

(statearr_27758[(17)] = inst_27642);

(statearr_27758[(18)] = inst_27640);

return statearr_27758;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27759_27840 = state_27743__$1;
(statearr_27759_27840[(1)] = (16));

} else {
var statearr_27760_27841 = state_27743__$1;
(statearr_27760_27841[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (15))){
var inst_27630 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
var statearr_27761_27842 = state_27743__$1;
(statearr_27761_27842[(2)] = inst_27630);

(statearr_27761_27842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (21))){
var inst_27656 = (state_27743[(19)]);
var inst_27656__$1 = (state_27743[(2)]);
var inst_27657 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27656__$1);
var state_27743__$1 = (function (){var statearr_27762 = state_27743;
(statearr_27762[(19)] = inst_27656__$1);

return statearr_27762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27743__$1,(22),inst_27657);
} else {
if((state_val_27744 === (31))){
var inst_27741 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27743__$1,inst_27741);
} else {
if((state_val_27744 === (32))){
var inst_27696 = (state_27743[(16)]);
var inst_27701 = inst_27696.cljs$lang$protocol_mask$partition0$;
var inst_27702 = (inst_27701 & (64));
var inst_27703 = inst_27696.cljs$core$ISeq$;
var inst_27704 = (cljs.core.PROTOCOL_SENTINEL === inst_27703);
var inst_27705 = ((inst_27702) || (inst_27704));
var state_27743__$1 = state_27743;
if(cljs.core.truth_(inst_27705)){
var statearr_27763_27843 = state_27743__$1;
(statearr_27763_27843[(1)] = (35));

} else {
var statearr_27764_27844 = state_27743__$1;
(statearr_27764_27844[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (40))){
var inst_27718 = (state_27743[(20)]);
var inst_27717 = (state_27743[(2)]);
var inst_27718__$1 = cljs.core.get.call(null,inst_27717,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27719 = cljs.core.get.call(null,inst_27717,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27720 = cljs.core.not_empty.call(null,inst_27718__$1);
var state_27743__$1 = (function (){var statearr_27765 = state_27743;
(statearr_27765[(20)] = inst_27718__$1);

(statearr_27765[(21)] = inst_27719);

return statearr_27765;
})();
if(cljs.core.truth_(inst_27720)){
var statearr_27766_27845 = state_27743__$1;
(statearr_27766_27845[(1)] = (41));

} else {
var statearr_27767_27846 = state_27743__$1;
(statearr_27767_27846[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (33))){
var state_27743__$1 = state_27743;
var statearr_27768_27847 = state_27743__$1;
(statearr_27768_27847[(2)] = false);

(statearr_27768_27847[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (13))){
var inst_27616 = (state_27743[(22)]);
var inst_27620 = cljs.core.chunk_first.call(null,inst_27616);
var inst_27621 = cljs.core.chunk_rest.call(null,inst_27616);
var inst_27622 = cljs.core.count.call(null,inst_27620);
var inst_27603 = inst_27621;
var inst_27604 = inst_27620;
var inst_27605 = inst_27622;
var inst_27606 = (0);
var state_27743__$1 = (function (){var statearr_27769 = state_27743;
(statearr_27769[(7)] = inst_27603);

(statearr_27769[(8)] = inst_27605);

(statearr_27769[(9)] = inst_27604);

(statearr_27769[(10)] = inst_27606);

return statearr_27769;
})();
var statearr_27770_27848 = state_27743__$1;
(statearr_27770_27848[(2)] = null);

(statearr_27770_27848[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (22))){
var inst_27664 = (state_27743[(23)]);
var inst_27656 = (state_27743[(19)]);
var inst_27659 = (state_27743[(24)]);
var inst_27660 = (state_27743[(25)]);
var inst_27659__$1 = (state_27743[(2)]);
var inst_27660__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27659__$1);
var inst_27661 = (function (){var all_files = inst_27656;
var res_SINGLEQUOTE_ = inst_27659__$1;
var res = inst_27660__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27664,inst_27656,inst_27659,inst_27660,inst_27659__$1,inst_27660__$1,state_val_27744,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27585_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27585_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27664,inst_27656,inst_27659,inst_27660,inst_27659__$1,inst_27660__$1,state_val_27744,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27662 = cljs.core.filter.call(null,inst_27661,inst_27659__$1);
var inst_27663 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27664__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27663);
var inst_27665 = cljs.core.not_empty.call(null,inst_27664__$1);
var state_27743__$1 = (function (){var statearr_27771 = state_27743;
(statearr_27771[(23)] = inst_27664__$1);

(statearr_27771[(24)] = inst_27659__$1);

(statearr_27771[(26)] = inst_27662);

(statearr_27771[(25)] = inst_27660__$1);

return statearr_27771;
})();
if(cljs.core.truth_(inst_27665)){
var statearr_27772_27849 = state_27743__$1;
(statearr_27772_27849[(1)] = (23));

} else {
var statearr_27773_27850 = state_27743__$1;
(statearr_27773_27850[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (36))){
var state_27743__$1 = state_27743;
var statearr_27774_27851 = state_27743__$1;
(statearr_27774_27851[(2)] = false);

(statearr_27774_27851[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (41))){
var inst_27718 = (state_27743[(20)]);
var inst_27722 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27723 = cljs.core.map.call(null,inst_27722,inst_27718);
var inst_27724 = cljs.core.pr_str.call(null,inst_27723);
var inst_27725 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27724)].join('');
var inst_27726 = figwheel.client.utils.log.call(null,inst_27725);
var state_27743__$1 = state_27743;
var statearr_27775_27852 = state_27743__$1;
(statearr_27775_27852[(2)] = inst_27726);

(statearr_27775_27852[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (43))){
var inst_27719 = (state_27743[(21)]);
var inst_27729 = (state_27743[(2)]);
var inst_27730 = cljs.core.not_empty.call(null,inst_27719);
var state_27743__$1 = (function (){var statearr_27776 = state_27743;
(statearr_27776[(27)] = inst_27729);

return statearr_27776;
})();
if(cljs.core.truth_(inst_27730)){
var statearr_27777_27853 = state_27743__$1;
(statearr_27777_27853[(1)] = (44));

} else {
var statearr_27778_27854 = state_27743__$1;
(statearr_27778_27854[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (29))){
var inst_27664 = (state_27743[(23)]);
var inst_27656 = (state_27743[(19)]);
var inst_27659 = (state_27743[(24)]);
var inst_27662 = (state_27743[(26)]);
var inst_27696 = (state_27743[(16)]);
var inst_27660 = (state_27743[(25)]);
var inst_27692 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27695 = (function (){var all_files = inst_27656;
var res_SINGLEQUOTE_ = inst_27659;
var res = inst_27660;
var files_not_loaded = inst_27662;
var dependencies_that_loaded = inst_27664;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27656,inst_27659,inst_27662,inst_27696,inst_27660,inst_27692,state_val_27744,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27694){
var map__27779 = p__27694;
var map__27779__$1 = ((((!((map__27779 == null)))?(((((map__27779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27779):map__27779);
var namespace = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27656,inst_27659,inst_27662,inst_27696,inst_27660,inst_27692,state_val_27744,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27696__$1 = cljs.core.group_by.call(null,inst_27695,inst_27662);
var inst_27698 = (inst_27696__$1 == null);
var inst_27699 = cljs.core.not.call(null,inst_27698);
var state_27743__$1 = (function (){var statearr_27781 = state_27743;
(statearr_27781[(28)] = inst_27692);

(statearr_27781[(16)] = inst_27696__$1);

return statearr_27781;
})();
if(inst_27699){
var statearr_27782_27855 = state_27743__$1;
(statearr_27782_27855[(1)] = (32));

} else {
var statearr_27783_27856 = state_27743__$1;
(statearr_27783_27856[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (44))){
var inst_27719 = (state_27743[(21)]);
var inst_27732 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27719);
var inst_27733 = cljs.core.pr_str.call(null,inst_27732);
var inst_27734 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27733)].join('');
var inst_27735 = figwheel.client.utils.log.call(null,inst_27734);
var state_27743__$1 = state_27743;
var statearr_27784_27857 = state_27743__$1;
(statearr_27784_27857[(2)] = inst_27735);

(statearr_27784_27857[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (6))){
var inst_27637 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
var statearr_27785_27858 = state_27743__$1;
(statearr_27785_27858[(2)] = inst_27637);

(statearr_27785_27858[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (28))){
var inst_27662 = (state_27743[(26)]);
var inst_27689 = (state_27743[(2)]);
var inst_27690 = cljs.core.not_empty.call(null,inst_27662);
var state_27743__$1 = (function (){var statearr_27786 = state_27743;
(statearr_27786[(29)] = inst_27689);

return statearr_27786;
})();
if(cljs.core.truth_(inst_27690)){
var statearr_27787_27859 = state_27743__$1;
(statearr_27787_27859[(1)] = (29));

} else {
var statearr_27788_27860 = state_27743__$1;
(statearr_27788_27860[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (25))){
var inst_27660 = (state_27743[(25)]);
var inst_27676 = (state_27743[(2)]);
var inst_27677 = cljs.core.not_empty.call(null,inst_27660);
var state_27743__$1 = (function (){var statearr_27789 = state_27743;
(statearr_27789[(30)] = inst_27676);

return statearr_27789;
})();
if(cljs.core.truth_(inst_27677)){
var statearr_27790_27861 = state_27743__$1;
(statearr_27790_27861[(1)] = (26));

} else {
var statearr_27791_27862 = state_27743__$1;
(statearr_27791_27862[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (34))){
var inst_27712 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
if(cljs.core.truth_(inst_27712)){
var statearr_27792_27863 = state_27743__$1;
(statearr_27792_27863[(1)] = (38));

} else {
var statearr_27793_27864 = state_27743__$1;
(statearr_27793_27864[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (17))){
var state_27743__$1 = state_27743;
var statearr_27794_27865 = state_27743__$1;
(statearr_27794_27865[(2)] = recompile_dependents);

(statearr_27794_27865[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (3))){
var state_27743__$1 = state_27743;
var statearr_27795_27866 = state_27743__$1;
(statearr_27795_27866[(2)] = null);

(statearr_27795_27866[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (12))){
var inst_27633 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
var statearr_27796_27867 = state_27743__$1;
(statearr_27796_27867[(2)] = inst_27633);

(statearr_27796_27867[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (2))){
var inst_27595 = (state_27743[(13)]);
var inst_27602 = cljs.core.seq.call(null,inst_27595);
var inst_27603 = inst_27602;
var inst_27604 = null;
var inst_27605 = (0);
var inst_27606 = (0);
var state_27743__$1 = (function (){var statearr_27797 = state_27743;
(statearr_27797[(7)] = inst_27603);

(statearr_27797[(8)] = inst_27605);

(statearr_27797[(9)] = inst_27604);

(statearr_27797[(10)] = inst_27606);

return statearr_27797;
})();
var statearr_27798_27868 = state_27743__$1;
(statearr_27798_27868[(2)] = null);

(statearr_27798_27868[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (23))){
var inst_27664 = (state_27743[(23)]);
var inst_27656 = (state_27743[(19)]);
var inst_27659 = (state_27743[(24)]);
var inst_27662 = (state_27743[(26)]);
var inst_27660 = (state_27743[(25)]);
var inst_27667 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27669 = (function (){var all_files = inst_27656;
var res_SINGLEQUOTE_ = inst_27659;
var res = inst_27660;
var files_not_loaded = inst_27662;
var dependencies_that_loaded = inst_27664;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27656,inst_27659,inst_27662,inst_27660,inst_27667,state_val_27744,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27668){
var map__27799 = p__27668;
var map__27799__$1 = ((((!((map__27799 == null)))?(((((map__27799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27799):map__27799);
var request_url = cljs.core.get.call(null,map__27799__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27656,inst_27659,inst_27662,inst_27660,inst_27667,state_val_27744,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27670 = cljs.core.reverse.call(null,inst_27664);
var inst_27671 = cljs.core.map.call(null,inst_27669,inst_27670);
var inst_27672 = cljs.core.pr_str.call(null,inst_27671);
var inst_27673 = figwheel.client.utils.log.call(null,inst_27672);
var state_27743__$1 = (function (){var statearr_27801 = state_27743;
(statearr_27801[(31)] = inst_27667);

return statearr_27801;
})();
var statearr_27802_27869 = state_27743__$1;
(statearr_27802_27869[(2)] = inst_27673);

(statearr_27802_27869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (35))){
var state_27743__$1 = state_27743;
var statearr_27803_27870 = state_27743__$1;
(statearr_27803_27870[(2)] = true);

(statearr_27803_27870[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (19))){
var inst_27646 = (state_27743[(12)]);
var inst_27652 = figwheel.client.file_reloading.expand_files.call(null,inst_27646);
var state_27743__$1 = state_27743;
var statearr_27804_27871 = state_27743__$1;
(statearr_27804_27871[(2)] = inst_27652);

(statearr_27804_27871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (11))){
var state_27743__$1 = state_27743;
var statearr_27805_27872 = state_27743__$1;
(statearr_27805_27872[(2)] = null);

(statearr_27805_27872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (9))){
var inst_27635 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
var statearr_27806_27873 = state_27743__$1;
(statearr_27806_27873[(2)] = inst_27635);

(statearr_27806_27873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (5))){
var inst_27605 = (state_27743[(8)]);
var inst_27606 = (state_27743[(10)]);
var inst_27608 = (inst_27606 < inst_27605);
var inst_27609 = inst_27608;
var state_27743__$1 = state_27743;
if(cljs.core.truth_(inst_27609)){
var statearr_27807_27874 = state_27743__$1;
(statearr_27807_27874[(1)] = (7));

} else {
var statearr_27808_27875 = state_27743__$1;
(statearr_27808_27875[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (14))){
var inst_27616 = (state_27743[(22)]);
var inst_27625 = cljs.core.first.call(null,inst_27616);
var inst_27626 = figwheel.client.file_reloading.eval_body.call(null,inst_27625,opts);
var inst_27627 = cljs.core.next.call(null,inst_27616);
var inst_27603 = inst_27627;
var inst_27604 = null;
var inst_27605 = (0);
var inst_27606 = (0);
var state_27743__$1 = (function (){var statearr_27809 = state_27743;
(statearr_27809[(7)] = inst_27603);

(statearr_27809[(8)] = inst_27605);

(statearr_27809[(9)] = inst_27604);

(statearr_27809[(10)] = inst_27606);

(statearr_27809[(32)] = inst_27626);

return statearr_27809;
})();
var statearr_27810_27876 = state_27743__$1;
(statearr_27810_27876[(2)] = null);

(statearr_27810_27876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (45))){
var state_27743__$1 = state_27743;
var statearr_27811_27877 = state_27743__$1;
(statearr_27811_27877[(2)] = null);

(statearr_27811_27877[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (26))){
var inst_27664 = (state_27743[(23)]);
var inst_27656 = (state_27743[(19)]);
var inst_27659 = (state_27743[(24)]);
var inst_27662 = (state_27743[(26)]);
var inst_27660 = (state_27743[(25)]);
var inst_27679 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27681 = (function (){var all_files = inst_27656;
var res_SINGLEQUOTE_ = inst_27659;
var res = inst_27660;
var files_not_loaded = inst_27662;
var dependencies_that_loaded = inst_27664;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27656,inst_27659,inst_27662,inst_27660,inst_27679,state_val_27744,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27680){
var map__27812 = p__27680;
var map__27812__$1 = ((((!((map__27812 == null)))?(((((map__27812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27812):map__27812);
var namespace = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27656,inst_27659,inst_27662,inst_27660,inst_27679,state_val_27744,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27682 = cljs.core.map.call(null,inst_27681,inst_27660);
var inst_27683 = cljs.core.pr_str.call(null,inst_27682);
var inst_27684 = figwheel.client.utils.log.call(null,inst_27683);
var inst_27685 = (function (){var all_files = inst_27656;
var res_SINGLEQUOTE_ = inst_27659;
var res = inst_27660;
var files_not_loaded = inst_27662;
var dependencies_that_loaded = inst_27664;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27656,inst_27659,inst_27662,inst_27660,inst_27679,inst_27681,inst_27682,inst_27683,inst_27684,state_val_27744,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27664,inst_27656,inst_27659,inst_27662,inst_27660,inst_27679,inst_27681,inst_27682,inst_27683,inst_27684,state_val_27744,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27686 = setTimeout(inst_27685,(10));
var state_27743__$1 = (function (){var statearr_27814 = state_27743;
(statearr_27814[(33)] = inst_27684);

(statearr_27814[(34)] = inst_27679);

return statearr_27814;
})();
var statearr_27815_27878 = state_27743__$1;
(statearr_27815_27878[(2)] = inst_27686);

(statearr_27815_27878[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (16))){
var state_27743__$1 = state_27743;
var statearr_27816_27879 = state_27743__$1;
(statearr_27816_27879[(2)] = reload_dependents);

(statearr_27816_27879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (38))){
var inst_27696 = (state_27743[(16)]);
var inst_27714 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27696);
var state_27743__$1 = state_27743;
var statearr_27817_27880 = state_27743__$1;
(statearr_27817_27880[(2)] = inst_27714);

(statearr_27817_27880[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (30))){
var state_27743__$1 = state_27743;
var statearr_27818_27881 = state_27743__$1;
(statearr_27818_27881[(2)] = null);

(statearr_27818_27881[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (10))){
var inst_27616 = (state_27743[(22)]);
var inst_27618 = cljs.core.chunked_seq_QMARK_.call(null,inst_27616);
var state_27743__$1 = state_27743;
if(inst_27618){
var statearr_27819_27882 = state_27743__$1;
(statearr_27819_27882[(1)] = (13));

} else {
var statearr_27820_27883 = state_27743__$1;
(statearr_27820_27883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (18))){
var inst_27650 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
if(cljs.core.truth_(inst_27650)){
var statearr_27821_27884 = state_27743__$1;
(statearr_27821_27884[(1)] = (19));

} else {
var statearr_27822_27885 = state_27743__$1;
(statearr_27822_27885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (42))){
var state_27743__$1 = state_27743;
var statearr_27823_27886 = state_27743__$1;
(statearr_27823_27886[(2)] = null);

(statearr_27823_27886[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (37))){
var inst_27709 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
var statearr_27824_27887 = state_27743__$1;
(statearr_27824_27887[(2)] = inst_27709);

(statearr_27824_27887[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (8))){
var inst_27603 = (state_27743[(7)]);
var inst_27616 = (state_27743[(22)]);
var inst_27616__$1 = cljs.core.seq.call(null,inst_27603);
var state_27743__$1 = (function (){var statearr_27825 = state_27743;
(statearr_27825[(22)] = inst_27616__$1);

return statearr_27825;
})();
if(inst_27616__$1){
var statearr_27826_27888 = state_27743__$1;
(statearr_27826_27888[(1)] = (10));

} else {
var statearr_27827_27889 = state_27743__$1;
(statearr_27827_27889[(1)] = (11));

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
});})(c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23945__auto__,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23946__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23946__auto____0 = (function (){
var statearr_27828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27828[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23946__auto__);

(statearr_27828[(1)] = (1));

return statearr_27828;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23946__auto____1 = (function (state_27743){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_27743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e27829){if((e27829 instanceof Object)){
var ex__23949__auto__ = e27829;
var statearr_27830_27890 = state_27743;
(statearr_27830_27890[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27891 = state_27743;
state_27743 = G__27891;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23946__auto__ = function(state_27743){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23946__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23946__auto____1.call(this,state_27743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23946__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23946__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24037__auto__ = (function (){var statearr_27831 = f__24036__auto__.call(null);
(statearr_27831[(6)] = c__24035__auto__);

return statearr_27831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto__,map__27588,map__27588__$1,opts,before_jsload,on_jsload,reload_dependents,map__27589,map__27589__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24035__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27894,link){
var map__27895 = p__27894;
var map__27895__$1 = ((((!((map__27895 == null)))?(((((map__27895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27895):map__27895);
var file = cljs.core.get.call(null,map__27895__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__27895,map__27895__$1,file){
return (function (p1__27892_SHARP_,p2__27893_SHARP_){
if(cljs.core._EQ_.call(null,p1__27892_SHARP_,p2__27893_SHARP_)){
return p1__27892_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__27895,map__27895__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27898){
var map__27899 = p__27898;
var map__27899__$1 = ((((!((map__27899 == null)))?(((((map__27899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27899):map__27899);
var match_length = cljs.core.get.call(null,map__27899__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27899__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27897_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27897_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27901_SHARP_,p2__27902_SHARP_){
return cljs.core.assoc.call(null,p1__27901_SHARP_,cljs.core.get.call(null,p2__27902_SHARP_,key),p2__27902_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_27903 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27903);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27903);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27904,p__27905){
var map__27906 = p__27904;
var map__27906__$1 = ((((!((map__27906 == null)))?(((((map__27906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27906):map__27906);
var on_cssload = cljs.core.get.call(null,map__27906__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27907 = p__27905;
var map__27907__$1 = ((((!((map__27907 == null)))?(((((map__27907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27907):map__27907);
var files_msg = map__27907__$1;
var files = cljs.core.get.call(null,map__27907__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1527040036233
