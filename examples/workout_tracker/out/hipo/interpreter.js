// Compiled by ClojureScript 1.10.238 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__21813){
var map__21814 = p__21813;
var map__21814__$1 = ((((!((map__21814 == null)))?(((((map__21814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21814):map__21814);
var m = map__21814__$1;
var interceptors = cljs.core.get.call(null,map__21814__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var temp__5455__auto__ = hipo.hiccup.listener_name__GT_event_name.call(null,cljs.core.name.call(null,sok));
if(cljs.core.truth_(temp__5455__auto__)){
var en = temp__5455__auto__;
if(!(((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv)))))){
var b__21734__auto__ = ((function (en,temp__5455__auto__,map__21814,map__21814__$1,m,interceptors){
return (function (){
var hn = ["hipo_listener_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(en)].join('');
var temp__5455__auto___21816__$1 = (el[hn]);
if(cljs.core.truth_(temp__5455__auto___21816__$1)){
var l_21817 = temp__5455__auto___21816__$1;
el.removeEventListener(en,l_21817);
} else {
}

var temp__5457__auto__ = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(nv);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return nv;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var nv__$1 = temp__5457__auto__;
el.addEventListener(en,nv__$1);

return (el[hn] = nv__$1);
} else {
return null;
}
});})(en,temp__5455__auto__,map__21814,map__21814__$1,m,interceptors))
;
var v__21735__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21735__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto__)))){
return b__21734__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21734__auto__,v__21735__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__21734__auto__ = ((function (temp__5455__auto__,map__21814,map__21814__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,sok,ov,nv);
});})(temp__5455__auto__,map__21814,map__21814__$1,m,interceptors))
;
var v__21735__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21735__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto__)))){
return b__21734__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21734__auto__,v__21735__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
}
} else {
return null;
}
});
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v,m){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var v__$1 = hipo.hiccup.flatten_children.call(null,v);
while(true){
if(cljs.core.empty_QMARK_.call(null,v__$1)){
return null;
} else {
var temp__5455__auto___21818 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__5455__auto___21818)){
var h_21819 = temp__5455__auto___21818;
el.appendChild(hipo.interpreter.create_child.call(null,h_21819,m));
} else {
}

var G__21820 = cljs.core.rest.call(null,v__$1);
v__$1 = G__21820;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__21821_21831 = cljs.core.seq.call(null,attrs);
var chunk__21822_21832 = null;
var count__21823_21833 = (0);
var i__21824_21834 = (0);
while(true){
if((i__21824_21834 < count__21823_21833)){
var vec__21825_21835 = cljs.core._nth.call(null,chunk__21822_21832,i__21824_21834);
var sok_21836 = cljs.core.nth.call(null,vec__21825_21835,(0),null);
var v_21837 = cljs.core.nth.call(null,vec__21825_21835,(1),null);
if(cljs.core.truth_(v_21837)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_21836,null,v_21837,m);
} else {
}


var G__21838 = seq__21821_21831;
var G__21839 = chunk__21822_21832;
var G__21840 = count__21823_21833;
var G__21841 = (i__21824_21834 + (1));
seq__21821_21831 = G__21838;
chunk__21822_21832 = G__21839;
count__21823_21833 = G__21840;
i__21824_21834 = G__21841;
continue;
} else {
var temp__5457__auto___21842 = cljs.core.seq.call(null,seq__21821_21831);
if(temp__5457__auto___21842){
var seq__21821_21843__$1 = temp__5457__auto___21842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21821_21843__$1)){
var c__4319__auto___21844 = cljs.core.chunk_first.call(null,seq__21821_21843__$1);
var G__21845 = cljs.core.chunk_rest.call(null,seq__21821_21843__$1);
var G__21846 = c__4319__auto___21844;
var G__21847 = cljs.core.count.call(null,c__4319__auto___21844);
var G__21848 = (0);
seq__21821_21831 = G__21845;
chunk__21822_21832 = G__21846;
count__21823_21833 = G__21847;
i__21824_21834 = G__21848;
continue;
} else {
var vec__21828_21849 = cljs.core.first.call(null,seq__21821_21843__$1);
var sok_21850 = cljs.core.nth.call(null,vec__21828_21849,(0),null);
var v_21851 = cljs.core.nth.call(null,vec__21828_21849,(1),null);
if(cljs.core.truth_(v_21851)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_21850,null,v_21851,m);
} else {
}


var G__21852 = cljs.core.next.call(null,seq__21821_21843__$1);
var G__21853 = null;
var G__21854 = (0);
var G__21855 = (0);
seq__21821_21831 = G__21852;
chunk__21822_21832 = G__21853;
count__21823_21833 = G__21854;
i__21824_21834 = G__21855;
continue;
}
} else {
}
}
break;
}

return el;
});
hipo.interpreter.create_element = (function hipo$interpreter$create_element(ns,tag,attrs,m){
var temp__5455__auto__ = new cljs.core.Keyword(null,"create-element-fn","create-element-fn",827380427).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,ns,tag,attrs,m);
} else {
return hipo.interpreter.default_create_element.call(null,ns,tag,attrs,m);
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h,m){
if(cljs.core.vector_QMARK_.call(null,h)){
} else {
throw (new Error("Assert failed: (vector? h)"));
}

var key = hipo.hiccup.keyns.call(null,h);
var tag = hipo.hiccup.tag.call(null,h);
var attrs = hipo.hiccup.attributes.call(null,h);
var children = hipo.hiccup.children.call(null,h);
var el = hipo.interpreter.create_element.call(null,hipo.hiccup.key__GT_namespace.call(null,key,m),tag,attrs,m);
if(cljs.core.truth_(children)){
hipo.interpreter.append_children_BANG_.call(null,el,children,m);
} else {
}

return el;
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o,m){
if(cljs.core.truth_((function (){var or__3922__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.vector_QMARK_.call(null,o);
}
})())){
} else {
throw (new Error("Assert failed: (or (hic/literal? o) (vector? o))"));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,o))){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector.call(null,o,m);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
return hipo.interpreter.append_children_BANG_.call(null,el,cljs.core.vec.call(null,o),m);
} else {
if(!((o == null))){
return el.appendChild(hipo.interpreter.create_child.call(null,o,m));
} else {
return null;
}
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_.call(null,f,cljs.core.vec.call(null,o),m);

return f;
} else {
if(!((o == null))){
return hipo.interpreter.create_child.call(null,o,m);
} else {
return null;
}
}
});
hipo.interpreter.reconciliate_attributes_BANG_ = (function hipo$interpreter$reconciliate_attributes_BANG_(el,ns,tag,om,nm,m){
var seq__21856_21872 = cljs.core.seq.call(null,nm);
var chunk__21858_21873 = null;
var count__21859_21874 = (0);
var i__21860_21875 = (0);
while(true){
if((i__21860_21875 < count__21859_21874)){
var vec__21862_21876 = cljs.core._nth.call(null,chunk__21858_21873,i__21860_21875);
var sok_21877 = cljs.core.nth.call(null,vec__21862_21876,(0),null);
var nv_21878 = cljs.core.nth.call(null,vec__21862_21876,(1),null);
var ov_21879 = cljs.core.get.call(null,om,sok_21877);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_21877,ov_21879,nv_21878,m);


var G__21880 = seq__21856_21872;
var G__21881 = chunk__21858_21873;
var G__21882 = count__21859_21874;
var G__21883 = (i__21860_21875 + (1));
seq__21856_21872 = G__21880;
chunk__21858_21873 = G__21881;
count__21859_21874 = G__21882;
i__21860_21875 = G__21883;
continue;
} else {
var temp__5457__auto___21884 = cljs.core.seq.call(null,seq__21856_21872);
if(temp__5457__auto___21884){
var seq__21856_21885__$1 = temp__5457__auto___21884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21856_21885__$1)){
var c__4319__auto___21886 = cljs.core.chunk_first.call(null,seq__21856_21885__$1);
var G__21887 = cljs.core.chunk_rest.call(null,seq__21856_21885__$1);
var G__21888 = c__4319__auto___21886;
var G__21889 = cljs.core.count.call(null,c__4319__auto___21886);
var G__21890 = (0);
seq__21856_21872 = G__21887;
chunk__21858_21873 = G__21888;
count__21859_21874 = G__21889;
i__21860_21875 = G__21890;
continue;
} else {
var vec__21865_21891 = cljs.core.first.call(null,seq__21856_21885__$1);
var sok_21892 = cljs.core.nth.call(null,vec__21865_21891,(0),null);
var nv_21893 = cljs.core.nth.call(null,vec__21865_21891,(1),null);
var ov_21894 = cljs.core.get.call(null,om,sok_21892);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_21892,ov_21894,nv_21893,m);


var G__21895 = cljs.core.next.call(null,seq__21856_21885__$1);
var G__21896 = null;
var G__21897 = (0);
var G__21898 = (0);
seq__21856_21872 = G__21895;
chunk__21858_21873 = G__21896;
count__21859_21874 = G__21897;
i__21860_21875 = G__21898;
continue;
}
} else {
}
}
break;
}

var seq__21868 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__21869 = null;
var count__21870 = (0);
var i__21871 = (0);
while(true){
if((i__21871 < count__21870)){
var sok = cljs.core._nth.call(null,chunk__21869,i__21871);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__21899 = seq__21868;
var G__21900 = chunk__21869;
var G__21901 = count__21870;
var G__21902 = (i__21871 + (1));
seq__21868 = G__21899;
chunk__21869 = G__21900;
count__21870 = G__21901;
i__21871 = G__21902;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__21868);
if(temp__5457__auto__){
var seq__21868__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21868__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21868__$1);
var G__21903 = cljs.core.chunk_rest.call(null,seq__21868__$1);
var G__21904 = c__4319__auto__;
var G__21905 = cljs.core.count.call(null,c__4319__auto__);
var G__21906 = (0);
seq__21868 = G__21903;
chunk__21869 = G__21904;
count__21870 = G__21905;
i__21871 = G__21906;
continue;
} else {
var sok = cljs.core.first.call(null,seq__21868__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__21907 = cljs.core.next.call(null,seq__21868__$1);
var G__21908 = null;
var G__21909 = (0);
var G__21910 = (0);
seq__21868 = G__21907;
chunk__21869 = G__21908;
count__21870 = G__21909;
i__21871 = G__21910;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return new cljs.core.Keyword("hipo","key","hipo/key",-1519246363).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,h));
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__21911(s__21912){
return (new cljs.core.LazySeq(null,(function (){
var s__21912__$1 = s__21912;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__21912__$1);
if(temp__5457__auto__){
var s__21912__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21912__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__21912__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__21914 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__21913 = (0);
while(true){
if((i__21913 < size__4291__auto__)){
var ih = cljs.core._nth.call(null,c__4290__auto__,i__21913);
cljs.core.chunk_append.call(null,b__21914,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__21915 = (i__21913 + (1));
i__21913 = G__21915;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21914),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__21911.call(null,cljs.core.chunk_rest.call(null,s__21912__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21914),null);
}
} else {
var ih = cljs.core.first.call(null,s__21912__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__21911.call(null,cljs.core.rest.call(null,s__21912__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__4292__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__4292__auto__))
,v));
})());
});
/**
 * Reconciliate a vector of children based on their associated key.
 */
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__21916){
var map__21917 = p__21916;
var map__21917__$1 = ((((!((map__21917 == null)))?(((((map__21917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21917):map__21917);
var m = map__21917__$1;
var interceptors = cljs.core.get.call(null,map__21917__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__21919_21941 = cljs.core.seq.call(null,nm);
var chunk__21920_21942 = null;
var count__21921_21943 = (0);
var i__21922_21944 = (0);
while(true){
if((i__21922_21944 < count__21921_21943)){
var vec__21923_21945 = cljs.core._nth.call(null,chunk__21920_21942,i__21922_21944);
var i_21946 = cljs.core.nth.call(null,vec__21923_21945,(0),null);
var vec__21926_21947 = cljs.core.nth.call(null,vec__21923_21945,(1),null);
var ii_21948 = cljs.core.nth.call(null,vec__21926_21947,(0),null);
var h_21949 = cljs.core.nth.call(null,vec__21926_21947,(1),null);
var temp__5455__auto___21950 = cljs.core.get.call(null,om,i_21946);
if(cljs.core.truth_(temp__5455__auto___21950)){
var vec__21929_21951 = temp__5455__auto___21950;
var iii_21952 = cljs.core.nth.call(null,vec__21929_21951,(0),null);
var oh_21953 = cljs.core.nth.call(null,vec__21929_21951,(1),null);
var cel_21954 = cljs.core.nth.call(null,cs,iii_21952);
if((ii_21948 === iii_21952)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_21954,oh_21953,h_21949,m);
} else {
var b__21734__auto___21955 = ((function (seq__21919_21941,chunk__21920_21942,count__21921_21943,i__21922_21944,cel_21954,vec__21929_21951,iii_21952,oh_21953,temp__5455__auto___21950,vec__21923_21945,i_21946,vec__21926_21947,ii_21948,h_21949,om,nm,cs,map__21917,map__21917__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_21954);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_21953,h_21949,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_21948,ncel);
});})(seq__21919_21941,chunk__21920_21942,count__21921_21943,i__21922_21944,cel_21954,vec__21929_21951,iii_21952,oh_21953,temp__5455__auto___21950,vec__21923_21945,i_21946,vec__21926_21947,ii_21948,h_21949,om,nm,cs,map__21917,map__21917__$1,m,interceptors))
;
var v__21735__auto___21956 = interceptors;
if(((cljs.core.not.call(null,v__21735__auto___21956)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto___21956)))){
b__21734__auto___21955.call(null);
} else {
hipo.interceptor.call.call(null,b__21734__auto___21955,v__21735__auto___21956,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_21949,new cljs.core.Keyword(null,"index","index",-1531685915),ii_21948], null));
}
}
} else {
var b__21734__auto___21957 = ((function (seq__21919_21941,chunk__21920_21942,count__21921_21943,i__21922_21944,temp__5455__auto___21950,vec__21923_21945,i_21946,vec__21926_21947,ii_21948,h_21949,om,nm,cs,map__21917,map__21917__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_21948,hipo.interpreter.create_child.call(null,h_21949,m));
});})(seq__21919_21941,chunk__21920_21942,count__21921_21943,i__21922_21944,temp__5455__auto___21950,vec__21923_21945,i_21946,vec__21926_21947,ii_21948,h_21949,om,nm,cs,map__21917,map__21917__$1,m,interceptors))
;
var v__21735__auto___21958 = interceptors;
if(((cljs.core.not.call(null,v__21735__auto___21958)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto___21958)))){
b__21734__auto___21957.call(null);
} else {
hipo.interceptor.call.call(null,b__21734__auto___21957,v__21735__auto___21958,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_21949,new cljs.core.Keyword(null,"index","index",-1531685915),ii_21948], null));
}
}


var G__21959 = seq__21919_21941;
var G__21960 = chunk__21920_21942;
var G__21961 = count__21921_21943;
var G__21962 = (i__21922_21944 + (1));
seq__21919_21941 = G__21959;
chunk__21920_21942 = G__21960;
count__21921_21943 = G__21961;
i__21922_21944 = G__21962;
continue;
} else {
var temp__5457__auto___21963 = cljs.core.seq.call(null,seq__21919_21941);
if(temp__5457__auto___21963){
var seq__21919_21964__$1 = temp__5457__auto___21963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21919_21964__$1)){
var c__4319__auto___21965 = cljs.core.chunk_first.call(null,seq__21919_21964__$1);
var G__21966 = cljs.core.chunk_rest.call(null,seq__21919_21964__$1);
var G__21967 = c__4319__auto___21965;
var G__21968 = cljs.core.count.call(null,c__4319__auto___21965);
var G__21969 = (0);
seq__21919_21941 = G__21966;
chunk__21920_21942 = G__21967;
count__21921_21943 = G__21968;
i__21922_21944 = G__21969;
continue;
} else {
var vec__21932_21970 = cljs.core.first.call(null,seq__21919_21964__$1);
var i_21971 = cljs.core.nth.call(null,vec__21932_21970,(0),null);
var vec__21935_21972 = cljs.core.nth.call(null,vec__21932_21970,(1),null);
var ii_21973 = cljs.core.nth.call(null,vec__21935_21972,(0),null);
var h_21974 = cljs.core.nth.call(null,vec__21935_21972,(1),null);
var temp__5455__auto___21975 = cljs.core.get.call(null,om,i_21971);
if(cljs.core.truth_(temp__5455__auto___21975)){
var vec__21938_21976 = temp__5455__auto___21975;
var iii_21977 = cljs.core.nth.call(null,vec__21938_21976,(0),null);
var oh_21978 = cljs.core.nth.call(null,vec__21938_21976,(1),null);
var cel_21979 = cljs.core.nth.call(null,cs,iii_21977);
if((ii_21973 === iii_21977)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_21979,oh_21978,h_21974,m);
} else {
var b__21734__auto___21980 = ((function (seq__21919_21941,chunk__21920_21942,count__21921_21943,i__21922_21944,cel_21979,vec__21938_21976,iii_21977,oh_21978,temp__5455__auto___21975,vec__21932_21970,i_21971,vec__21935_21972,ii_21973,h_21974,seq__21919_21964__$1,temp__5457__auto___21963,om,nm,cs,map__21917,map__21917__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_21979);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_21978,h_21974,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_21973,ncel);
});})(seq__21919_21941,chunk__21920_21942,count__21921_21943,i__21922_21944,cel_21979,vec__21938_21976,iii_21977,oh_21978,temp__5455__auto___21975,vec__21932_21970,i_21971,vec__21935_21972,ii_21973,h_21974,seq__21919_21964__$1,temp__5457__auto___21963,om,nm,cs,map__21917,map__21917__$1,m,interceptors))
;
var v__21735__auto___21981 = interceptors;
if(((cljs.core.not.call(null,v__21735__auto___21981)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto___21981)))){
b__21734__auto___21980.call(null);
} else {
hipo.interceptor.call.call(null,b__21734__auto___21980,v__21735__auto___21981,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_21974,new cljs.core.Keyword(null,"index","index",-1531685915),ii_21973], null));
}
}
} else {
var b__21734__auto___21982 = ((function (seq__21919_21941,chunk__21920_21942,count__21921_21943,i__21922_21944,temp__5455__auto___21975,vec__21932_21970,i_21971,vec__21935_21972,ii_21973,h_21974,seq__21919_21964__$1,temp__5457__auto___21963,om,nm,cs,map__21917,map__21917__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_21973,hipo.interpreter.create_child.call(null,h_21974,m));
});})(seq__21919_21941,chunk__21920_21942,count__21921_21943,i__21922_21944,temp__5455__auto___21975,vec__21932_21970,i_21971,vec__21935_21972,ii_21973,h_21974,seq__21919_21964__$1,temp__5457__auto___21963,om,nm,cs,map__21917,map__21917__$1,m,interceptors))
;
var v__21735__auto___21983 = interceptors;
if(((cljs.core.not.call(null,v__21735__auto___21983)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto___21983)))){
b__21734__auto___21982.call(null);
} else {
hipo.interceptor.call.call(null,b__21734__auto___21982,v__21735__auto___21983,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_21974,new cljs.core.Keyword(null,"index","index",-1531685915),ii_21973], null));
}
}


var G__21984 = cljs.core.next.call(null,seq__21919_21964__$1);
var G__21985 = null;
var G__21986 = (0);
var G__21987 = (0);
seq__21919_21941 = G__21984;
chunk__21920_21942 = G__21985;
count__21921_21943 = G__21986;
i__21922_21944 = G__21987;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__21734__auto__ = ((function (d,om,nm,cs,map__21917,map__21917__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__21917,map__21917__$1,m,interceptors))
;
var v__21735__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21735__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto__)))){
return b__21734__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21734__auto__,v__21735__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__21988){
var map__21989 = p__21988;
var map__21989__$1 = ((((!((map__21989 == null)))?(((((map__21989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21989):map__21989);
var m = map__21989__$1;
var interceptors = cljs.core.get.call(null,map__21989__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__21734__auto___21991 = ((function (oc,nc,d,map__21989,map__21989__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__21989,map__21989__$1,m,interceptors))
;
var v__21735__auto___21992 = interceptors;
if(((cljs.core.not.call(null,v__21735__auto___21992)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto___21992)))){
b__21734__auto___21991.call(null);
} else {
hipo.interceptor.call.call(null,b__21734__auto___21991,v__21735__auto___21992,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__4376__auto___21993 = (function (){var x__4009__auto__ = oc;
var y__4010__auto__ = nc;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var i_21994 = (0);
while(true){
if((i_21994 < n__4376__auto___21993)){
var ov_21995 = cljs.core.nth.call(null,och,i_21994);
var nv_21996 = cljs.core.nth.call(null,nch,i_21994);
if(!((((ov_21995 == null)) && ((nv_21996 == null))))){
if((ov_21995 == null)){
var b__21734__auto___21997 = ((function (i_21994,ov_21995,nv_21996,n__4376__auto___21993,oc,nc,d,map__21989,map__21989__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_21994,hipo.interpreter.create_child.call(null,nv_21996,m));
});})(i_21994,ov_21995,nv_21996,n__4376__auto___21993,oc,nc,d,map__21989,map__21989__$1,m,interceptors))
;
var v__21735__auto___21998 = interceptors;
if(((cljs.core.not.call(null,v__21735__auto___21998)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto___21998)))){
b__21734__auto___21997.call(null);
} else {
hipo.interceptor.call.call(null,b__21734__auto___21997,v__21735__auto___21998,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_21996,new cljs.core.Keyword(null,"index","index",-1531685915),i_21994], null));
}
} else {
if((nv_21996 == null)){
var b__21734__auto___21999 = ((function (i_21994,ov_21995,nv_21996,n__4376__auto___21993,oc,nc,d,map__21989,map__21989__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_21994);
});})(i_21994,ov_21995,nv_21996,n__4376__auto___21993,oc,nc,d,map__21989,map__21989__$1,m,interceptors))
;
var v__21735__auto___22000 = interceptors;
if(((cljs.core.not.call(null,v__21735__auto___22000)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto___22000)))){
b__21734__auto___21999.call(null);
} else {
hipo.interceptor.call.call(null,b__21734__auto___21999,v__21735__auto___22000,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_21994], null));
}
} else {
var temp__5455__auto___22001 = hipo.dom.child.call(null,el,i_21994);
if(cljs.core.truth_(temp__5455__auto___22001)){
var cel_22002 = temp__5455__auto___22001;
hipo.interpreter.reconciliate_BANG_.call(null,cel_22002,ov_21995,nv_21996,m);
} else {
}

}
}
} else {
}

var G__22003 = (i_21994 + (1));
i_21994 = G__22003;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var temp__5455__auto__ = cljs.core.nth.call(null,nch,oc);
if(cljs.core.truth_(temp__5455__auto__)){
var h = temp__5455__auto__;
var b__21734__auto__ = ((function (h,temp__5455__auto__,oc,nc,d,map__21989,map__21989__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__5455__auto__,oc,nc,d,map__21989,map__21989__$1,m,interceptors))
;
var v__21735__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21735__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto__)))){
return b__21734__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21734__auto__,v__21735__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__21734__auto___22004 = ((function (f,cs,oc,nc,d,map__21989,map__21989__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__21989,map__21989__$1,m,interceptors))
;
var v__21735__auto___22005 = interceptors;
if(((cljs.core.not.call(null,v__21735__auto___22005)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto___22005)))){
b__21734__auto___22004.call(null);
} else {
hipo.interceptor.call.call(null,b__21734__auto___22004,v__21735__auto___22005,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return !((hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,v,(0))) == null));
});
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__22006){
var map__22007 = p__22006;
var map__22007__$1 = ((((!((map__22007 == null)))?(((((map__22007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22007):map__22007);
var m = map__22007__$1;
var interceptors = cljs.core.get.call(null,map__22007__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__21734__auto__ = ((function (map__22007,map__22007__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__22007,map__22007__$1,m,interceptors))
;
var v__21735__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21735__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto__)))){
return b__21734__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21734__auto__,v__21735__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
}
} else {
return null;
}
} else {
if(cljs.core.truth_(hipo.interpreter.keyed_children_QMARK_.call(null,nch))){
return hipo.interpreter.reconciliate_keyed_children_BANG_.call(null,el,och,nch,m);
} else {
return hipo.interpreter.reconciliate_non_keyed_children_BANG_.call(null,el,och,nch,m);
}
}
});
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__22009){
var map__22010 = p__22009;
var map__22010__$1 = ((((!((map__22010 == null)))?(((((map__22010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22010):map__22010);
var m = map__22010__$1;
var interceptors = cljs.core.get.call(null,map__22010__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.vector_QMARK_.call(null,nh)){
} else {
throw (new Error("Assert failed: (vector? nh)"));
}

if(cljs.core.truth_((function (){var or__3922__auto__ = hipo.hiccup.literal_QMARK_.call(null,oh);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return !((hipo.hiccup.tag.call(null,nh) === hipo.hiccup.tag.call(null,oh)));
}
})())){
var nel = hipo.interpreter.create_child.call(null,nh,m);
var b__21734__auto__ = ((function (nel,map__22010,map__22010__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__22010,map__22010__$1,m,interceptors))
;
var v__21735__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21735__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto__)))){
return b__21734__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21734__auto__,v__21735__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__21734__auto___22012 = ((function (om,nm,och,nch,map__22010,map__22010__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__22010,map__22010__$1,m,interceptors))
;
var v__21735__auto___22013 = interceptors;
if(((cljs.core.not.call(null,v__21735__auto___22013)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto___22013)))){
b__21734__auto___22012.call(null);
} else {
hipo.interceptor.call.call(null,b__21734__auto___22012,v__21735__auto___22013,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__22014){
var map__22015 = p__22014;
var map__22015__$1 = ((((!((map__22015 == null)))?(((((map__22015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22015):map__22015);
var m = map__22015__$1;
var interceptors = cljs.core.get.call(null,map__22015__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.vector_QMARK_.call(null,nh);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,nh);
}
})())){
} else {
throw (new Error("Assert failed: (or (vector? nh) (hic/literal? nh))"));
}

if((((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

var b__21734__auto__ = ((function (map__22015,map__22015__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__21734__auto__ = ((function (map__22015,map__22015__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nh)].join(''));
});})(map__22015,map__22015__$1,m,interceptors))
;
var v__21735__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21735__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto__)))){
return b__21734__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21734__auto__,v__21735__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__22015,map__22015__$1,m,interceptors))
;
var v__21735__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21735__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21735__auto__)))){
return b__21734__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21734__auto__,v__21735__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map?rel=1527040031844
