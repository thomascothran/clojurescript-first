// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28717){
var map__28718 = p__28717;
var map__28718__$1 = ((((!((map__28718 == null)))?(((((map__28718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28718):map__28718);
var m = map__28718__$1;
var n = cljs.core.get.call(null,map__28718__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28718__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28720_28742 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28721_28743 = null;
var count__28722_28744 = (0);
var i__28723_28745 = (0);
while(true){
if((i__28723_28745 < count__28722_28744)){
var f_28746 = cljs.core._nth.call(null,chunk__28721_28743,i__28723_28745);
cljs.core.println.call(null,"  ",f_28746);


var G__28747 = seq__28720_28742;
var G__28748 = chunk__28721_28743;
var G__28749 = count__28722_28744;
var G__28750 = (i__28723_28745 + (1));
seq__28720_28742 = G__28747;
chunk__28721_28743 = G__28748;
count__28722_28744 = G__28749;
i__28723_28745 = G__28750;
continue;
} else {
var temp__5457__auto___28751 = cljs.core.seq.call(null,seq__28720_28742);
if(temp__5457__auto___28751){
var seq__28720_28752__$1 = temp__5457__auto___28751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28720_28752__$1)){
var c__4319__auto___28753 = cljs.core.chunk_first.call(null,seq__28720_28752__$1);
var G__28754 = cljs.core.chunk_rest.call(null,seq__28720_28752__$1);
var G__28755 = c__4319__auto___28753;
var G__28756 = cljs.core.count.call(null,c__4319__auto___28753);
var G__28757 = (0);
seq__28720_28742 = G__28754;
chunk__28721_28743 = G__28755;
count__28722_28744 = G__28756;
i__28723_28745 = G__28757;
continue;
} else {
var f_28758 = cljs.core.first.call(null,seq__28720_28752__$1);
cljs.core.println.call(null,"  ",f_28758);


var G__28759 = cljs.core.next.call(null,seq__28720_28752__$1);
var G__28760 = null;
var G__28761 = (0);
var G__28762 = (0);
seq__28720_28742 = G__28759;
chunk__28721_28743 = G__28760;
count__28722_28744 = G__28761;
i__28723_28745 = G__28762;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28763 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28763);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28763)))?cljs.core.second.call(null,arglists_28763):arglists_28763));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28724_28764 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28725_28765 = null;
var count__28726_28766 = (0);
var i__28727_28767 = (0);
while(true){
if((i__28727_28767 < count__28726_28766)){
var vec__28728_28768 = cljs.core._nth.call(null,chunk__28725_28765,i__28727_28767);
var name_28769 = cljs.core.nth.call(null,vec__28728_28768,(0),null);
var map__28731_28770 = cljs.core.nth.call(null,vec__28728_28768,(1),null);
var map__28731_28771__$1 = ((((!((map__28731_28770 == null)))?(((((map__28731_28770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28731_28770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28731_28770):map__28731_28770);
var doc_28772 = cljs.core.get.call(null,map__28731_28771__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28773 = cljs.core.get.call(null,map__28731_28771__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28769);

cljs.core.println.call(null," ",arglists_28773);

if(cljs.core.truth_(doc_28772)){
cljs.core.println.call(null," ",doc_28772);
} else {
}


var G__28774 = seq__28724_28764;
var G__28775 = chunk__28725_28765;
var G__28776 = count__28726_28766;
var G__28777 = (i__28727_28767 + (1));
seq__28724_28764 = G__28774;
chunk__28725_28765 = G__28775;
count__28726_28766 = G__28776;
i__28727_28767 = G__28777;
continue;
} else {
var temp__5457__auto___28778 = cljs.core.seq.call(null,seq__28724_28764);
if(temp__5457__auto___28778){
var seq__28724_28779__$1 = temp__5457__auto___28778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28724_28779__$1)){
var c__4319__auto___28780 = cljs.core.chunk_first.call(null,seq__28724_28779__$1);
var G__28781 = cljs.core.chunk_rest.call(null,seq__28724_28779__$1);
var G__28782 = c__4319__auto___28780;
var G__28783 = cljs.core.count.call(null,c__4319__auto___28780);
var G__28784 = (0);
seq__28724_28764 = G__28781;
chunk__28725_28765 = G__28782;
count__28726_28766 = G__28783;
i__28727_28767 = G__28784;
continue;
} else {
var vec__28733_28785 = cljs.core.first.call(null,seq__28724_28779__$1);
var name_28786 = cljs.core.nth.call(null,vec__28733_28785,(0),null);
var map__28736_28787 = cljs.core.nth.call(null,vec__28733_28785,(1),null);
var map__28736_28788__$1 = ((((!((map__28736_28787 == null)))?(((((map__28736_28787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28736_28787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28736_28787):map__28736_28787);
var doc_28789 = cljs.core.get.call(null,map__28736_28788__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28790 = cljs.core.get.call(null,map__28736_28788__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28786);

cljs.core.println.call(null," ",arglists_28790);

if(cljs.core.truth_(doc_28789)){
cljs.core.println.call(null," ",doc_28789);
} else {
}


var G__28791 = cljs.core.next.call(null,seq__28724_28779__$1);
var G__28792 = null;
var G__28793 = (0);
var G__28794 = (0);
seq__28724_28764 = G__28791;
chunk__28725_28765 = G__28792;
count__28726_28766 = G__28793;
i__28727_28767 = G__28794;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__28738 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28739 = null;
var count__28740 = (0);
var i__28741 = (0);
while(true){
if((i__28741 < count__28740)){
var role = cljs.core._nth.call(null,chunk__28739,i__28741);
var temp__5457__auto___28795__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28795__$1)){
var spec_28796 = temp__5457__auto___28795__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28796));
} else {
}


var G__28797 = seq__28738;
var G__28798 = chunk__28739;
var G__28799 = count__28740;
var G__28800 = (i__28741 + (1));
seq__28738 = G__28797;
chunk__28739 = G__28798;
count__28740 = G__28799;
i__28741 = G__28800;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__28738);
if(temp__5457__auto____$1){
var seq__28738__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28738__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28738__$1);
var G__28801 = cljs.core.chunk_rest.call(null,seq__28738__$1);
var G__28802 = c__4319__auto__;
var G__28803 = cljs.core.count.call(null,c__4319__auto__);
var G__28804 = (0);
seq__28738 = G__28801;
chunk__28739 = G__28802;
count__28740 = G__28803;
i__28741 = G__28804;
continue;
} else {
var role = cljs.core.first.call(null,seq__28738__$1);
var temp__5457__auto___28805__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28805__$2)){
var spec_28806 = temp__5457__auto___28805__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28806));
} else {
}


var G__28807 = cljs.core.next.call(null,seq__28738__$1);
var G__28808 = null;
var G__28809 = (0);
var G__28810 = (0);
seq__28738 = G__28807;
chunk__28739 = G__28808;
count__28740 = G__28809;
i__28741 = G__28810;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1527040037536
