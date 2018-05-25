// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24095 = arguments.length;
switch (G__24095) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24096 = (function (f,blockable,meta24097){
this.f = f;
this.blockable = blockable;
this.meta24097 = meta24097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24098,meta24097__$1){
var self__ = this;
var _24098__$1 = this;
return (new cljs.core.async.t_cljs$core$async24096(self__.f,self__.blockable,meta24097__$1));
});

cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24098){
var self__ = this;
var _24098__$1 = this;
return self__.meta24097;
});

cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24097","meta24097",352671266,null)], null);
});

cljs.core.async.t_cljs$core$async24096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24096";

cljs.core.async.t_cljs$core$async24096.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24096");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24096.
 */
cljs.core.async.__GT_t_cljs$core$async24096 = (function cljs$core$async$__GT_t_cljs$core$async24096(f__$1,blockable__$1,meta24097){
return (new cljs.core.async.t_cljs$core$async24096(f__$1,blockable__$1,meta24097));
});

}

return (new cljs.core.async.t_cljs$core$async24096(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24102 = arguments.length;
switch (G__24102) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24105 = arguments.length;
switch (G__24105) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24108 = arguments.length;
switch (G__24108) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24110 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24110);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24110,ret){
return (function (){
return fn1.call(null,val_24110);
});})(val_24110,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24112 = arguments.length;
switch (G__24112) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___24114 = n;
var x_24115 = (0);
while(true){
if((x_24115 < n__4376__auto___24114)){
(a[x_24115] = (0));

var G__24116 = (x_24115 + (1));
x_24115 = G__24116;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24117 = (i + (1));
i = G__24117;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24118 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24118 = (function (flag,meta24119){
this.flag = flag;
this.meta24119 = meta24119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24120,meta24119__$1){
var self__ = this;
var _24120__$1 = this;
return (new cljs.core.async.t_cljs$core$async24118(self__.flag,meta24119__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24120){
var self__ = this;
var _24120__$1 = this;
return self__.meta24119;
});})(flag))
;

cljs.core.async.t_cljs$core$async24118.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24118.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24119","meta24119",-425714269,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24118";

cljs.core.async.t_cljs$core$async24118.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24118");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24118.
 */
cljs.core.async.__GT_t_cljs$core$async24118 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24118(flag__$1,meta24119){
return (new cljs.core.async.t_cljs$core$async24118(flag__$1,meta24119));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24118(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24121 = (function (flag,cb,meta24122){
this.flag = flag;
this.cb = cb;
this.meta24122 = meta24122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24123,meta24122__$1){
var self__ = this;
var _24123__$1 = this;
return (new cljs.core.async.t_cljs$core$async24121(self__.flag,self__.cb,meta24122__$1));
});

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24123){
var self__ = this;
var _24123__$1 = this;
return self__.meta24122;
});

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24122","meta24122",353845817,null)], null);
});

cljs.core.async.t_cljs$core$async24121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24121";

cljs.core.async.t_cljs$core$async24121.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24121");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24121.
 */
cljs.core.async.__GT_t_cljs$core$async24121 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24121(flag__$1,cb__$1,meta24122){
return (new cljs.core.async.t_cljs$core$async24121(flag__$1,cb__$1,meta24122));
});

}

return (new cljs.core.async.t_cljs$core$async24121(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24124_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24124_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24125_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24125_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24126 = (i + (1));
i = G__24126;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24132 = arguments.length;
var i__4500__auto___24133 = (0);
while(true){
if((i__4500__auto___24133 < len__4499__auto___24132)){
args__4502__auto__.push((arguments[i__4500__auto___24133]));

var G__24134 = (i__4500__auto___24133 + (1));
i__4500__auto___24133 = G__24134;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24129){
var map__24130 = p__24129;
var map__24130__$1 = ((((!((map__24130 == null)))?(((((map__24130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24130):map__24130);
var opts = map__24130__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24127){
var G__24128 = cljs.core.first.call(null,seq24127);
var seq24127__$1 = cljs.core.next.call(null,seq24127);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24128,seq24127__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24136 = arguments.length;
switch (G__24136) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24035__auto___24182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___24182){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___24182){
return (function (state_24160){
var state_val_24161 = (state_24160[(1)]);
if((state_val_24161 === (7))){
var inst_24156 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
var statearr_24162_24183 = state_24160__$1;
(statearr_24162_24183[(2)] = inst_24156);

(statearr_24162_24183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (1))){
var state_24160__$1 = state_24160;
var statearr_24163_24184 = state_24160__$1;
(statearr_24163_24184[(2)] = null);

(statearr_24163_24184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (4))){
var inst_24139 = (state_24160[(7)]);
var inst_24139__$1 = (state_24160[(2)]);
var inst_24140 = (inst_24139__$1 == null);
var state_24160__$1 = (function (){var statearr_24164 = state_24160;
(statearr_24164[(7)] = inst_24139__$1);

return statearr_24164;
})();
if(cljs.core.truth_(inst_24140)){
var statearr_24165_24185 = state_24160__$1;
(statearr_24165_24185[(1)] = (5));

} else {
var statearr_24166_24186 = state_24160__$1;
(statearr_24166_24186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (13))){
var state_24160__$1 = state_24160;
var statearr_24167_24187 = state_24160__$1;
(statearr_24167_24187[(2)] = null);

(statearr_24167_24187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (6))){
var inst_24139 = (state_24160[(7)]);
var state_24160__$1 = state_24160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24160__$1,(11),to,inst_24139);
} else {
if((state_val_24161 === (3))){
var inst_24158 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24160__$1,inst_24158);
} else {
if((state_val_24161 === (12))){
var state_24160__$1 = state_24160;
var statearr_24168_24188 = state_24160__$1;
(statearr_24168_24188[(2)] = null);

(statearr_24168_24188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (2))){
var state_24160__$1 = state_24160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24160__$1,(4),from);
} else {
if((state_val_24161 === (11))){
var inst_24149 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
if(cljs.core.truth_(inst_24149)){
var statearr_24169_24189 = state_24160__$1;
(statearr_24169_24189[(1)] = (12));

} else {
var statearr_24170_24190 = state_24160__$1;
(statearr_24170_24190[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (9))){
var state_24160__$1 = state_24160;
var statearr_24171_24191 = state_24160__$1;
(statearr_24171_24191[(2)] = null);

(statearr_24171_24191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (5))){
var state_24160__$1 = state_24160;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24172_24192 = state_24160__$1;
(statearr_24172_24192[(1)] = (8));

} else {
var statearr_24173_24193 = state_24160__$1;
(statearr_24173_24193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (14))){
var inst_24154 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
var statearr_24174_24194 = state_24160__$1;
(statearr_24174_24194[(2)] = inst_24154);

(statearr_24174_24194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (10))){
var inst_24146 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
var statearr_24175_24195 = state_24160__$1;
(statearr_24175_24195[(2)] = inst_24146);

(statearr_24175_24195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (8))){
var inst_24143 = cljs.core.async.close_BANG_.call(null,to);
var state_24160__$1 = state_24160;
var statearr_24176_24196 = state_24160__$1;
(statearr_24176_24196[(2)] = inst_24143);

(statearr_24176_24196[(1)] = (10));


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
});})(c__24035__auto___24182))
;
return ((function (switch__23945__auto__,c__24035__auto___24182){
return (function() {
var cljs$core$async$state_machine__23946__auto__ = null;
var cljs$core$async$state_machine__23946__auto____0 = (function (){
var statearr_24177 = [null,null,null,null,null,null,null,null];
(statearr_24177[(0)] = cljs$core$async$state_machine__23946__auto__);

(statearr_24177[(1)] = (1));

return statearr_24177;
});
var cljs$core$async$state_machine__23946__auto____1 = (function (state_24160){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_24160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e24178){if((e24178 instanceof Object)){
var ex__23949__auto__ = e24178;
var statearr_24179_24197 = state_24160;
(statearr_24179_24197[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24198 = state_24160;
state_24160 = G__24198;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$state_machine__23946__auto__ = function(state_24160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23946__auto____1.call(this,state_24160);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23946__auto____0;
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23946__auto____1;
return cljs$core$async$state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___24182))
})();
var state__24037__auto__ = (function (){var statearr_24180 = f__24036__auto__.call(null);
(statearr_24180[(6)] = c__24035__auto___24182);

return statearr_24180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___24182))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24199){
var vec__24200 = p__24199;
var v = cljs.core.nth.call(null,vec__24200,(0),null);
var p = cljs.core.nth.call(null,vec__24200,(1),null);
var job = vec__24200;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24035__auto___24371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___24371,res,vec__24200,v,p,job,jobs,results){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___24371,res,vec__24200,v,p,job,jobs,results){
return (function (state_24207){
var state_val_24208 = (state_24207[(1)]);
if((state_val_24208 === (1))){
var state_24207__$1 = state_24207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24207__$1,(2),res,v);
} else {
if((state_val_24208 === (2))){
var inst_24204 = (state_24207[(2)]);
var inst_24205 = cljs.core.async.close_BANG_.call(null,res);
var state_24207__$1 = (function (){var statearr_24209 = state_24207;
(statearr_24209[(7)] = inst_24204);

return statearr_24209;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24207__$1,inst_24205);
} else {
return null;
}
}
});})(c__24035__auto___24371,res,vec__24200,v,p,job,jobs,results))
;
return ((function (switch__23945__auto__,c__24035__auto___24371,res,vec__24200,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____0 = (function (){
var statearr_24210 = [null,null,null,null,null,null,null,null];
(statearr_24210[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__);

(statearr_24210[(1)] = (1));

return statearr_24210;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____1 = (function (state_24207){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_24207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e24211){if((e24211 instanceof Object)){
var ex__23949__auto__ = e24211;
var statearr_24212_24372 = state_24207;
(statearr_24212_24372[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24373 = state_24207;
state_24207 = G__24373;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__ = function(state_24207){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____1.call(this,state_24207);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___24371,res,vec__24200,v,p,job,jobs,results))
})();
var state__24037__auto__ = (function (){var statearr_24213 = f__24036__auto__.call(null);
(statearr_24213[(6)] = c__24035__auto___24371);

return statearr_24213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___24371,res,vec__24200,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24214){
var vec__24215 = p__24214;
var v = cljs.core.nth.call(null,vec__24215,(0),null);
var p = cljs.core.nth.call(null,vec__24215,(1),null);
var job = vec__24215;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___24374 = n;
var __24375 = (0);
while(true){
if((__24375 < n__4376__auto___24374)){
var G__24218_24376 = type;
var G__24218_24377__$1 = (((G__24218_24376 instanceof cljs.core.Keyword))?G__24218_24376.fqn:null);
switch (G__24218_24377__$1) {
case "compute":
var c__24035__auto___24379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24375,c__24035__auto___24379,G__24218_24376,G__24218_24377__$1,n__4376__auto___24374,jobs,results,process,async){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (__24375,c__24035__auto___24379,G__24218_24376,G__24218_24377__$1,n__4376__auto___24374,jobs,results,process,async){
return (function (state_24231){
var state_val_24232 = (state_24231[(1)]);
if((state_val_24232 === (1))){
var state_24231__$1 = state_24231;
var statearr_24233_24380 = state_24231__$1;
(statearr_24233_24380[(2)] = null);

(statearr_24233_24380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24232 === (2))){
var state_24231__$1 = state_24231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24231__$1,(4),jobs);
} else {
if((state_val_24232 === (3))){
var inst_24229 = (state_24231[(2)]);
var state_24231__$1 = state_24231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24231__$1,inst_24229);
} else {
if((state_val_24232 === (4))){
var inst_24221 = (state_24231[(2)]);
var inst_24222 = process.call(null,inst_24221);
var state_24231__$1 = state_24231;
if(cljs.core.truth_(inst_24222)){
var statearr_24234_24381 = state_24231__$1;
(statearr_24234_24381[(1)] = (5));

} else {
var statearr_24235_24382 = state_24231__$1;
(statearr_24235_24382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24232 === (5))){
var state_24231__$1 = state_24231;
var statearr_24236_24383 = state_24231__$1;
(statearr_24236_24383[(2)] = null);

(statearr_24236_24383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24232 === (6))){
var state_24231__$1 = state_24231;
var statearr_24237_24384 = state_24231__$1;
(statearr_24237_24384[(2)] = null);

(statearr_24237_24384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24232 === (7))){
var inst_24227 = (state_24231[(2)]);
var state_24231__$1 = state_24231;
var statearr_24238_24385 = state_24231__$1;
(statearr_24238_24385[(2)] = inst_24227);

(statearr_24238_24385[(1)] = (3));


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
});})(__24375,c__24035__auto___24379,G__24218_24376,G__24218_24377__$1,n__4376__auto___24374,jobs,results,process,async))
;
return ((function (__24375,switch__23945__auto__,c__24035__auto___24379,G__24218_24376,G__24218_24377__$1,n__4376__auto___24374,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____0 = (function (){
var statearr_24239 = [null,null,null,null,null,null,null];
(statearr_24239[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__);

(statearr_24239[(1)] = (1));

return statearr_24239;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____1 = (function (state_24231){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_24231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e24240){if((e24240 instanceof Object)){
var ex__23949__auto__ = e24240;
var statearr_24241_24386 = state_24231;
(statearr_24241_24386[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24387 = state_24231;
state_24231 = G__24387;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__ = function(state_24231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____1.call(this,state_24231);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__;
})()
;})(__24375,switch__23945__auto__,c__24035__auto___24379,G__24218_24376,G__24218_24377__$1,n__4376__auto___24374,jobs,results,process,async))
})();
var state__24037__auto__ = (function (){var statearr_24242 = f__24036__auto__.call(null);
(statearr_24242[(6)] = c__24035__auto___24379);

return statearr_24242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(__24375,c__24035__auto___24379,G__24218_24376,G__24218_24377__$1,n__4376__auto___24374,jobs,results,process,async))
);


break;
case "async":
var c__24035__auto___24388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24375,c__24035__auto___24388,G__24218_24376,G__24218_24377__$1,n__4376__auto___24374,jobs,results,process,async){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (__24375,c__24035__auto___24388,G__24218_24376,G__24218_24377__$1,n__4376__auto___24374,jobs,results,process,async){
return (function (state_24255){
var state_val_24256 = (state_24255[(1)]);
if((state_val_24256 === (1))){
var state_24255__$1 = state_24255;
var statearr_24257_24389 = state_24255__$1;
(statearr_24257_24389[(2)] = null);

(statearr_24257_24389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (2))){
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24255__$1,(4),jobs);
} else {
if((state_val_24256 === (3))){
var inst_24253 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24255__$1,inst_24253);
} else {
if((state_val_24256 === (4))){
var inst_24245 = (state_24255[(2)]);
var inst_24246 = async.call(null,inst_24245);
var state_24255__$1 = state_24255;
if(cljs.core.truth_(inst_24246)){
var statearr_24258_24390 = state_24255__$1;
(statearr_24258_24390[(1)] = (5));

} else {
var statearr_24259_24391 = state_24255__$1;
(statearr_24259_24391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (5))){
var state_24255__$1 = state_24255;
var statearr_24260_24392 = state_24255__$1;
(statearr_24260_24392[(2)] = null);

(statearr_24260_24392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (6))){
var state_24255__$1 = state_24255;
var statearr_24261_24393 = state_24255__$1;
(statearr_24261_24393[(2)] = null);

(statearr_24261_24393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (7))){
var inst_24251 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24262_24394 = state_24255__$1;
(statearr_24262_24394[(2)] = inst_24251);

(statearr_24262_24394[(1)] = (3));


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
});})(__24375,c__24035__auto___24388,G__24218_24376,G__24218_24377__$1,n__4376__auto___24374,jobs,results,process,async))
;
return ((function (__24375,switch__23945__auto__,c__24035__auto___24388,G__24218_24376,G__24218_24377__$1,n__4376__auto___24374,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____0 = (function (){
var statearr_24263 = [null,null,null,null,null,null,null];
(statearr_24263[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__);

(statearr_24263[(1)] = (1));

return statearr_24263;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____1 = (function (state_24255){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_24255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e24264){if((e24264 instanceof Object)){
var ex__23949__auto__ = e24264;
var statearr_24265_24395 = state_24255;
(statearr_24265_24395[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24396 = state_24255;
state_24255 = G__24396;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__ = function(state_24255){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____1.call(this,state_24255);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__;
})()
;})(__24375,switch__23945__auto__,c__24035__auto___24388,G__24218_24376,G__24218_24377__$1,n__4376__auto___24374,jobs,results,process,async))
})();
var state__24037__auto__ = (function (){var statearr_24266 = f__24036__auto__.call(null);
(statearr_24266[(6)] = c__24035__auto___24388);

return statearr_24266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(__24375,c__24035__auto___24388,G__24218_24376,G__24218_24377__$1,n__4376__auto___24374,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24218_24377__$1)].join('')));

}

var G__24397 = (__24375 + (1));
__24375 = G__24397;
continue;
} else {
}
break;
}

var c__24035__auto___24398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___24398,jobs,results,process,async){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___24398,jobs,results,process,async){
return (function (state_24288){
var state_val_24289 = (state_24288[(1)]);
if((state_val_24289 === (1))){
var state_24288__$1 = state_24288;
var statearr_24290_24399 = state_24288__$1;
(statearr_24290_24399[(2)] = null);

(statearr_24290_24399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24289 === (2))){
var state_24288__$1 = state_24288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24288__$1,(4),from);
} else {
if((state_val_24289 === (3))){
var inst_24286 = (state_24288[(2)]);
var state_24288__$1 = state_24288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24288__$1,inst_24286);
} else {
if((state_val_24289 === (4))){
var inst_24269 = (state_24288[(7)]);
var inst_24269__$1 = (state_24288[(2)]);
var inst_24270 = (inst_24269__$1 == null);
var state_24288__$1 = (function (){var statearr_24291 = state_24288;
(statearr_24291[(7)] = inst_24269__$1);

return statearr_24291;
})();
if(cljs.core.truth_(inst_24270)){
var statearr_24292_24400 = state_24288__$1;
(statearr_24292_24400[(1)] = (5));

} else {
var statearr_24293_24401 = state_24288__$1;
(statearr_24293_24401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24289 === (5))){
var inst_24272 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24288__$1 = state_24288;
var statearr_24294_24402 = state_24288__$1;
(statearr_24294_24402[(2)] = inst_24272);

(statearr_24294_24402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24289 === (6))){
var inst_24269 = (state_24288[(7)]);
var inst_24274 = (state_24288[(8)]);
var inst_24274__$1 = cljs.core.async.chan.call(null,(1));
var inst_24275 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24276 = [inst_24269,inst_24274__$1];
var inst_24277 = (new cljs.core.PersistentVector(null,2,(5),inst_24275,inst_24276,null));
var state_24288__$1 = (function (){var statearr_24295 = state_24288;
(statearr_24295[(8)] = inst_24274__$1);

return statearr_24295;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24288__$1,(8),jobs,inst_24277);
} else {
if((state_val_24289 === (7))){
var inst_24284 = (state_24288[(2)]);
var state_24288__$1 = state_24288;
var statearr_24296_24403 = state_24288__$1;
(statearr_24296_24403[(2)] = inst_24284);

(statearr_24296_24403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24289 === (8))){
var inst_24274 = (state_24288[(8)]);
var inst_24279 = (state_24288[(2)]);
var state_24288__$1 = (function (){var statearr_24297 = state_24288;
(statearr_24297[(9)] = inst_24279);

return statearr_24297;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24288__$1,(9),results,inst_24274);
} else {
if((state_val_24289 === (9))){
var inst_24281 = (state_24288[(2)]);
var state_24288__$1 = (function (){var statearr_24298 = state_24288;
(statearr_24298[(10)] = inst_24281);

return statearr_24298;
})();
var statearr_24299_24404 = state_24288__$1;
(statearr_24299_24404[(2)] = null);

(statearr_24299_24404[(1)] = (2));


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
});})(c__24035__auto___24398,jobs,results,process,async))
;
return ((function (switch__23945__auto__,c__24035__auto___24398,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____0 = (function (){
var statearr_24300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__);

(statearr_24300[(1)] = (1));

return statearr_24300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____1 = (function (state_24288){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_24288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e24301){if((e24301 instanceof Object)){
var ex__23949__auto__ = e24301;
var statearr_24302_24405 = state_24288;
(statearr_24302_24405[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24406 = state_24288;
state_24288 = G__24406;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__ = function(state_24288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____1.call(this,state_24288);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___24398,jobs,results,process,async))
})();
var state__24037__auto__ = (function (){var statearr_24303 = f__24036__auto__.call(null);
(statearr_24303[(6)] = c__24035__auto___24398);

return statearr_24303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___24398,jobs,results,process,async))
);


var c__24035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto__,jobs,results,process,async){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto__,jobs,results,process,async){
return (function (state_24341){
var state_val_24342 = (state_24341[(1)]);
if((state_val_24342 === (7))){
var inst_24337 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24343_24407 = state_24341__$1;
(statearr_24343_24407[(2)] = inst_24337);

(statearr_24343_24407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (20))){
var state_24341__$1 = state_24341;
var statearr_24344_24408 = state_24341__$1;
(statearr_24344_24408[(2)] = null);

(statearr_24344_24408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (1))){
var state_24341__$1 = state_24341;
var statearr_24345_24409 = state_24341__$1;
(statearr_24345_24409[(2)] = null);

(statearr_24345_24409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (4))){
var inst_24306 = (state_24341[(7)]);
var inst_24306__$1 = (state_24341[(2)]);
var inst_24307 = (inst_24306__$1 == null);
var state_24341__$1 = (function (){var statearr_24346 = state_24341;
(statearr_24346[(7)] = inst_24306__$1);

return statearr_24346;
})();
if(cljs.core.truth_(inst_24307)){
var statearr_24347_24410 = state_24341__$1;
(statearr_24347_24410[(1)] = (5));

} else {
var statearr_24348_24411 = state_24341__$1;
(statearr_24348_24411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (15))){
var inst_24319 = (state_24341[(8)]);
var state_24341__$1 = state_24341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24341__$1,(18),to,inst_24319);
} else {
if((state_val_24342 === (21))){
var inst_24332 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24349_24412 = state_24341__$1;
(statearr_24349_24412[(2)] = inst_24332);

(statearr_24349_24412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (13))){
var inst_24334 = (state_24341[(2)]);
var state_24341__$1 = (function (){var statearr_24350 = state_24341;
(statearr_24350[(9)] = inst_24334);

return statearr_24350;
})();
var statearr_24351_24413 = state_24341__$1;
(statearr_24351_24413[(2)] = null);

(statearr_24351_24413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (6))){
var inst_24306 = (state_24341[(7)]);
var state_24341__$1 = state_24341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24341__$1,(11),inst_24306);
} else {
if((state_val_24342 === (17))){
var inst_24327 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
if(cljs.core.truth_(inst_24327)){
var statearr_24352_24414 = state_24341__$1;
(statearr_24352_24414[(1)] = (19));

} else {
var statearr_24353_24415 = state_24341__$1;
(statearr_24353_24415[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (3))){
var inst_24339 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24341__$1,inst_24339);
} else {
if((state_val_24342 === (12))){
var inst_24316 = (state_24341[(10)]);
var state_24341__$1 = state_24341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24341__$1,(14),inst_24316);
} else {
if((state_val_24342 === (2))){
var state_24341__$1 = state_24341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24341__$1,(4),results);
} else {
if((state_val_24342 === (19))){
var state_24341__$1 = state_24341;
var statearr_24354_24416 = state_24341__$1;
(statearr_24354_24416[(2)] = null);

(statearr_24354_24416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (11))){
var inst_24316 = (state_24341[(2)]);
var state_24341__$1 = (function (){var statearr_24355 = state_24341;
(statearr_24355[(10)] = inst_24316);

return statearr_24355;
})();
var statearr_24356_24417 = state_24341__$1;
(statearr_24356_24417[(2)] = null);

(statearr_24356_24417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (9))){
var state_24341__$1 = state_24341;
var statearr_24357_24418 = state_24341__$1;
(statearr_24357_24418[(2)] = null);

(statearr_24357_24418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (5))){
var state_24341__$1 = state_24341;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24358_24419 = state_24341__$1;
(statearr_24358_24419[(1)] = (8));

} else {
var statearr_24359_24420 = state_24341__$1;
(statearr_24359_24420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (14))){
var inst_24319 = (state_24341[(8)]);
var inst_24321 = (state_24341[(11)]);
var inst_24319__$1 = (state_24341[(2)]);
var inst_24320 = (inst_24319__$1 == null);
var inst_24321__$1 = cljs.core.not.call(null,inst_24320);
var state_24341__$1 = (function (){var statearr_24360 = state_24341;
(statearr_24360[(8)] = inst_24319__$1);

(statearr_24360[(11)] = inst_24321__$1);

return statearr_24360;
})();
if(inst_24321__$1){
var statearr_24361_24421 = state_24341__$1;
(statearr_24361_24421[(1)] = (15));

} else {
var statearr_24362_24422 = state_24341__$1;
(statearr_24362_24422[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (16))){
var inst_24321 = (state_24341[(11)]);
var state_24341__$1 = state_24341;
var statearr_24363_24423 = state_24341__$1;
(statearr_24363_24423[(2)] = inst_24321);

(statearr_24363_24423[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (10))){
var inst_24313 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24364_24424 = state_24341__$1;
(statearr_24364_24424[(2)] = inst_24313);

(statearr_24364_24424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (18))){
var inst_24324 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24365_24425 = state_24341__$1;
(statearr_24365_24425[(2)] = inst_24324);

(statearr_24365_24425[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (8))){
var inst_24310 = cljs.core.async.close_BANG_.call(null,to);
var state_24341__$1 = state_24341;
var statearr_24366_24426 = state_24341__$1;
(statearr_24366_24426[(2)] = inst_24310);

(statearr_24366_24426[(1)] = (10));


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
});})(c__24035__auto__,jobs,results,process,async))
;
return ((function (switch__23945__auto__,c__24035__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____0 = (function (){
var statearr_24367 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__);

(statearr_24367[(1)] = (1));

return statearr_24367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____1 = (function (state_24341){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_24341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e24368){if((e24368 instanceof Object)){
var ex__23949__auto__ = e24368;
var statearr_24369_24427 = state_24341;
(statearr_24369_24427[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24428 = state_24341;
state_24341 = G__24428;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__ = function(state_24341){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____1.call(this,state_24341);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23946__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto__,jobs,results,process,async))
})();
var state__24037__auto__ = (function (){var statearr_24370 = f__24036__auto__.call(null);
(statearr_24370[(6)] = c__24035__auto__);

return statearr_24370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto__,jobs,results,process,async))
);

return c__24035__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24430 = arguments.length;
switch (G__24430) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24433 = arguments.length;
switch (G__24433) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24436 = arguments.length;
switch (G__24436) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24035__auto___24485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___24485,tc,fc){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___24485,tc,fc){
return (function (state_24462){
var state_val_24463 = (state_24462[(1)]);
if((state_val_24463 === (7))){
var inst_24458 = (state_24462[(2)]);
var state_24462__$1 = state_24462;
var statearr_24464_24486 = state_24462__$1;
(statearr_24464_24486[(2)] = inst_24458);

(statearr_24464_24486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24463 === (1))){
var state_24462__$1 = state_24462;
var statearr_24465_24487 = state_24462__$1;
(statearr_24465_24487[(2)] = null);

(statearr_24465_24487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24463 === (4))){
var inst_24439 = (state_24462[(7)]);
var inst_24439__$1 = (state_24462[(2)]);
var inst_24440 = (inst_24439__$1 == null);
var state_24462__$1 = (function (){var statearr_24466 = state_24462;
(statearr_24466[(7)] = inst_24439__$1);

return statearr_24466;
})();
if(cljs.core.truth_(inst_24440)){
var statearr_24467_24488 = state_24462__$1;
(statearr_24467_24488[(1)] = (5));

} else {
var statearr_24468_24489 = state_24462__$1;
(statearr_24468_24489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24463 === (13))){
var state_24462__$1 = state_24462;
var statearr_24469_24490 = state_24462__$1;
(statearr_24469_24490[(2)] = null);

(statearr_24469_24490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24463 === (6))){
var inst_24439 = (state_24462[(7)]);
var inst_24445 = p.call(null,inst_24439);
var state_24462__$1 = state_24462;
if(cljs.core.truth_(inst_24445)){
var statearr_24470_24491 = state_24462__$1;
(statearr_24470_24491[(1)] = (9));

} else {
var statearr_24471_24492 = state_24462__$1;
(statearr_24471_24492[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24463 === (3))){
var inst_24460 = (state_24462[(2)]);
var state_24462__$1 = state_24462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24462__$1,inst_24460);
} else {
if((state_val_24463 === (12))){
var state_24462__$1 = state_24462;
var statearr_24472_24493 = state_24462__$1;
(statearr_24472_24493[(2)] = null);

(statearr_24472_24493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24463 === (2))){
var state_24462__$1 = state_24462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24462__$1,(4),ch);
} else {
if((state_val_24463 === (11))){
var inst_24439 = (state_24462[(7)]);
var inst_24449 = (state_24462[(2)]);
var state_24462__$1 = state_24462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24462__$1,(8),inst_24449,inst_24439);
} else {
if((state_val_24463 === (9))){
var state_24462__$1 = state_24462;
var statearr_24473_24494 = state_24462__$1;
(statearr_24473_24494[(2)] = tc);

(statearr_24473_24494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24463 === (5))){
var inst_24442 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24443 = cljs.core.async.close_BANG_.call(null,fc);
var state_24462__$1 = (function (){var statearr_24474 = state_24462;
(statearr_24474[(8)] = inst_24442);

return statearr_24474;
})();
var statearr_24475_24495 = state_24462__$1;
(statearr_24475_24495[(2)] = inst_24443);

(statearr_24475_24495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24463 === (14))){
var inst_24456 = (state_24462[(2)]);
var state_24462__$1 = state_24462;
var statearr_24476_24496 = state_24462__$1;
(statearr_24476_24496[(2)] = inst_24456);

(statearr_24476_24496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24463 === (10))){
var state_24462__$1 = state_24462;
var statearr_24477_24497 = state_24462__$1;
(statearr_24477_24497[(2)] = fc);

(statearr_24477_24497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24463 === (8))){
var inst_24451 = (state_24462[(2)]);
var state_24462__$1 = state_24462;
if(cljs.core.truth_(inst_24451)){
var statearr_24478_24498 = state_24462__$1;
(statearr_24478_24498[(1)] = (12));

} else {
var statearr_24479_24499 = state_24462__$1;
(statearr_24479_24499[(1)] = (13));

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
});})(c__24035__auto___24485,tc,fc))
;
return ((function (switch__23945__auto__,c__24035__auto___24485,tc,fc){
return (function() {
var cljs$core$async$state_machine__23946__auto__ = null;
var cljs$core$async$state_machine__23946__auto____0 = (function (){
var statearr_24480 = [null,null,null,null,null,null,null,null,null];
(statearr_24480[(0)] = cljs$core$async$state_machine__23946__auto__);

(statearr_24480[(1)] = (1));

return statearr_24480;
});
var cljs$core$async$state_machine__23946__auto____1 = (function (state_24462){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_24462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e24481){if((e24481 instanceof Object)){
var ex__23949__auto__ = e24481;
var statearr_24482_24500 = state_24462;
(statearr_24482_24500[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24501 = state_24462;
state_24462 = G__24501;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$state_machine__23946__auto__ = function(state_24462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23946__auto____1.call(this,state_24462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23946__auto____0;
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23946__auto____1;
return cljs$core$async$state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___24485,tc,fc))
})();
var state__24037__auto__ = (function (){var statearr_24483 = f__24036__auto__.call(null);
(statearr_24483[(6)] = c__24035__auto___24485);

return statearr_24483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___24485,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto__){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto__){
return (function (state_24522){
var state_val_24523 = (state_24522[(1)]);
if((state_val_24523 === (7))){
var inst_24518 = (state_24522[(2)]);
var state_24522__$1 = state_24522;
var statearr_24524_24542 = state_24522__$1;
(statearr_24524_24542[(2)] = inst_24518);

(statearr_24524_24542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (1))){
var inst_24502 = init;
var state_24522__$1 = (function (){var statearr_24525 = state_24522;
(statearr_24525[(7)] = inst_24502);

return statearr_24525;
})();
var statearr_24526_24543 = state_24522__$1;
(statearr_24526_24543[(2)] = null);

(statearr_24526_24543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (4))){
var inst_24505 = (state_24522[(8)]);
var inst_24505__$1 = (state_24522[(2)]);
var inst_24506 = (inst_24505__$1 == null);
var state_24522__$1 = (function (){var statearr_24527 = state_24522;
(statearr_24527[(8)] = inst_24505__$1);

return statearr_24527;
})();
if(cljs.core.truth_(inst_24506)){
var statearr_24528_24544 = state_24522__$1;
(statearr_24528_24544[(1)] = (5));

} else {
var statearr_24529_24545 = state_24522__$1;
(statearr_24529_24545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (6))){
var inst_24509 = (state_24522[(9)]);
var inst_24502 = (state_24522[(7)]);
var inst_24505 = (state_24522[(8)]);
var inst_24509__$1 = f.call(null,inst_24502,inst_24505);
var inst_24510 = cljs.core.reduced_QMARK_.call(null,inst_24509__$1);
var state_24522__$1 = (function (){var statearr_24530 = state_24522;
(statearr_24530[(9)] = inst_24509__$1);

return statearr_24530;
})();
if(inst_24510){
var statearr_24531_24546 = state_24522__$1;
(statearr_24531_24546[(1)] = (8));

} else {
var statearr_24532_24547 = state_24522__$1;
(statearr_24532_24547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (3))){
var inst_24520 = (state_24522[(2)]);
var state_24522__$1 = state_24522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24522__$1,inst_24520);
} else {
if((state_val_24523 === (2))){
var state_24522__$1 = state_24522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24522__$1,(4),ch);
} else {
if((state_val_24523 === (9))){
var inst_24509 = (state_24522[(9)]);
var inst_24502 = inst_24509;
var state_24522__$1 = (function (){var statearr_24533 = state_24522;
(statearr_24533[(7)] = inst_24502);

return statearr_24533;
})();
var statearr_24534_24548 = state_24522__$1;
(statearr_24534_24548[(2)] = null);

(statearr_24534_24548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (5))){
var inst_24502 = (state_24522[(7)]);
var state_24522__$1 = state_24522;
var statearr_24535_24549 = state_24522__$1;
(statearr_24535_24549[(2)] = inst_24502);

(statearr_24535_24549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (10))){
var inst_24516 = (state_24522[(2)]);
var state_24522__$1 = state_24522;
var statearr_24536_24550 = state_24522__$1;
(statearr_24536_24550[(2)] = inst_24516);

(statearr_24536_24550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24523 === (8))){
var inst_24509 = (state_24522[(9)]);
var inst_24512 = cljs.core.deref.call(null,inst_24509);
var state_24522__$1 = state_24522;
var statearr_24537_24551 = state_24522__$1;
(statearr_24537_24551[(2)] = inst_24512);

(statearr_24537_24551[(1)] = (10));


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
});})(c__24035__auto__))
;
return ((function (switch__23945__auto__,c__24035__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23946__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23946__auto____0 = (function (){
var statearr_24538 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24538[(0)] = cljs$core$async$reduce_$_state_machine__23946__auto__);

(statearr_24538[(1)] = (1));

return statearr_24538;
});
var cljs$core$async$reduce_$_state_machine__23946__auto____1 = (function (state_24522){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_24522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e24539){if((e24539 instanceof Object)){
var ex__23949__auto__ = e24539;
var statearr_24540_24552 = state_24522;
(statearr_24540_24552[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24553 = state_24522;
state_24522 = G__24553;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23946__auto__ = function(state_24522){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23946__auto____1.call(this,state_24522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23946__auto____0;
cljs$core$async$reduce_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23946__auto____1;
return cljs$core$async$reduce_$_state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto__))
})();
var state__24037__auto__ = (function (){var statearr_24541 = f__24036__auto__.call(null);
(statearr_24541[(6)] = c__24035__auto__);

return statearr_24541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto__))
);

return c__24035__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto__,f__$1){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto__,f__$1){
return (function (state_24559){
var state_val_24560 = (state_24559[(1)]);
if((state_val_24560 === (1))){
var inst_24554 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24559__$1 = state_24559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24559__$1,(2),inst_24554);
} else {
if((state_val_24560 === (2))){
var inst_24556 = (state_24559[(2)]);
var inst_24557 = f__$1.call(null,inst_24556);
var state_24559__$1 = state_24559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24559__$1,inst_24557);
} else {
return null;
}
}
});})(c__24035__auto__,f__$1))
;
return ((function (switch__23945__auto__,c__24035__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23946__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23946__auto____0 = (function (){
var statearr_24561 = [null,null,null,null,null,null,null];
(statearr_24561[(0)] = cljs$core$async$transduce_$_state_machine__23946__auto__);

(statearr_24561[(1)] = (1));

return statearr_24561;
});
var cljs$core$async$transduce_$_state_machine__23946__auto____1 = (function (state_24559){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_24559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e24562){if((e24562 instanceof Object)){
var ex__23949__auto__ = e24562;
var statearr_24563_24565 = state_24559;
(statearr_24563_24565[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24566 = state_24559;
state_24559 = G__24566;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23946__auto__ = function(state_24559){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23946__auto____1.call(this,state_24559);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23946__auto____0;
cljs$core$async$transduce_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23946__auto____1;
return cljs$core$async$transduce_$_state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto__,f__$1))
})();
var state__24037__auto__ = (function (){var statearr_24564 = f__24036__auto__.call(null);
(statearr_24564[(6)] = c__24035__auto__);

return statearr_24564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto__,f__$1))
);

return c__24035__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24568 = arguments.length;
switch (G__24568) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto__){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto__){
return (function (state_24593){
var state_val_24594 = (state_24593[(1)]);
if((state_val_24594 === (7))){
var inst_24575 = (state_24593[(2)]);
var state_24593__$1 = state_24593;
var statearr_24595_24616 = state_24593__$1;
(statearr_24595_24616[(2)] = inst_24575);

(statearr_24595_24616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24594 === (1))){
var inst_24569 = cljs.core.seq.call(null,coll);
var inst_24570 = inst_24569;
var state_24593__$1 = (function (){var statearr_24596 = state_24593;
(statearr_24596[(7)] = inst_24570);

return statearr_24596;
})();
var statearr_24597_24617 = state_24593__$1;
(statearr_24597_24617[(2)] = null);

(statearr_24597_24617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24594 === (4))){
var inst_24570 = (state_24593[(7)]);
var inst_24573 = cljs.core.first.call(null,inst_24570);
var state_24593__$1 = state_24593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24593__$1,(7),ch,inst_24573);
} else {
if((state_val_24594 === (13))){
var inst_24587 = (state_24593[(2)]);
var state_24593__$1 = state_24593;
var statearr_24598_24618 = state_24593__$1;
(statearr_24598_24618[(2)] = inst_24587);

(statearr_24598_24618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24594 === (6))){
var inst_24578 = (state_24593[(2)]);
var state_24593__$1 = state_24593;
if(cljs.core.truth_(inst_24578)){
var statearr_24599_24619 = state_24593__$1;
(statearr_24599_24619[(1)] = (8));

} else {
var statearr_24600_24620 = state_24593__$1;
(statearr_24600_24620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24594 === (3))){
var inst_24591 = (state_24593[(2)]);
var state_24593__$1 = state_24593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24593__$1,inst_24591);
} else {
if((state_val_24594 === (12))){
var state_24593__$1 = state_24593;
var statearr_24601_24621 = state_24593__$1;
(statearr_24601_24621[(2)] = null);

(statearr_24601_24621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24594 === (2))){
var inst_24570 = (state_24593[(7)]);
var state_24593__$1 = state_24593;
if(cljs.core.truth_(inst_24570)){
var statearr_24602_24622 = state_24593__$1;
(statearr_24602_24622[(1)] = (4));

} else {
var statearr_24603_24623 = state_24593__$1;
(statearr_24603_24623[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24594 === (11))){
var inst_24584 = cljs.core.async.close_BANG_.call(null,ch);
var state_24593__$1 = state_24593;
var statearr_24604_24624 = state_24593__$1;
(statearr_24604_24624[(2)] = inst_24584);

(statearr_24604_24624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24594 === (9))){
var state_24593__$1 = state_24593;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24605_24625 = state_24593__$1;
(statearr_24605_24625[(1)] = (11));

} else {
var statearr_24606_24626 = state_24593__$1;
(statearr_24606_24626[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24594 === (5))){
var inst_24570 = (state_24593[(7)]);
var state_24593__$1 = state_24593;
var statearr_24607_24627 = state_24593__$1;
(statearr_24607_24627[(2)] = inst_24570);

(statearr_24607_24627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24594 === (10))){
var inst_24589 = (state_24593[(2)]);
var state_24593__$1 = state_24593;
var statearr_24608_24628 = state_24593__$1;
(statearr_24608_24628[(2)] = inst_24589);

(statearr_24608_24628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24594 === (8))){
var inst_24570 = (state_24593[(7)]);
var inst_24580 = cljs.core.next.call(null,inst_24570);
var inst_24570__$1 = inst_24580;
var state_24593__$1 = (function (){var statearr_24609 = state_24593;
(statearr_24609[(7)] = inst_24570__$1);

return statearr_24609;
})();
var statearr_24610_24629 = state_24593__$1;
(statearr_24610_24629[(2)] = null);

(statearr_24610_24629[(1)] = (2));


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
});})(c__24035__auto__))
;
return ((function (switch__23945__auto__,c__24035__auto__){
return (function() {
var cljs$core$async$state_machine__23946__auto__ = null;
var cljs$core$async$state_machine__23946__auto____0 = (function (){
var statearr_24611 = [null,null,null,null,null,null,null,null];
(statearr_24611[(0)] = cljs$core$async$state_machine__23946__auto__);

(statearr_24611[(1)] = (1));

return statearr_24611;
});
var cljs$core$async$state_machine__23946__auto____1 = (function (state_24593){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_24593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e24612){if((e24612 instanceof Object)){
var ex__23949__auto__ = e24612;
var statearr_24613_24630 = state_24593;
(statearr_24613_24630[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24631 = state_24593;
state_24593 = G__24631;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$state_machine__23946__auto__ = function(state_24593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23946__auto____1.call(this,state_24593);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23946__auto____0;
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23946__auto____1;
return cljs$core$async$state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto__))
})();
var state__24037__auto__ = (function (){var statearr_24614 = f__24036__auto__.call(null);
(statearr_24614[(6)] = c__24035__auto__);

return statearr_24614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto__))
);

return c__24035__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24632 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24632 = (function (ch,cs,meta24633){
this.ch = ch;
this.cs = cs;
this.meta24633 = meta24633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24634,meta24633__$1){
var self__ = this;
var _24634__$1 = this;
return (new cljs.core.async.t_cljs$core$async24632(self__.ch,self__.cs,meta24633__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24634){
var self__ = this;
var _24634__$1 = this;
return self__.meta24633;
});})(cs))
;

cljs.core.async.t_cljs$core$async24632.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24632.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24632.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24632.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24632.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24632.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24632.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24633","meta24633",-601352932,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24632";

cljs.core.async.t_cljs$core$async24632.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24632");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24632.
 */
cljs.core.async.__GT_t_cljs$core$async24632 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24632(ch__$1,cs__$1,meta24633){
return (new cljs.core.async.t_cljs$core$async24632(ch__$1,cs__$1,meta24633));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24632(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24035__auto___24854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___24854,cs,m,dchan,dctr,done){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___24854,cs,m,dchan,dctr,done){
return (function (state_24769){
var state_val_24770 = (state_24769[(1)]);
if((state_val_24770 === (7))){
var inst_24765 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24771_24855 = state_24769__$1;
(statearr_24771_24855[(2)] = inst_24765);

(statearr_24771_24855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (20))){
var inst_24668 = (state_24769[(7)]);
var inst_24680 = cljs.core.first.call(null,inst_24668);
var inst_24681 = cljs.core.nth.call(null,inst_24680,(0),null);
var inst_24682 = cljs.core.nth.call(null,inst_24680,(1),null);
var state_24769__$1 = (function (){var statearr_24772 = state_24769;
(statearr_24772[(8)] = inst_24681);

return statearr_24772;
})();
if(cljs.core.truth_(inst_24682)){
var statearr_24773_24856 = state_24769__$1;
(statearr_24773_24856[(1)] = (22));

} else {
var statearr_24774_24857 = state_24769__$1;
(statearr_24774_24857[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (27))){
var inst_24717 = (state_24769[(9)]);
var inst_24637 = (state_24769[(10)]);
var inst_24712 = (state_24769[(11)]);
var inst_24710 = (state_24769[(12)]);
var inst_24717__$1 = cljs.core._nth.call(null,inst_24710,inst_24712);
var inst_24718 = cljs.core.async.put_BANG_.call(null,inst_24717__$1,inst_24637,done);
var state_24769__$1 = (function (){var statearr_24775 = state_24769;
(statearr_24775[(9)] = inst_24717__$1);

return statearr_24775;
})();
if(cljs.core.truth_(inst_24718)){
var statearr_24776_24858 = state_24769__$1;
(statearr_24776_24858[(1)] = (30));

} else {
var statearr_24777_24859 = state_24769__$1;
(statearr_24777_24859[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (1))){
var state_24769__$1 = state_24769;
var statearr_24778_24860 = state_24769__$1;
(statearr_24778_24860[(2)] = null);

(statearr_24778_24860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (24))){
var inst_24668 = (state_24769[(7)]);
var inst_24687 = (state_24769[(2)]);
var inst_24688 = cljs.core.next.call(null,inst_24668);
var inst_24646 = inst_24688;
var inst_24647 = null;
var inst_24648 = (0);
var inst_24649 = (0);
var state_24769__$1 = (function (){var statearr_24779 = state_24769;
(statearr_24779[(13)] = inst_24687);

(statearr_24779[(14)] = inst_24647);

(statearr_24779[(15)] = inst_24648);

(statearr_24779[(16)] = inst_24649);

(statearr_24779[(17)] = inst_24646);

return statearr_24779;
})();
var statearr_24780_24861 = state_24769__$1;
(statearr_24780_24861[(2)] = null);

(statearr_24780_24861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (39))){
var state_24769__$1 = state_24769;
var statearr_24784_24862 = state_24769__$1;
(statearr_24784_24862[(2)] = null);

(statearr_24784_24862[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (4))){
var inst_24637 = (state_24769[(10)]);
var inst_24637__$1 = (state_24769[(2)]);
var inst_24638 = (inst_24637__$1 == null);
var state_24769__$1 = (function (){var statearr_24785 = state_24769;
(statearr_24785[(10)] = inst_24637__$1);

return statearr_24785;
})();
if(cljs.core.truth_(inst_24638)){
var statearr_24786_24863 = state_24769__$1;
(statearr_24786_24863[(1)] = (5));

} else {
var statearr_24787_24864 = state_24769__$1;
(statearr_24787_24864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (15))){
var inst_24647 = (state_24769[(14)]);
var inst_24648 = (state_24769[(15)]);
var inst_24649 = (state_24769[(16)]);
var inst_24646 = (state_24769[(17)]);
var inst_24664 = (state_24769[(2)]);
var inst_24665 = (inst_24649 + (1));
var tmp24781 = inst_24647;
var tmp24782 = inst_24648;
var tmp24783 = inst_24646;
var inst_24646__$1 = tmp24783;
var inst_24647__$1 = tmp24781;
var inst_24648__$1 = tmp24782;
var inst_24649__$1 = inst_24665;
var state_24769__$1 = (function (){var statearr_24788 = state_24769;
(statearr_24788[(14)] = inst_24647__$1);

(statearr_24788[(15)] = inst_24648__$1);

(statearr_24788[(16)] = inst_24649__$1);

(statearr_24788[(18)] = inst_24664);

(statearr_24788[(17)] = inst_24646__$1);

return statearr_24788;
})();
var statearr_24789_24865 = state_24769__$1;
(statearr_24789_24865[(2)] = null);

(statearr_24789_24865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (21))){
var inst_24691 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24793_24866 = state_24769__$1;
(statearr_24793_24866[(2)] = inst_24691);

(statearr_24793_24866[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (31))){
var inst_24717 = (state_24769[(9)]);
var inst_24721 = done.call(null,null);
var inst_24722 = cljs.core.async.untap_STAR_.call(null,m,inst_24717);
var state_24769__$1 = (function (){var statearr_24794 = state_24769;
(statearr_24794[(19)] = inst_24721);

return statearr_24794;
})();
var statearr_24795_24867 = state_24769__$1;
(statearr_24795_24867[(2)] = inst_24722);

(statearr_24795_24867[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (32))){
var inst_24711 = (state_24769[(20)]);
var inst_24712 = (state_24769[(11)]);
var inst_24710 = (state_24769[(12)]);
var inst_24709 = (state_24769[(21)]);
var inst_24724 = (state_24769[(2)]);
var inst_24725 = (inst_24712 + (1));
var tmp24790 = inst_24711;
var tmp24791 = inst_24710;
var tmp24792 = inst_24709;
var inst_24709__$1 = tmp24792;
var inst_24710__$1 = tmp24791;
var inst_24711__$1 = tmp24790;
var inst_24712__$1 = inst_24725;
var state_24769__$1 = (function (){var statearr_24796 = state_24769;
(statearr_24796[(22)] = inst_24724);

(statearr_24796[(20)] = inst_24711__$1);

(statearr_24796[(11)] = inst_24712__$1);

(statearr_24796[(12)] = inst_24710__$1);

(statearr_24796[(21)] = inst_24709__$1);

return statearr_24796;
})();
var statearr_24797_24868 = state_24769__$1;
(statearr_24797_24868[(2)] = null);

(statearr_24797_24868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (40))){
var inst_24737 = (state_24769[(23)]);
var inst_24741 = done.call(null,null);
var inst_24742 = cljs.core.async.untap_STAR_.call(null,m,inst_24737);
var state_24769__$1 = (function (){var statearr_24798 = state_24769;
(statearr_24798[(24)] = inst_24741);

return statearr_24798;
})();
var statearr_24799_24869 = state_24769__$1;
(statearr_24799_24869[(2)] = inst_24742);

(statearr_24799_24869[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (33))){
var inst_24728 = (state_24769[(25)]);
var inst_24730 = cljs.core.chunked_seq_QMARK_.call(null,inst_24728);
var state_24769__$1 = state_24769;
if(inst_24730){
var statearr_24800_24870 = state_24769__$1;
(statearr_24800_24870[(1)] = (36));

} else {
var statearr_24801_24871 = state_24769__$1;
(statearr_24801_24871[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (13))){
var inst_24658 = (state_24769[(26)]);
var inst_24661 = cljs.core.async.close_BANG_.call(null,inst_24658);
var state_24769__$1 = state_24769;
var statearr_24802_24872 = state_24769__$1;
(statearr_24802_24872[(2)] = inst_24661);

(statearr_24802_24872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (22))){
var inst_24681 = (state_24769[(8)]);
var inst_24684 = cljs.core.async.close_BANG_.call(null,inst_24681);
var state_24769__$1 = state_24769;
var statearr_24803_24873 = state_24769__$1;
(statearr_24803_24873[(2)] = inst_24684);

(statearr_24803_24873[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (36))){
var inst_24728 = (state_24769[(25)]);
var inst_24732 = cljs.core.chunk_first.call(null,inst_24728);
var inst_24733 = cljs.core.chunk_rest.call(null,inst_24728);
var inst_24734 = cljs.core.count.call(null,inst_24732);
var inst_24709 = inst_24733;
var inst_24710 = inst_24732;
var inst_24711 = inst_24734;
var inst_24712 = (0);
var state_24769__$1 = (function (){var statearr_24804 = state_24769;
(statearr_24804[(20)] = inst_24711);

(statearr_24804[(11)] = inst_24712);

(statearr_24804[(12)] = inst_24710);

(statearr_24804[(21)] = inst_24709);

return statearr_24804;
})();
var statearr_24805_24874 = state_24769__$1;
(statearr_24805_24874[(2)] = null);

(statearr_24805_24874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (41))){
var inst_24728 = (state_24769[(25)]);
var inst_24744 = (state_24769[(2)]);
var inst_24745 = cljs.core.next.call(null,inst_24728);
var inst_24709 = inst_24745;
var inst_24710 = null;
var inst_24711 = (0);
var inst_24712 = (0);
var state_24769__$1 = (function (){var statearr_24806 = state_24769;
(statearr_24806[(20)] = inst_24711);

(statearr_24806[(11)] = inst_24712);

(statearr_24806[(27)] = inst_24744);

(statearr_24806[(12)] = inst_24710);

(statearr_24806[(21)] = inst_24709);

return statearr_24806;
})();
var statearr_24807_24875 = state_24769__$1;
(statearr_24807_24875[(2)] = null);

(statearr_24807_24875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (43))){
var state_24769__$1 = state_24769;
var statearr_24808_24876 = state_24769__$1;
(statearr_24808_24876[(2)] = null);

(statearr_24808_24876[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (29))){
var inst_24753 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24809_24877 = state_24769__$1;
(statearr_24809_24877[(2)] = inst_24753);

(statearr_24809_24877[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (44))){
var inst_24762 = (state_24769[(2)]);
var state_24769__$1 = (function (){var statearr_24810 = state_24769;
(statearr_24810[(28)] = inst_24762);

return statearr_24810;
})();
var statearr_24811_24878 = state_24769__$1;
(statearr_24811_24878[(2)] = null);

(statearr_24811_24878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (6))){
var inst_24701 = (state_24769[(29)]);
var inst_24700 = cljs.core.deref.call(null,cs);
var inst_24701__$1 = cljs.core.keys.call(null,inst_24700);
var inst_24702 = cljs.core.count.call(null,inst_24701__$1);
var inst_24703 = cljs.core.reset_BANG_.call(null,dctr,inst_24702);
var inst_24708 = cljs.core.seq.call(null,inst_24701__$1);
var inst_24709 = inst_24708;
var inst_24710 = null;
var inst_24711 = (0);
var inst_24712 = (0);
var state_24769__$1 = (function (){var statearr_24812 = state_24769;
(statearr_24812[(20)] = inst_24711);

(statearr_24812[(30)] = inst_24703);

(statearr_24812[(29)] = inst_24701__$1);

(statearr_24812[(11)] = inst_24712);

(statearr_24812[(12)] = inst_24710);

(statearr_24812[(21)] = inst_24709);

return statearr_24812;
})();
var statearr_24813_24879 = state_24769__$1;
(statearr_24813_24879[(2)] = null);

(statearr_24813_24879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (28))){
var inst_24728 = (state_24769[(25)]);
var inst_24709 = (state_24769[(21)]);
var inst_24728__$1 = cljs.core.seq.call(null,inst_24709);
var state_24769__$1 = (function (){var statearr_24814 = state_24769;
(statearr_24814[(25)] = inst_24728__$1);

return statearr_24814;
})();
if(inst_24728__$1){
var statearr_24815_24880 = state_24769__$1;
(statearr_24815_24880[(1)] = (33));

} else {
var statearr_24816_24881 = state_24769__$1;
(statearr_24816_24881[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (25))){
var inst_24711 = (state_24769[(20)]);
var inst_24712 = (state_24769[(11)]);
var inst_24714 = (inst_24712 < inst_24711);
var inst_24715 = inst_24714;
var state_24769__$1 = state_24769;
if(cljs.core.truth_(inst_24715)){
var statearr_24817_24882 = state_24769__$1;
(statearr_24817_24882[(1)] = (27));

} else {
var statearr_24818_24883 = state_24769__$1;
(statearr_24818_24883[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (34))){
var state_24769__$1 = state_24769;
var statearr_24819_24884 = state_24769__$1;
(statearr_24819_24884[(2)] = null);

(statearr_24819_24884[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (17))){
var state_24769__$1 = state_24769;
var statearr_24820_24885 = state_24769__$1;
(statearr_24820_24885[(2)] = null);

(statearr_24820_24885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (3))){
var inst_24767 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24769__$1,inst_24767);
} else {
if((state_val_24770 === (12))){
var inst_24696 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24821_24886 = state_24769__$1;
(statearr_24821_24886[(2)] = inst_24696);

(statearr_24821_24886[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (2))){
var state_24769__$1 = state_24769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24769__$1,(4),ch);
} else {
if((state_val_24770 === (23))){
var state_24769__$1 = state_24769;
var statearr_24822_24887 = state_24769__$1;
(statearr_24822_24887[(2)] = null);

(statearr_24822_24887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (35))){
var inst_24751 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24823_24888 = state_24769__$1;
(statearr_24823_24888[(2)] = inst_24751);

(statearr_24823_24888[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (19))){
var inst_24668 = (state_24769[(7)]);
var inst_24672 = cljs.core.chunk_first.call(null,inst_24668);
var inst_24673 = cljs.core.chunk_rest.call(null,inst_24668);
var inst_24674 = cljs.core.count.call(null,inst_24672);
var inst_24646 = inst_24673;
var inst_24647 = inst_24672;
var inst_24648 = inst_24674;
var inst_24649 = (0);
var state_24769__$1 = (function (){var statearr_24824 = state_24769;
(statearr_24824[(14)] = inst_24647);

(statearr_24824[(15)] = inst_24648);

(statearr_24824[(16)] = inst_24649);

(statearr_24824[(17)] = inst_24646);

return statearr_24824;
})();
var statearr_24825_24889 = state_24769__$1;
(statearr_24825_24889[(2)] = null);

(statearr_24825_24889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (11))){
var inst_24646 = (state_24769[(17)]);
var inst_24668 = (state_24769[(7)]);
var inst_24668__$1 = cljs.core.seq.call(null,inst_24646);
var state_24769__$1 = (function (){var statearr_24826 = state_24769;
(statearr_24826[(7)] = inst_24668__$1);

return statearr_24826;
})();
if(inst_24668__$1){
var statearr_24827_24890 = state_24769__$1;
(statearr_24827_24890[(1)] = (16));

} else {
var statearr_24828_24891 = state_24769__$1;
(statearr_24828_24891[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (9))){
var inst_24698 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24829_24892 = state_24769__$1;
(statearr_24829_24892[(2)] = inst_24698);

(statearr_24829_24892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (5))){
var inst_24644 = cljs.core.deref.call(null,cs);
var inst_24645 = cljs.core.seq.call(null,inst_24644);
var inst_24646 = inst_24645;
var inst_24647 = null;
var inst_24648 = (0);
var inst_24649 = (0);
var state_24769__$1 = (function (){var statearr_24830 = state_24769;
(statearr_24830[(14)] = inst_24647);

(statearr_24830[(15)] = inst_24648);

(statearr_24830[(16)] = inst_24649);

(statearr_24830[(17)] = inst_24646);

return statearr_24830;
})();
var statearr_24831_24893 = state_24769__$1;
(statearr_24831_24893[(2)] = null);

(statearr_24831_24893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (14))){
var state_24769__$1 = state_24769;
var statearr_24832_24894 = state_24769__$1;
(statearr_24832_24894[(2)] = null);

(statearr_24832_24894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (45))){
var inst_24759 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24833_24895 = state_24769__$1;
(statearr_24833_24895[(2)] = inst_24759);

(statearr_24833_24895[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (26))){
var inst_24701 = (state_24769[(29)]);
var inst_24755 = (state_24769[(2)]);
var inst_24756 = cljs.core.seq.call(null,inst_24701);
var state_24769__$1 = (function (){var statearr_24834 = state_24769;
(statearr_24834[(31)] = inst_24755);

return statearr_24834;
})();
if(inst_24756){
var statearr_24835_24896 = state_24769__$1;
(statearr_24835_24896[(1)] = (42));

} else {
var statearr_24836_24897 = state_24769__$1;
(statearr_24836_24897[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (16))){
var inst_24668 = (state_24769[(7)]);
var inst_24670 = cljs.core.chunked_seq_QMARK_.call(null,inst_24668);
var state_24769__$1 = state_24769;
if(inst_24670){
var statearr_24837_24898 = state_24769__$1;
(statearr_24837_24898[(1)] = (19));

} else {
var statearr_24838_24899 = state_24769__$1;
(statearr_24838_24899[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (38))){
var inst_24748 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24839_24900 = state_24769__$1;
(statearr_24839_24900[(2)] = inst_24748);

(statearr_24839_24900[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (30))){
var state_24769__$1 = state_24769;
var statearr_24840_24901 = state_24769__$1;
(statearr_24840_24901[(2)] = null);

(statearr_24840_24901[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (10))){
var inst_24647 = (state_24769[(14)]);
var inst_24649 = (state_24769[(16)]);
var inst_24657 = cljs.core._nth.call(null,inst_24647,inst_24649);
var inst_24658 = cljs.core.nth.call(null,inst_24657,(0),null);
var inst_24659 = cljs.core.nth.call(null,inst_24657,(1),null);
var state_24769__$1 = (function (){var statearr_24841 = state_24769;
(statearr_24841[(26)] = inst_24658);

return statearr_24841;
})();
if(cljs.core.truth_(inst_24659)){
var statearr_24842_24902 = state_24769__$1;
(statearr_24842_24902[(1)] = (13));

} else {
var statearr_24843_24903 = state_24769__$1;
(statearr_24843_24903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (18))){
var inst_24694 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24844_24904 = state_24769__$1;
(statearr_24844_24904[(2)] = inst_24694);

(statearr_24844_24904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (42))){
var state_24769__$1 = state_24769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24769__$1,(45),dchan);
} else {
if((state_val_24770 === (37))){
var inst_24637 = (state_24769[(10)]);
var inst_24737 = (state_24769[(23)]);
var inst_24728 = (state_24769[(25)]);
var inst_24737__$1 = cljs.core.first.call(null,inst_24728);
var inst_24738 = cljs.core.async.put_BANG_.call(null,inst_24737__$1,inst_24637,done);
var state_24769__$1 = (function (){var statearr_24845 = state_24769;
(statearr_24845[(23)] = inst_24737__$1);

return statearr_24845;
})();
if(cljs.core.truth_(inst_24738)){
var statearr_24846_24905 = state_24769__$1;
(statearr_24846_24905[(1)] = (39));

} else {
var statearr_24847_24906 = state_24769__$1;
(statearr_24847_24906[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24770 === (8))){
var inst_24648 = (state_24769[(15)]);
var inst_24649 = (state_24769[(16)]);
var inst_24651 = (inst_24649 < inst_24648);
var inst_24652 = inst_24651;
var state_24769__$1 = state_24769;
if(cljs.core.truth_(inst_24652)){
var statearr_24848_24907 = state_24769__$1;
(statearr_24848_24907[(1)] = (10));

} else {
var statearr_24849_24908 = state_24769__$1;
(statearr_24849_24908[(1)] = (11));

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
});})(c__24035__auto___24854,cs,m,dchan,dctr,done))
;
return ((function (switch__23945__auto__,c__24035__auto___24854,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23946__auto__ = null;
var cljs$core$async$mult_$_state_machine__23946__auto____0 = (function (){
var statearr_24850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24850[(0)] = cljs$core$async$mult_$_state_machine__23946__auto__);

(statearr_24850[(1)] = (1));

return statearr_24850;
});
var cljs$core$async$mult_$_state_machine__23946__auto____1 = (function (state_24769){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_24769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e24851){if((e24851 instanceof Object)){
var ex__23949__auto__ = e24851;
var statearr_24852_24909 = state_24769;
(statearr_24852_24909[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24910 = state_24769;
state_24769 = G__24910;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23946__auto__ = function(state_24769){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23946__auto____1.call(this,state_24769);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23946__auto____0;
cljs$core$async$mult_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23946__auto____1;
return cljs$core$async$mult_$_state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___24854,cs,m,dchan,dctr,done))
})();
var state__24037__auto__ = (function (){var statearr_24853 = f__24036__auto__.call(null);
(statearr_24853[(6)] = c__24035__auto___24854);

return statearr_24853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___24854,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24912 = arguments.length;
switch (G__24912) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24924 = arguments.length;
var i__4500__auto___24925 = (0);
while(true){
if((i__4500__auto___24925 < len__4499__auto___24924)){
args__4502__auto__.push((arguments[i__4500__auto___24925]));

var G__24926 = (i__4500__auto___24925 + (1));
i__4500__auto___24925 = G__24926;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24918){
var map__24919 = p__24918;
var map__24919__$1 = ((((!((map__24919 == null)))?(((((map__24919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24919):map__24919);
var opts = map__24919__$1;
var statearr_24921_24927 = state;
(statearr_24921_24927[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__24919,map__24919__$1,opts){
return (function (val){
var statearr_24922_24928 = state;
(statearr_24922_24928[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24919,map__24919__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24923_24929 = state;
(statearr_24923_24929[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24914){
var G__24915 = cljs.core.first.call(null,seq24914);
var seq24914__$1 = cljs.core.next.call(null,seq24914);
var G__24916 = cljs.core.first.call(null,seq24914__$1);
var seq24914__$2 = cljs.core.next.call(null,seq24914__$1);
var G__24917 = cljs.core.first.call(null,seq24914__$2);
var seq24914__$3 = cljs.core.next.call(null,seq24914__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24915,G__24916,G__24917,seq24914__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24930 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24931){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24931 = meta24931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24932,meta24931__$1){
var self__ = this;
var _24932__$1 = this;
return (new cljs.core.async.t_cljs$core$async24930(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24931__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24932){
var self__ = this;
var _24932__$1 = this;
return self__.meta24931;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24930.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24930.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24930.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24930.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24930.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24930.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24930.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24930.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24931","meta24931",-2073642632,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24930";

cljs.core.async.t_cljs$core$async24930.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24930");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24930.
 */
cljs.core.async.__GT_t_cljs$core$async24930 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24930(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24931){
return (new cljs.core.async.t_cljs$core$async24930(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24931));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24930(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24035__auto___25094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___25094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___25094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25034){
var state_val_25035 = (state_25034[(1)]);
if((state_val_25035 === (7))){
var inst_24949 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
var statearr_25036_25095 = state_25034__$1;
(statearr_25036_25095[(2)] = inst_24949);

(statearr_25036_25095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (20))){
var inst_24961 = (state_25034[(7)]);
var state_25034__$1 = state_25034;
var statearr_25037_25096 = state_25034__$1;
(statearr_25037_25096[(2)] = inst_24961);

(statearr_25037_25096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (27))){
var state_25034__$1 = state_25034;
var statearr_25038_25097 = state_25034__$1;
(statearr_25038_25097[(2)] = null);

(statearr_25038_25097[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (1))){
var inst_24936 = (state_25034[(8)]);
var inst_24936__$1 = calc_state.call(null);
var inst_24938 = (inst_24936__$1 == null);
var inst_24939 = cljs.core.not.call(null,inst_24938);
var state_25034__$1 = (function (){var statearr_25039 = state_25034;
(statearr_25039[(8)] = inst_24936__$1);

return statearr_25039;
})();
if(inst_24939){
var statearr_25040_25098 = state_25034__$1;
(statearr_25040_25098[(1)] = (2));

} else {
var statearr_25041_25099 = state_25034__$1;
(statearr_25041_25099[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (24))){
var inst_25008 = (state_25034[(9)]);
var inst_24994 = (state_25034[(10)]);
var inst_24985 = (state_25034[(11)]);
var inst_25008__$1 = inst_24985.call(null,inst_24994);
var state_25034__$1 = (function (){var statearr_25042 = state_25034;
(statearr_25042[(9)] = inst_25008__$1);

return statearr_25042;
})();
if(cljs.core.truth_(inst_25008__$1)){
var statearr_25043_25100 = state_25034__$1;
(statearr_25043_25100[(1)] = (29));

} else {
var statearr_25044_25101 = state_25034__$1;
(statearr_25044_25101[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (4))){
var inst_24952 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
if(cljs.core.truth_(inst_24952)){
var statearr_25045_25102 = state_25034__$1;
(statearr_25045_25102[(1)] = (8));

} else {
var statearr_25046_25103 = state_25034__$1;
(statearr_25046_25103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (15))){
var inst_24979 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
if(cljs.core.truth_(inst_24979)){
var statearr_25047_25104 = state_25034__$1;
(statearr_25047_25104[(1)] = (19));

} else {
var statearr_25048_25105 = state_25034__$1;
(statearr_25048_25105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (21))){
var inst_24984 = (state_25034[(12)]);
var inst_24984__$1 = (state_25034[(2)]);
var inst_24985 = cljs.core.get.call(null,inst_24984__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24986 = cljs.core.get.call(null,inst_24984__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24987 = cljs.core.get.call(null,inst_24984__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25034__$1 = (function (){var statearr_25049 = state_25034;
(statearr_25049[(12)] = inst_24984__$1);

(statearr_25049[(13)] = inst_24986);

(statearr_25049[(11)] = inst_24985);

return statearr_25049;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25034__$1,(22),inst_24987);
} else {
if((state_val_25035 === (31))){
var inst_25016 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
if(cljs.core.truth_(inst_25016)){
var statearr_25050_25106 = state_25034__$1;
(statearr_25050_25106[(1)] = (32));

} else {
var statearr_25051_25107 = state_25034__$1;
(statearr_25051_25107[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (32))){
var inst_24993 = (state_25034[(14)]);
var state_25034__$1 = state_25034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25034__$1,(35),out,inst_24993);
} else {
if((state_val_25035 === (33))){
var inst_24984 = (state_25034[(12)]);
var inst_24961 = inst_24984;
var state_25034__$1 = (function (){var statearr_25052 = state_25034;
(statearr_25052[(7)] = inst_24961);

return statearr_25052;
})();
var statearr_25053_25108 = state_25034__$1;
(statearr_25053_25108[(2)] = null);

(statearr_25053_25108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (13))){
var inst_24961 = (state_25034[(7)]);
var inst_24968 = inst_24961.cljs$lang$protocol_mask$partition0$;
var inst_24969 = (inst_24968 & (64));
var inst_24970 = inst_24961.cljs$core$ISeq$;
var inst_24971 = (cljs.core.PROTOCOL_SENTINEL === inst_24970);
var inst_24972 = ((inst_24969) || (inst_24971));
var state_25034__$1 = state_25034;
if(cljs.core.truth_(inst_24972)){
var statearr_25054_25109 = state_25034__$1;
(statearr_25054_25109[(1)] = (16));

} else {
var statearr_25055_25110 = state_25034__$1;
(statearr_25055_25110[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (22))){
var inst_24994 = (state_25034[(10)]);
var inst_24993 = (state_25034[(14)]);
var inst_24992 = (state_25034[(2)]);
var inst_24993__$1 = cljs.core.nth.call(null,inst_24992,(0),null);
var inst_24994__$1 = cljs.core.nth.call(null,inst_24992,(1),null);
var inst_24995 = (inst_24993__$1 == null);
var inst_24996 = cljs.core._EQ_.call(null,inst_24994__$1,change);
var inst_24997 = ((inst_24995) || (inst_24996));
var state_25034__$1 = (function (){var statearr_25056 = state_25034;
(statearr_25056[(10)] = inst_24994__$1);

(statearr_25056[(14)] = inst_24993__$1);

return statearr_25056;
})();
if(cljs.core.truth_(inst_24997)){
var statearr_25057_25111 = state_25034__$1;
(statearr_25057_25111[(1)] = (23));

} else {
var statearr_25058_25112 = state_25034__$1;
(statearr_25058_25112[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (36))){
var inst_24984 = (state_25034[(12)]);
var inst_24961 = inst_24984;
var state_25034__$1 = (function (){var statearr_25059 = state_25034;
(statearr_25059[(7)] = inst_24961);

return statearr_25059;
})();
var statearr_25060_25113 = state_25034__$1;
(statearr_25060_25113[(2)] = null);

(statearr_25060_25113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (29))){
var inst_25008 = (state_25034[(9)]);
var state_25034__$1 = state_25034;
var statearr_25061_25114 = state_25034__$1;
(statearr_25061_25114[(2)] = inst_25008);

(statearr_25061_25114[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (6))){
var state_25034__$1 = state_25034;
var statearr_25062_25115 = state_25034__$1;
(statearr_25062_25115[(2)] = false);

(statearr_25062_25115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (28))){
var inst_25004 = (state_25034[(2)]);
var inst_25005 = calc_state.call(null);
var inst_24961 = inst_25005;
var state_25034__$1 = (function (){var statearr_25063 = state_25034;
(statearr_25063[(15)] = inst_25004);

(statearr_25063[(7)] = inst_24961);

return statearr_25063;
})();
var statearr_25064_25116 = state_25034__$1;
(statearr_25064_25116[(2)] = null);

(statearr_25064_25116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (25))){
var inst_25030 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
var statearr_25065_25117 = state_25034__$1;
(statearr_25065_25117[(2)] = inst_25030);

(statearr_25065_25117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (34))){
var inst_25028 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
var statearr_25066_25118 = state_25034__$1;
(statearr_25066_25118[(2)] = inst_25028);

(statearr_25066_25118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (17))){
var state_25034__$1 = state_25034;
var statearr_25067_25119 = state_25034__$1;
(statearr_25067_25119[(2)] = false);

(statearr_25067_25119[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (3))){
var state_25034__$1 = state_25034;
var statearr_25068_25120 = state_25034__$1;
(statearr_25068_25120[(2)] = false);

(statearr_25068_25120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (12))){
var inst_25032 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25034__$1,inst_25032);
} else {
if((state_val_25035 === (2))){
var inst_24936 = (state_25034[(8)]);
var inst_24941 = inst_24936.cljs$lang$protocol_mask$partition0$;
var inst_24942 = (inst_24941 & (64));
var inst_24943 = inst_24936.cljs$core$ISeq$;
var inst_24944 = (cljs.core.PROTOCOL_SENTINEL === inst_24943);
var inst_24945 = ((inst_24942) || (inst_24944));
var state_25034__$1 = state_25034;
if(cljs.core.truth_(inst_24945)){
var statearr_25069_25121 = state_25034__$1;
(statearr_25069_25121[(1)] = (5));

} else {
var statearr_25070_25122 = state_25034__$1;
(statearr_25070_25122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (23))){
var inst_24993 = (state_25034[(14)]);
var inst_24999 = (inst_24993 == null);
var state_25034__$1 = state_25034;
if(cljs.core.truth_(inst_24999)){
var statearr_25071_25123 = state_25034__$1;
(statearr_25071_25123[(1)] = (26));

} else {
var statearr_25072_25124 = state_25034__$1;
(statearr_25072_25124[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (35))){
var inst_25019 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
if(cljs.core.truth_(inst_25019)){
var statearr_25073_25125 = state_25034__$1;
(statearr_25073_25125[(1)] = (36));

} else {
var statearr_25074_25126 = state_25034__$1;
(statearr_25074_25126[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (19))){
var inst_24961 = (state_25034[(7)]);
var inst_24981 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24961);
var state_25034__$1 = state_25034;
var statearr_25075_25127 = state_25034__$1;
(statearr_25075_25127[(2)] = inst_24981);

(statearr_25075_25127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (11))){
var inst_24961 = (state_25034[(7)]);
var inst_24965 = (inst_24961 == null);
var inst_24966 = cljs.core.not.call(null,inst_24965);
var state_25034__$1 = state_25034;
if(inst_24966){
var statearr_25076_25128 = state_25034__$1;
(statearr_25076_25128[(1)] = (13));

} else {
var statearr_25077_25129 = state_25034__$1;
(statearr_25077_25129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (9))){
var inst_24936 = (state_25034[(8)]);
var state_25034__$1 = state_25034;
var statearr_25078_25130 = state_25034__$1;
(statearr_25078_25130[(2)] = inst_24936);

(statearr_25078_25130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (5))){
var state_25034__$1 = state_25034;
var statearr_25079_25131 = state_25034__$1;
(statearr_25079_25131[(2)] = true);

(statearr_25079_25131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (14))){
var state_25034__$1 = state_25034;
var statearr_25080_25132 = state_25034__$1;
(statearr_25080_25132[(2)] = false);

(statearr_25080_25132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (26))){
var inst_24994 = (state_25034[(10)]);
var inst_25001 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24994);
var state_25034__$1 = state_25034;
var statearr_25081_25133 = state_25034__$1;
(statearr_25081_25133[(2)] = inst_25001);

(statearr_25081_25133[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (16))){
var state_25034__$1 = state_25034;
var statearr_25082_25134 = state_25034__$1;
(statearr_25082_25134[(2)] = true);

(statearr_25082_25134[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (38))){
var inst_25024 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
var statearr_25083_25135 = state_25034__$1;
(statearr_25083_25135[(2)] = inst_25024);

(statearr_25083_25135[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (30))){
var inst_24986 = (state_25034[(13)]);
var inst_24994 = (state_25034[(10)]);
var inst_24985 = (state_25034[(11)]);
var inst_25011 = cljs.core.empty_QMARK_.call(null,inst_24985);
var inst_25012 = inst_24986.call(null,inst_24994);
var inst_25013 = cljs.core.not.call(null,inst_25012);
var inst_25014 = ((inst_25011) && (inst_25013));
var state_25034__$1 = state_25034;
var statearr_25084_25136 = state_25034__$1;
(statearr_25084_25136[(2)] = inst_25014);

(statearr_25084_25136[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (10))){
var inst_24936 = (state_25034[(8)]);
var inst_24957 = (state_25034[(2)]);
var inst_24958 = cljs.core.get.call(null,inst_24957,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24959 = cljs.core.get.call(null,inst_24957,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24960 = cljs.core.get.call(null,inst_24957,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24961 = inst_24936;
var state_25034__$1 = (function (){var statearr_25085 = state_25034;
(statearr_25085[(16)] = inst_24958);

(statearr_25085[(7)] = inst_24961);

(statearr_25085[(17)] = inst_24960);

(statearr_25085[(18)] = inst_24959);

return statearr_25085;
})();
var statearr_25086_25137 = state_25034__$1;
(statearr_25086_25137[(2)] = null);

(statearr_25086_25137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (18))){
var inst_24976 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
var statearr_25087_25138 = state_25034__$1;
(statearr_25087_25138[(2)] = inst_24976);

(statearr_25087_25138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (37))){
var state_25034__$1 = state_25034;
var statearr_25088_25139 = state_25034__$1;
(statearr_25088_25139[(2)] = null);

(statearr_25088_25139[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (8))){
var inst_24936 = (state_25034[(8)]);
var inst_24954 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24936);
var state_25034__$1 = state_25034;
var statearr_25089_25140 = state_25034__$1;
(statearr_25089_25140[(2)] = inst_24954);

(statearr_25089_25140[(1)] = (10));


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
});})(c__24035__auto___25094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23945__auto__,c__24035__auto___25094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23946__auto__ = null;
var cljs$core$async$mix_$_state_machine__23946__auto____0 = (function (){
var statearr_25090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25090[(0)] = cljs$core$async$mix_$_state_machine__23946__auto__);

(statearr_25090[(1)] = (1));

return statearr_25090;
});
var cljs$core$async$mix_$_state_machine__23946__auto____1 = (function (state_25034){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_25034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e25091){if((e25091 instanceof Object)){
var ex__23949__auto__ = e25091;
var statearr_25092_25141 = state_25034;
(statearr_25092_25141[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25142 = state_25034;
state_25034 = G__25142;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23946__auto__ = function(state_25034){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23946__auto____1.call(this,state_25034);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23946__auto____0;
cljs$core$async$mix_$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23946__auto____1;
return cljs$core$async$mix_$_state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___25094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24037__auto__ = (function (){var statearr_25093 = f__24036__auto__.call(null);
(statearr_25093[(6)] = c__24035__auto___25094);

return statearr_25093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___25094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25144 = arguments.length;
switch (G__25144) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25148 = arguments.length;
switch (G__25148) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__25146_SHARP_){
if(cljs.core.truth_(p1__25146_SHARP_.call(null,topic))){
return p1__25146_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25146_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25149 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25150){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25150 = meta25150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25151,meta25150__$1){
var self__ = this;
var _25151__$1 = this;
return (new cljs.core.async.t_cljs$core$async25149(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25150__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25151){
var self__ = this;
var _25151__$1 = this;
return self__.meta25150;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25149.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25150","meta25150",737881350,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25149";

cljs.core.async.t_cljs$core$async25149.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25149");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25149.
 */
cljs.core.async.__GT_t_cljs$core$async25149 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25149(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25150){
return (new cljs.core.async.t_cljs$core$async25149(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25150));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25149(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24035__auto___25269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___25269,mults,ensure_mult,p){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___25269,mults,ensure_mult,p){
return (function (state_25223){
var state_val_25224 = (state_25223[(1)]);
if((state_val_25224 === (7))){
var inst_25219 = (state_25223[(2)]);
var state_25223__$1 = state_25223;
var statearr_25225_25270 = state_25223__$1;
(statearr_25225_25270[(2)] = inst_25219);

(statearr_25225_25270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (20))){
var state_25223__$1 = state_25223;
var statearr_25226_25271 = state_25223__$1;
(statearr_25226_25271[(2)] = null);

(statearr_25226_25271[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (1))){
var state_25223__$1 = state_25223;
var statearr_25227_25272 = state_25223__$1;
(statearr_25227_25272[(2)] = null);

(statearr_25227_25272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (24))){
var inst_25202 = (state_25223[(7)]);
var inst_25211 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25202);
var state_25223__$1 = state_25223;
var statearr_25228_25273 = state_25223__$1;
(statearr_25228_25273[(2)] = inst_25211);

(statearr_25228_25273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (4))){
var inst_25154 = (state_25223[(8)]);
var inst_25154__$1 = (state_25223[(2)]);
var inst_25155 = (inst_25154__$1 == null);
var state_25223__$1 = (function (){var statearr_25229 = state_25223;
(statearr_25229[(8)] = inst_25154__$1);

return statearr_25229;
})();
if(cljs.core.truth_(inst_25155)){
var statearr_25230_25274 = state_25223__$1;
(statearr_25230_25274[(1)] = (5));

} else {
var statearr_25231_25275 = state_25223__$1;
(statearr_25231_25275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (15))){
var inst_25196 = (state_25223[(2)]);
var state_25223__$1 = state_25223;
var statearr_25232_25276 = state_25223__$1;
(statearr_25232_25276[(2)] = inst_25196);

(statearr_25232_25276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (21))){
var inst_25216 = (state_25223[(2)]);
var state_25223__$1 = (function (){var statearr_25233 = state_25223;
(statearr_25233[(9)] = inst_25216);

return statearr_25233;
})();
var statearr_25234_25277 = state_25223__$1;
(statearr_25234_25277[(2)] = null);

(statearr_25234_25277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (13))){
var inst_25178 = (state_25223[(10)]);
var inst_25180 = cljs.core.chunked_seq_QMARK_.call(null,inst_25178);
var state_25223__$1 = state_25223;
if(inst_25180){
var statearr_25235_25278 = state_25223__$1;
(statearr_25235_25278[(1)] = (16));

} else {
var statearr_25236_25279 = state_25223__$1;
(statearr_25236_25279[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (22))){
var inst_25208 = (state_25223[(2)]);
var state_25223__$1 = state_25223;
if(cljs.core.truth_(inst_25208)){
var statearr_25237_25280 = state_25223__$1;
(statearr_25237_25280[(1)] = (23));

} else {
var statearr_25238_25281 = state_25223__$1;
(statearr_25238_25281[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (6))){
var inst_25204 = (state_25223[(11)]);
var inst_25154 = (state_25223[(8)]);
var inst_25202 = (state_25223[(7)]);
var inst_25202__$1 = topic_fn.call(null,inst_25154);
var inst_25203 = cljs.core.deref.call(null,mults);
var inst_25204__$1 = cljs.core.get.call(null,inst_25203,inst_25202__$1);
var state_25223__$1 = (function (){var statearr_25239 = state_25223;
(statearr_25239[(11)] = inst_25204__$1);

(statearr_25239[(7)] = inst_25202__$1);

return statearr_25239;
})();
if(cljs.core.truth_(inst_25204__$1)){
var statearr_25240_25282 = state_25223__$1;
(statearr_25240_25282[(1)] = (19));

} else {
var statearr_25241_25283 = state_25223__$1;
(statearr_25241_25283[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (25))){
var inst_25213 = (state_25223[(2)]);
var state_25223__$1 = state_25223;
var statearr_25242_25284 = state_25223__$1;
(statearr_25242_25284[(2)] = inst_25213);

(statearr_25242_25284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (17))){
var inst_25178 = (state_25223[(10)]);
var inst_25187 = cljs.core.first.call(null,inst_25178);
var inst_25188 = cljs.core.async.muxch_STAR_.call(null,inst_25187);
var inst_25189 = cljs.core.async.close_BANG_.call(null,inst_25188);
var inst_25190 = cljs.core.next.call(null,inst_25178);
var inst_25164 = inst_25190;
var inst_25165 = null;
var inst_25166 = (0);
var inst_25167 = (0);
var state_25223__$1 = (function (){var statearr_25243 = state_25223;
(statearr_25243[(12)] = inst_25165);

(statearr_25243[(13)] = inst_25166);

(statearr_25243[(14)] = inst_25164);

(statearr_25243[(15)] = inst_25189);

(statearr_25243[(16)] = inst_25167);

return statearr_25243;
})();
var statearr_25244_25285 = state_25223__$1;
(statearr_25244_25285[(2)] = null);

(statearr_25244_25285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (3))){
var inst_25221 = (state_25223[(2)]);
var state_25223__$1 = state_25223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25223__$1,inst_25221);
} else {
if((state_val_25224 === (12))){
var inst_25198 = (state_25223[(2)]);
var state_25223__$1 = state_25223;
var statearr_25245_25286 = state_25223__$1;
(statearr_25245_25286[(2)] = inst_25198);

(statearr_25245_25286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (2))){
var state_25223__$1 = state_25223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25223__$1,(4),ch);
} else {
if((state_val_25224 === (23))){
var state_25223__$1 = state_25223;
var statearr_25246_25287 = state_25223__$1;
(statearr_25246_25287[(2)] = null);

(statearr_25246_25287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (19))){
var inst_25204 = (state_25223[(11)]);
var inst_25154 = (state_25223[(8)]);
var inst_25206 = cljs.core.async.muxch_STAR_.call(null,inst_25204);
var state_25223__$1 = state_25223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25223__$1,(22),inst_25206,inst_25154);
} else {
if((state_val_25224 === (11))){
var inst_25164 = (state_25223[(14)]);
var inst_25178 = (state_25223[(10)]);
var inst_25178__$1 = cljs.core.seq.call(null,inst_25164);
var state_25223__$1 = (function (){var statearr_25247 = state_25223;
(statearr_25247[(10)] = inst_25178__$1);

return statearr_25247;
})();
if(inst_25178__$1){
var statearr_25248_25288 = state_25223__$1;
(statearr_25248_25288[(1)] = (13));

} else {
var statearr_25249_25289 = state_25223__$1;
(statearr_25249_25289[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (9))){
var inst_25200 = (state_25223[(2)]);
var state_25223__$1 = state_25223;
var statearr_25250_25290 = state_25223__$1;
(statearr_25250_25290[(2)] = inst_25200);

(statearr_25250_25290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (5))){
var inst_25161 = cljs.core.deref.call(null,mults);
var inst_25162 = cljs.core.vals.call(null,inst_25161);
var inst_25163 = cljs.core.seq.call(null,inst_25162);
var inst_25164 = inst_25163;
var inst_25165 = null;
var inst_25166 = (0);
var inst_25167 = (0);
var state_25223__$1 = (function (){var statearr_25251 = state_25223;
(statearr_25251[(12)] = inst_25165);

(statearr_25251[(13)] = inst_25166);

(statearr_25251[(14)] = inst_25164);

(statearr_25251[(16)] = inst_25167);

return statearr_25251;
})();
var statearr_25252_25291 = state_25223__$1;
(statearr_25252_25291[(2)] = null);

(statearr_25252_25291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (14))){
var state_25223__$1 = state_25223;
var statearr_25256_25292 = state_25223__$1;
(statearr_25256_25292[(2)] = null);

(statearr_25256_25292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (16))){
var inst_25178 = (state_25223[(10)]);
var inst_25182 = cljs.core.chunk_first.call(null,inst_25178);
var inst_25183 = cljs.core.chunk_rest.call(null,inst_25178);
var inst_25184 = cljs.core.count.call(null,inst_25182);
var inst_25164 = inst_25183;
var inst_25165 = inst_25182;
var inst_25166 = inst_25184;
var inst_25167 = (0);
var state_25223__$1 = (function (){var statearr_25257 = state_25223;
(statearr_25257[(12)] = inst_25165);

(statearr_25257[(13)] = inst_25166);

(statearr_25257[(14)] = inst_25164);

(statearr_25257[(16)] = inst_25167);

return statearr_25257;
})();
var statearr_25258_25293 = state_25223__$1;
(statearr_25258_25293[(2)] = null);

(statearr_25258_25293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (10))){
var inst_25165 = (state_25223[(12)]);
var inst_25166 = (state_25223[(13)]);
var inst_25164 = (state_25223[(14)]);
var inst_25167 = (state_25223[(16)]);
var inst_25172 = cljs.core._nth.call(null,inst_25165,inst_25167);
var inst_25173 = cljs.core.async.muxch_STAR_.call(null,inst_25172);
var inst_25174 = cljs.core.async.close_BANG_.call(null,inst_25173);
var inst_25175 = (inst_25167 + (1));
var tmp25253 = inst_25165;
var tmp25254 = inst_25166;
var tmp25255 = inst_25164;
var inst_25164__$1 = tmp25255;
var inst_25165__$1 = tmp25253;
var inst_25166__$1 = tmp25254;
var inst_25167__$1 = inst_25175;
var state_25223__$1 = (function (){var statearr_25259 = state_25223;
(statearr_25259[(12)] = inst_25165__$1);

(statearr_25259[(13)] = inst_25166__$1);

(statearr_25259[(14)] = inst_25164__$1);

(statearr_25259[(16)] = inst_25167__$1);

(statearr_25259[(17)] = inst_25174);

return statearr_25259;
})();
var statearr_25260_25294 = state_25223__$1;
(statearr_25260_25294[(2)] = null);

(statearr_25260_25294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (18))){
var inst_25193 = (state_25223[(2)]);
var state_25223__$1 = state_25223;
var statearr_25261_25295 = state_25223__$1;
(statearr_25261_25295[(2)] = inst_25193);

(statearr_25261_25295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25224 === (8))){
var inst_25166 = (state_25223[(13)]);
var inst_25167 = (state_25223[(16)]);
var inst_25169 = (inst_25167 < inst_25166);
var inst_25170 = inst_25169;
var state_25223__$1 = state_25223;
if(cljs.core.truth_(inst_25170)){
var statearr_25262_25296 = state_25223__$1;
(statearr_25262_25296[(1)] = (10));

} else {
var statearr_25263_25297 = state_25223__$1;
(statearr_25263_25297[(1)] = (11));

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
});})(c__24035__auto___25269,mults,ensure_mult,p))
;
return ((function (switch__23945__auto__,c__24035__auto___25269,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23946__auto__ = null;
var cljs$core$async$state_machine__23946__auto____0 = (function (){
var statearr_25264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25264[(0)] = cljs$core$async$state_machine__23946__auto__);

(statearr_25264[(1)] = (1));

return statearr_25264;
});
var cljs$core$async$state_machine__23946__auto____1 = (function (state_25223){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_25223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e25265){if((e25265 instanceof Object)){
var ex__23949__auto__ = e25265;
var statearr_25266_25298 = state_25223;
(statearr_25266_25298[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25299 = state_25223;
state_25223 = G__25299;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$state_machine__23946__auto__ = function(state_25223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23946__auto____1.call(this,state_25223);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23946__auto____0;
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23946__auto____1;
return cljs$core$async$state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___25269,mults,ensure_mult,p))
})();
var state__24037__auto__ = (function (){var statearr_25267 = f__24036__auto__.call(null);
(statearr_25267[(6)] = c__24035__auto___25269);

return statearr_25267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___25269,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25301 = arguments.length;
switch (G__25301) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25304 = arguments.length;
switch (G__25304) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25307 = arguments.length;
switch (G__25307) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24035__auto___25374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___25374,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___25374,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25346){
var state_val_25347 = (state_25346[(1)]);
if((state_val_25347 === (7))){
var state_25346__$1 = state_25346;
var statearr_25348_25375 = state_25346__$1;
(statearr_25348_25375[(2)] = null);

(statearr_25348_25375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25347 === (1))){
var state_25346__$1 = state_25346;
var statearr_25349_25376 = state_25346__$1;
(statearr_25349_25376[(2)] = null);

(statearr_25349_25376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25347 === (4))){
var inst_25310 = (state_25346[(7)]);
var inst_25312 = (inst_25310 < cnt);
var state_25346__$1 = state_25346;
if(cljs.core.truth_(inst_25312)){
var statearr_25350_25377 = state_25346__$1;
(statearr_25350_25377[(1)] = (6));

} else {
var statearr_25351_25378 = state_25346__$1;
(statearr_25351_25378[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25347 === (15))){
var inst_25342 = (state_25346[(2)]);
var state_25346__$1 = state_25346;
var statearr_25352_25379 = state_25346__$1;
(statearr_25352_25379[(2)] = inst_25342);

(statearr_25352_25379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25347 === (13))){
var inst_25335 = cljs.core.async.close_BANG_.call(null,out);
var state_25346__$1 = state_25346;
var statearr_25353_25380 = state_25346__$1;
(statearr_25353_25380[(2)] = inst_25335);

(statearr_25353_25380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25347 === (6))){
var state_25346__$1 = state_25346;
var statearr_25354_25381 = state_25346__$1;
(statearr_25354_25381[(2)] = null);

(statearr_25354_25381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25347 === (3))){
var inst_25344 = (state_25346[(2)]);
var state_25346__$1 = state_25346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25346__$1,inst_25344);
} else {
if((state_val_25347 === (12))){
var inst_25332 = (state_25346[(8)]);
var inst_25332__$1 = (state_25346[(2)]);
var inst_25333 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25332__$1);
var state_25346__$1 = (function (){var statearr_25355 = state_25346;
(statearr_25355[(8)] = inst_25332__$1);

return statearr_25355;
})();
if(cljs.core.truth_(inst_25333)){
var statearr_25356_25382 = state_25346__$1;
(statearr_25356_25382[(1)] = (13));

} else {
var statearr_25357_25383 = state_25346__$1;
(statearr_25357_25383[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25347 === (2))){
var inst_25309 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25310 = (0);
var state_25346__$1 = (function (){var statearr_25358 = state_25346;
(statearr_25358[(9)] = inst_25309);

(statearr_25358[(7)] = inst_25310);

return statearr_25358;
})();
var statearr_25359_25384 = state_25346__$1;
(statearr_25359_25384[(2)] = null);

(statearr_25359_25384[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25347 === (11))){
var inst_25310 = (state_25346[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25346,(10),Object,null,(9));
var inst_25319 = chs__$1.call(null,inst_25310);
var inst_25320 = done.call(null,inst_25310);
var inst_25321 = cljs.core.async.take_BANG_.call(null,inst_25319,inst_25320);
var state_25346__$1 = state_25346;
var statearr_25360_25385 = state_25346__$1;
(statearr_25360_25385[(2)] = inst_25321);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25346__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25347 === (9))){
var inst_25310 = (state_25346[(7)]);
var inst_25323 = (state_25346[(2)]);
var inst_25324 = (inst_25310 + (1));
var inst_25310__$1 = inst_25324;
var state_25346__$1 = (function (){var statearr_25361 = state_25346;
(statearr_25361[(7)] = inst_25310__$1);

(statearr_25361[(10)] = inst_25323);

return statearr_25361;
})();
var statearr_25362_25386 = state_25346__$1;
(statearr_25362_25386[(2)] = null);

(statearr_25362_25386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25347 === (5))){
var inst_25330 = (state_25346[(2)]);
var state_25346__$1 = (function (){var statearr_25363 = state_25346;
(statearr_25363[(11)] = inst_25330);

return statearr_25363;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25346__$1,(12),dchan);
} else {
if((state_val_25347 === (14))){
var inst_25332 = (state_25346[(8)]);
var inst_25337 = cljs.core.apply.call(null,f,inst_25332);
var state_25346__$1 = state_25346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25346__$1,(16),out,inst_25337);
} else {
if((state_val_25347 === (16))){
var inst_25339 = (state_25346[(2)]);
var state_25346__$1 = (function (){var statearr_25364 = state_25346;
(statearr_25364[(12)] = inst_25339);

return statearr_25364;
})();
var statearr_25365_25387 = state_25346__$1;
(statearr_25365_25387[(2)] = null);

(statearr_25365_25387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25347 === (10))){
var inst_25314 = (state_25346[(2)]);
var inst_25315 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25346__$1 = (function (){var statearr_25366 = state_25346;
(statearr_25366[(13)] = inst_25314);

return statearr_25366;
})();
var statearr_25367_25388 = state_25346__$1;
(statearr_25367_25388[(2)] = inst_25315);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25346__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25347 === (8))){
var inst_25328 = (state_25346[(2)]);
var state_25346__$1 = state_25346;
var statearr_25368_25389 = state_25346__$1;
(statearr_25368_25389[(2)] = inst_25328);

(statearr_25368_25389[(1)] = (5));


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
});})(c__24035__auto___25374,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23945__auto__,c__24035__auto___25374,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23946__auto__ = null;
var cljs$core$async$state_machine__23946__auto____0 = (function (){
var statearr_25369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25369[(0)] = cljs$core$async$state_machine__23946__auto__);

(statearr_25369[(1)] = (1));

return statearr_25369;
});
var cljs$core$async$state_machine__23946__auto____1 = (function (state_25346){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_25346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e25370){if((e25370 instanceof Object)){
var ex__23949__auto__ = e25370;
var statearr_25371_25390 = state_25346;
(statearr_25371_25390[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25391 = state_25346;
state_25346 = G__25391;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$state_machine__23946__auto__ = function(state_25346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23946__auto____1.call(this,state_25346);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23946__auto____0;
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23946__auto____1;
return cljs$core$async$state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___25374,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24037__auto__ = (function (){var statearr_25372 = f__24036__auto__.call(null);
(statearr_25372[(6)] = c__24035__auto___25374);

return statearr_25372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___25374,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25394 = arguments.length;
switch (G__25394) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24035__auto___25448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___25448,out){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___25448,out){
return (function (state_25426){
var state_val_25427 = (state_25426[(1)]);
if((state_val_25427 === (7))){
var inst_25405 = (state_25426[(7)]);
var inst_25406 = (state_25426[(8)]);
var inst_25405__$1 = (state_25426[(2)]);
var inst_25406__$1 = cljs.core.nth.call(null,inst_25405__$1,(0),null);
var inst_25407 = cljs.core.nth.call(null,inst_25405__$1,(1),null);
var inst_25408 = (inst_25406__$1 == null);
var state_25426__$1 = (function (){var statearr_25428 = state_25426;
(statearr_25428[(7)] = inst_25405__$1);

(statearr_25428[(8)] = inst_25406__$1);

(statearr_25428[(9)] = inst_25407);

return statearr_25428;
})();
if(cljs.core.truth_(inst_25408)){
var statearr_25429_25449 = state_25426__$1;
(statearr_25429_25449[(1)] = (8));

} else {
var statearr_25430_25450 = state_25426__$1;
(statearr_25430_25450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25427 === (1))){
var inst_25395 = cljs.core.vec.call(null,chs);
var inst_25396 = inst_25395;
var state_25426__$1 = (function (){var statearr_25431 = state_25426;
(statearr_25431[(10)] = inst_25396);

return statearr_25431;
})();
var statearr_25432_25451 = state_25426__$1;
(statearr_25432_25451[(2)] = null);

(statearr_25432_25451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25427 === (4))){
var inst_25396 = (state_25426[(10)]);
var state_25426__$1 = state_25426;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25426__$1,(7),inst_25396);
} else {
if((state_val_25427 === (6))){
var inst_25422 = (state_25426[(2)]);
var state_25426__$1 = state_25426;
var statearr_25433_25452 = state_25426__$1;
(statearr_25433_25452[(2)] = inst_25422);

(statearr_25433_25452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25427 === (3))){
var inst_25424 = (state_25426[(2)]);
var state_25426__$1 = state_25426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25426__$1,inst_25424);
} else {
if((state_val_25427 === (2))){
var inst_25396 = (state_25426[(10)]);
var inst_25398 = cljs.core.count.call(null,inst_25396);
var inst_25399 = (inst_25398 > (0));
var state_25426__$1 = state_25426;
if(cljs.core.truth_(inst_25399)){
var statearr_25435_25453 = state_25426__$1;
(statearr_25435_25453[(1)] = (4));

} else {
var statearr_25436_25454 = state_25426__$1;
(statearr_25436_25454[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25427 === (11))){
var inst_25396 = (state_25426[(10)]);
var inst_25415 = (state_25426[(2)]);
var tmp25434 = inst_25396;
var inst_25396__$1 = tmp25434;
var state_25426__$1 = (function (){var statearr_25437 = state_25426;
(statearr_25437[(10)] = inst_25396__$1);

(statearr_25437[(11)] = inst_25415);

return statearr_25437;
})();
var statearr_25438_25455 = state_25426__$1;
(statearr_25438_25455[(2)] = null);

(statearr_25438_25455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25427 === (9))){
var inst_25406 = (state_25426[(8)]);
var state_25426__$1 = state_25426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25426__$1,(11),out,inst_25406);
} else {
if((state_val_25427 === (5))){
var inst_25420 = cljs.core.async.close_BANG_.call(null,out);
var state_25426__$1 = state_25426;
var statearr_25439_25456 = state_25426__$1;
(statearr_25439_25456[(2)] = inst_25420);

(statearr_25439_25456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25427 === (10))){
var inst_25418 = (state_25426[(2)]);
var state_25426__$1 = state_25426;
var statearr_25440_25457 = state_25426__$1;
(statearr_25440_25457[(2)] = inst_25418);

(statearr_25440_25457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25427 === (8))){
var inst_25396 = (state_25426[(10)]);
var inst_25405 = (state_25426[(7)]);
var inst_25406 = (state_25426[(8)]);
var inst_25407 = (state_25426[(9)]);
var inst_25410 = (function (){var cs = inst_25396;
var vec__25401 = inst_25405;
var v = inst_25406;
var c = inst_25407;
return ((function (cs,vec__25401,v,c,inst_25396,inst_25405,inst_25406,inst_25407,state_val_25427,c__24035__auto___25448,out){
return (function (p1__25392_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25392_SHARP_);
});
;})(cs,vec__25401,v,c,inst_25396,inst_25405,inst_25406,inst_25407,state_val_25427,c__24035__auto___25448,out))
})();
var inst_25411 = cljs.core.filterv.call(null,inst_25410,inst_25396);
var inst_25396__$1 = inst_25411;
var state_25426__$1 = (function (){var statearr_25441 = state_25426;
(statearr_25441[(10)] = inst_25396__$1);

return statearr_25441;
})();
var statearr_25442_25458 = state_25426__$1;
(statearr_25442_25458[(2)] = null);

(statearr_25442_25458[(1)] = (2));


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
});})(c__24035__auto___25448,out))
;
return ((function (switch__23945__auto__,c__24035__auto___25448,out){
return (function() {
var cljs$core$async$state_machine__23946__auto__ = null;
var cljs$core$async$state_machine__23946__auto____0 = (function (){
var statearr_25443 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25443[(0)] = cljs$core$async$state_machine__23946__auto__);

(statearr_25443[(1)] = (1));

return statearr_25443;
});
var cljs$core$async$state_machine__23946__auto____1 = (function (state_25426){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_25426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e25444){if((e25444 instanceof Object)){
var ex__23949__auto__ = e25444;
var statearr_25445_25459 = state_25426;
(statearr_25445_25459[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25460 = state_25426;
state_25426 = G__25460;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$state_machine__23946__auto__ = function(state_25426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23946__auto____1.call(this,state_25426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23946__auto____0;
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23946__auto____1;
return cljs$core$async$state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___25448,out))
})();
var state__24037__auto__ = (function (){var statearr_25446 = f__24036__auto__.call(null);
(statearr_25446[(6)] = c__24035__auto___25448);

return statearr_25446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___25448,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25462 = arguments.length;
switch (G__25462) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24035__auto___25507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___25507,out){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___25507,out){
return (function (state_25486){
var state_val_25487 = (state_25486[(1)]);
if((state_val_25487 === (7))){
var inst_25468 = (state_25486[(7)]);
var inst_25468__$1 = (state_25486[(2)]);
var inst_25469 = (inst_25468__$1 == null);
var inst_25470 = cljs.core.not.call(null,inst_25469);
var state_25486__$1 = (function (){var statearr_25488 = state_25486;
(statearr_25488[(7)] = inst_25468__$1);

return statearr_25488;
})();
if(inst_25470){
var statearr_25489_25508 = state_25486__$1;
(statearr_25489_25508[(1)] = (8));

} else {
var statearr_25490_25509 = state_25486__$1;
(statearr_25490_25509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25487 === (1))){
var inst_25463 = (0);
var state_25486__$1 = (function (){var statearr_25491 = state_25486;
(statearr_25491[(8)] = inst_25463);

return statearr_25491;
})();
var statearr_25492_25510 = state_25486__$1;
(statearr_25492_25510[(2)] = null);

(statearr_25492_25510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25487 === (4))){
var state_25486__$1 = state_25486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25486__$1,(7),ch);
} else {
if((state_val_25487 === (6))){
var inst_25481 = (state_25486[(2)]);
var state_25486__$1 = state_25486;
var statearr_25493_25511 = state_25486__$1;
(statearr_25493_25511[(2)] = inst_25481);

(statearr_25493_25511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25487 === (3))){
var inst_25483 = (state_25486[(2)]);
var inst_25484 = cljs.core.async.close_BANG_.call(null,out);
var state_25486__$1 = (function (){var statearr_25494 = state_25486;
(statearr_25494[(9)] = inst_25483);

return statearr_25494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25486__$1,inst_25484);
} else {
if((state_val_25487 === (2))){
var inst_25463 = (state_25486[(8)]);
var inst_25465 = (inst_25463 < n);
var state_25486__$1 = state_25486;
if(cljs.core.truth_(inst_25465)){
var statearr_25495_25512 = state_25486__$1;
(statearr_25495_25512[(1)] = (4));

} else {
var statearr_25496_25513 = state_25486__$1;
(statearr_25496_25513[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25487 === (11))){
var inst_25463 = (state_25486[(8)]);
var inst_25473 = (state_25486[(2)]);
var inst_25474 = (inst_25463 + (1));
var inst_25463__$1 = inst_25474;
var state_25486__$1 = (function (){var statearr_25497 = state_25486;
(statearr_25497[(8)] = inst_25463__$1);

(statearr_25497[(10)] = inst_25473);

return statearr_25497;
})();
var statearr_25498_25514 = state_25486__$1;
(statearr_25498_25514[(2)] = null);

(statearr_25498_25514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25487 === (9))){
var state_25486__$1 = state_25486;
var statearr_25499_25515 = state_25486__$1;
(statearr_25499_25515[(2)] = null);

(statearr_25499_25515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25487 === (5))){
var state_25486__$1 = state_25486;
var statearr_25500_25516 = state_25486__$1;
(statearr_25500_25516[(2)] = null);

(statearr_25500_25516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25487 === (10))){
var inst_25478 = (state_25486[(2)]);
var state_25486__$1 = state_25486;
var statearr_25501_25517 = state_25486__$1;
(statearr_25501_25517[(2)] = inst_25478);

(statearr_25501_25517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25487 === (8))){
var inst_25468 = (state_25486[(7)]);
var state_25486__$1 = state_25486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25486__$1,(11),out,inst_25468);
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
});})(c__24035__auto___25507,out))
;
return ((function (switch__23945__auto__,c__24035__auto___25507,out){
return (function() {
var cljs$core$async$state_machine__23946__auto__ = null;
var cljs$core$async$state_machine__23946__auto____0 = (function (){
var statearr_25502 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25502[(0)] = cljs$core$async$state_machine__23946__auto__);

(statearr_25502[(1)] = (1));

return statearr_25502;
});
var cljs$core$async$state_machine__23946__auto____1 = (function (state_25486){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_25486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e25503){if((e25503 instanceof Object)){
var ex__23949__auto__ = e25503;
var statearr_25504_25518 = state_25486;
(statearr_25504_25518[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25519 = state_25486;
state_25486 = G__25519;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$state_machine__23946__auto__ = function(state_25486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23946__auto____1.call(this,state_25486);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23946__auto____0;
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23946__auto____1;
return cljs$core$async$state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___25507,out))
})();
var state__24037__auto__ = (function (){var statearr_25505 = f__24036__auto__.call(null);
(statearr_25505[(6)] = c__24035__auto___25507);

return statearr_25505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___25507,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25521 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25521 = (function (f,ch,meta25522){
this.f = f;
this.ch = ch;
this.meta25522 = meta25522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25523,meta25522__$1){
var self__ = this;
var _25523__$1 = this;
return (new cljs.core.async.t_cljs$core$async25521(self__.f,self__.ch,meta25522__$1));
});

cljs.core.async.t_cljs$core$async25521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25523){
var self__ = this;
var _25523__$1 = this;
return self__.meta25522;
});

cljs.core.async.t_cljs$core$async25521.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25521.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25521.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25521.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25521.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25524 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25524 = (function (f,ch,meta25522,_,fn1,meta25525){
this.f = f;
this.ch = ch;
this.meta25522 = meta25522;
this._ = _;
this.fn1 = fn1;
this.meta25525 = meta25525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25526,meta25525__$1){
var self__ = this;
var _25526__$1 = this;
return (new cljs.core.async.t_cljs$core$async25524(self__.f,self__.ch,self__.meta25522,self__._,self__.fn1,meta25525__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25526){
var self__ = this;
var _25526__$1 = this;
return self__.meta25525;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25524.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25524.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25520_SHARP_){
return f1.call(null,(((p1__25520_SHARP_ == null))?null:self__.f.call(null,p1__25520_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25524.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25522","meta25522",-865110453,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25521","cljs.core.async/t_cljs$core$async25521",-358589403,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25525","meta25525",-407040110,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25524";

cljs.core.async.t_cljs$core$async25524.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25524");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25524.
 */
cljs.core.async.__GT_t_cljs$core$async25524 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25524(f__$1,ch__$1,meta25522__$1,___$2,fn1__$1,meta25525){
return (new cljs.core.async.t_cljs$core$async25524(f__$1,ch__$1,meta25522__$1,___$2,fn1__$1,meta25525));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25524(self__.f,self__.ch,self__.meta25522,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25521.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25521.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25522","meta25522",-865110453,null)], null);
});

cljs.core.async.t_cljs$core$async25521.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25521";

cljs.core.async.t_cljs$core$async25521.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25521");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25521.
 */
cljs.core.async.__GT_t_cljs$core$async25521 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25521(f__$1,ch__$1,meta25522){
return (new cljs.core.async.t_cljs$core$async25521(f__$1,ch__$1,meta25522));
});

}

return (new cljs.core.async.t_cljs$core$async25521(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25527 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25527 = (function (f,ch,meta25528){
this.f = f;
this.ch = ch;
this.meta25528 = meta25528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25529,meta25528__$1){
var self__ = this;
var _25529__$1 = this;
return (new cljs.core.async.t_cljs$core$async25527(self__.f,self__.ch,meta25528__$1));
});

cljs.core.async.t_cljs$core$async25527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25529){
var self__ = this;
var _25529__$1 = this;
return self__.meta25528;
});

cljs.core.async.t_cljs$core$async25527.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25527.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25527.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25527.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25527.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25527.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25528","meta25528",1161445290,null)], null);
});

cljs.core.async.t_cljs$core$async25527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25527";

cljs.core.async.t_cljs$core$async25527.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25527");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25527.
 */
cljs.core.async.__GT_t_cljs$core$async25527 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25527(f__$1,ch__$1,meta25528){
return (new cljs.core.async.t_cljs$core$async25527(f__$1,ch__$1,meta25528));
});

}

return (new cljs.core.async.t_cljs$core$async25527(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25530 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25530 = (function (p,ch,meta25531){
this.p = p;
this.ch = ch;
this.meta25531 = meta25531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25532,meta25531__$1){
var self__ = this;
var _25532__$1 = this;
return (new cljs.core.async.t_cljs$core$async25530(self__.p,self__.ch,meta25531__$1));
});

cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25532){
var self__ = this;
var _25532__$1 = this;
return self__.meta25531;
});

cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25531","meta25531",1517535015,null)], null);
});

cljs.core.async.t_cljs$core$async25530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25530";

cljs.core.async.t_cljs$core$async25530.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25530");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25530.
 */
cljs.core.async.__GT_t_cljs$core$async25530 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25530(p__$1,ch__$1,meta25531){
return (new cljs.core.async.t_cljs$core$async25530(p__$1,ch__$1,meta25531));
});

}

return (new cljs.core.async.t_cljs$core$async25530(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25534 = arguments.length;
switch (G__25534) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24035__auto___25574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___25574,out){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___25574,out){
return (function (state_25555){
var state_val_25556 = (state_25555[(1)]);
if((state_val_25556 === (7))){
var inst_25551 = (state_25555[(2)]);
var state_25555__$1 = state_25555;
var statearr_25557_25575 = state_25555__$1;
(statearr_25557_25575[(2)] = inst_25551);

(statearr_25557_25575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (1))){
var state_25555__$1 = state_25555;
var statearr_25558_25576 = state_25555__$1;
(statearr_25558_25576[(2)] = null);

(statearr_25558_25576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (4))){
var inst_25537 = (state_25555[(7)]);
var inst_25537__$1 = (state_25555[(2)]);
var inst_25538 = (inst_25537__$1 == null);
var state_25555__$1 = (function (){var statearr_25559 = state_25555;
(statearr_25559[(7)] = inst_25537__$1);

return statearr_25559;
})();
if(cljs.core.truth_(inst_25538)){
var statearr_25560_25577 = state_25555__$1;
(statearr_25560_25577[(1)] = (5));

} else {
var statearr_25561_25578 = state_25555__$1;
(statearr_25561_25578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (6))){
var inst_25537 = (state_25555[(7)]);
var inst_25542 = p.call(null,inst_25537);
var state_25555__$1 = state_25555;
if(cljs.core.truth_(inst_25542)){
var statearr_25562_25579 = state_25555__$1;
(statearr_25562_25579[(1)] = (8));

} else {
var statearr_25563_25580 = state_25555__$1;
(statearr_25563_25580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (3))){
var inst_25553 = (state_25555[(2)]);
var state_25555__$1 = state_25555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25555__$1,inst_25553);
} else {
if((state_val_25556 === (2))){
var state_25555__$1 = state_25555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25555__$1,(4),ch);
} else {
if((state_val_25556 === (11))){
var inst_25545 = (state_25555[(2)]);
var state_25555__$1 = state_25555;
var statearr_25564_25581 = state_25555__$1;
(statearr_25564_25581[(2)] = inst_25545);

(statearr_25564_25581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (9))){
var state_25555__$1 = state_25555;
var statearr_25565_25582 = state_25555__$1;
(statearr_25565_25582[(2)] = null);

(statearr_25565_25582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (5))){
var inst_25540 = cljs.core.async.close_BANG_.call(null,out);
var state_25555__$1 = state_25555;
var statearr_25566_25583 = state_25555__$1;
(statearr_25566_25583[(2)] = inst_25540);

(statearr_25566_25583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (10))){
var inst_25548 = (state_25555[(2)]);
var state_25555__$1 = (function (){var statearr_25567 = state_25555;
(statearr_25567[(8)] = inst_25548);

return statearr_25567;
})();
var statearr_25568_25584 = state_25555__$1;
(statearr_25568_25584[(2)] = null);

(statearr_25568_25584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25556 === (8))){
var inst_25537 = (state_25555[(7)]);
var state_25555__$1 = state_25555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25555__$1,(11),out,inst_25537);
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
});})(c__24035__auto___25574,out))
;
return ((function (switch__23945__auto__,c__24035__auto___25574,out){
return (function() {
var cljs$core$async$state_machine__23946__auto__ = null;
var cljs$core$async$state_machine__23946__auto____0 = (function (){
var statearr_25569 = [null,null,null,null,null,null,null,null,null];
(statearr_25569[(0)] = cljs$core$async$state_machine__23946__auto__);

(statearr_25569[(1)] = (1));

return statearr_25569;
});
var cljs$core$async$state_machine__23946__auto____1 = (function (state_25555){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_25555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e25570){if((e25570 instanceof Object)){
var ex__23949__auto__ = e25570;
var statearr_25571_25585 = state_25555;
(statearr_25571_25585[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25586 = state_25555;
state_25555 = G__25586;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$state_machine__23946__auto__ = function(state_25555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23946__auto____1.call(this,state_25555);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23946__auto____0;
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23946__auto____1;
return cljs$core$async$state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___25574,out))
})();
var state__24037__auto__ = (function (){var statearr_25572 = f__24036__auto__.call(null);
(statearr_25572[(6)] = c__24035__auto___25574);

return statearr_25572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___25574,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25588 = arguments.length;
switch (G__25588) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto__){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto__){
return (function (state_25651){
var state_val_25652 = (state_25651[(1)]);
if((state_val_25652 === (7))){
var inst_25647 = (state_25651[(2)]);
var state_25651__$1 = state_25651;
var statearr_25653_25691 = state_25651__$1;
(statearr_25653_25691[(2)] = inst_25647);

(statearr_25653_25691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (20))){
var inst_25617 = (state_25651[(7)]);
var inst_25628 = (state_25651[(2)]);
var inst_25629 = cljs.core.next.call(null,inst_25617);
var inst_25603 = inst_25629;
var inst_25604 = null;
var inst_25605 = (0);
var inst_25606 = (0);
var state_25651__$1 = (function (){var statearr_25654 = state_25651;
(statearr_25654[(8)] = inst_25603);

(statearr_25654[(9)] = inst_25604);

(statearr_25654[(10)] = inst_25628);

(statearr_25654[(11)] = inst_25605);

(statearr_25654[(12)] = inst_25606);

return statearr_25654;
})();
var statearr_25655_25692 = state_25651__$1;
(statearr_25655_25692[(2)] = null);

(statearr_25655_25692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (1))){
var state_25651__$1 = state_25651;
var statearr_25656_25693 = state_25651__$1;
(statearr_25656_25693[(2)] = null);

(statearr_25656_25693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (4))){
var inst_25592 = (state_25651[(13)]);
var inst_25592__$1 = (state_25651[(2)]);
var inst_25593 = (inst_25592__$1 == null);
var state_25651__$1 = (function (){var statearr_25657 = state_25651;
(statearr_25657[(13)] = inst_25592__$1);

return statearr_25657;
})();
if(cljs.core.truth_(inst_25593)){
var statearr_25658_25694 = state_25651__$1;
(statearr_25658_25694[(1)] = (5));

} else {
var statearr_25659_25695 = state_25651__$1;
(statearr_25659_25695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (15))){
var state_25651__$1 = state_25651;
var statearr_25663_25696 = state_25651__$1;
(statearr_25663_25696[(2)] = null);

(statearr_25663_25696[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (21))){
var state_25651__$1 = state_25651;
var statearr_25664_25697 = state_25651__$1;
(statearr_25664_25697[(2)] = null);

(statearr_25664_25697[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (13))){
var inst_25603 = (state_25651[(8)]);
var inst_25604 = (state_25651[(9)]);
var inst_25605 = (state_25651[(11)]);
var inst_25606 = (state_25651[(12)]);
var inst_25613 = (state_25651[(2)]);
var inst_25614 = (inst_25606 + (1));
var tmp25660 = inst_25603;
var tmp25661 = inst_25604;
var tmp25662 = inst_25605;
var inst_25603__$1 = tmp25660;
var inst_25604__$1 = tmp25661;
var inst_25605__$1 = tmp25662;
var inst_25606__$1 = inst_25614;
var state_25651__$1 = (function (){var statearr_25665 = state_25651;
(statearr_25665[(8)] = inst_25603__$1);

(statearr_25665[(9)] = inst_25604__$1);

(statearr_25665[(14)] = inst_25613);

(statearr_25665[(11)] = inst_25605__$1);

(statearr_25665[(12)] = inst_25606__$1);

return statearr_25665;
})();
var statearr_25666_25698 = state_25651__$1;
(statearr_25666_25698[(2)] = null);

(statearr_25666_25698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (22))){
var state_25651__$1 = state_25651;
var statearr_25667_25699 = state_25651__$1;
(statearr_25667_25699[(2)] = null);

(statearr_25667_25699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (6))){
var inst_25592 = (state_25651[(13)]);
var inst_25601 = f.call(null,inst_25592);
var inst_25602 = cljs.core.seq.call(null,inst_25601);
var inst_25603 = inst_25602;
var inst_25604 = null;
var inst_25605 = (0);
var inst_25606 = (0);
var state_25651__$1 = (function (){var statearr_25668 = state_25651;
(statearr_25668[(8)] = inst_25603);

(statearr_25668[(9)] = inst_25604);

(statearr_25668[(11)] = inst_25605);

(statearr_25668[(12)] = inst_25606);

return statearr_25668;
})();
var statearr_25669_25700 = state_25651__$1;
(statearr_25669_25700[(2)] = null);

(statearr_25669_25700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (17))){
var inst_25617 = (state_25651[(7)]);
var inst_25621 = cljs.core.chunk_first.call(null,inst_25617);
var inst_25622 = cljs.core.chunk_rest.call(null,inst_25617);
var inst_25623 = cljs.core.count.call(null,inst_25621);
var inst_25603 = inst_25622;
var inst_25604 = inst_25621;
var inst_25605 = inst_25623;
var inst_25606 = (0);
var state_25651__$1 = (function (){var statearr_25670 = state_25651;
(statearr_25670[(8)] = inst_25603);

(statearr_25670[(9)] = inst_25604);

(statearr_25670[(11)] = inst_25605);

(statearr_25670[(12)] = inst_25606);

return statearr_25670;
})();
var statearr_25671_25701 = state_25651__$1;
(statearr_25671_25701[(2)] = null);

(statearr_25671_25701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (3))){
var inst_25649 = (state_25651[(2)]);
var state_25651__$1 = state_25651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25651__$1,inst_25649);
} else {
if((state_val_25652 === (12))){
var inst_25637 = (state_25651[(2)]);
var state_25651__$1 = state_25651;
var statearr_25672_25702 = state_25651__$1;
(statearr_25672_25702[(2)] = inst_25637);

(statearr_25672_25702[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (2))){
var state_25651__$1 = state_25651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25651__$1,(4),in$);
} else {
if((state_val_25652 === (23))){
var inst_25645 = (state_25651[(2)]);
var state_25651__$1 = state_25651;
var statearr_25673_25703 = state_25651__$1;
(statearr_25673_25703[(2)] = inst_25645);

(statearr_25673_25703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (19))){
var inst_25632 = (state_25651[(2)]);
var state_25651__$1 = state_25651;
var statearr_25674_25704 = state_25651__$1;
(statearr_25674_25704[(2)] = inst_25632);

(statearr_25674_25704[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (11))){
var inst_25603 = (state_25651[(8)]);
var inst_25617 = (state_25651[(7)]);
var inst_25617__$1 = cljs.core.seq.call(null,inst_25603);
var state_25651__$1 = (function (){var statearr_25675 = state_25651;
(statearr_25675[(7)] = inst_25617__$1);

return statearr_25675;
})();
if(inst_25617__$1){
var statearr_25676_25705 = state_25651__$1;
(statearr_25676_25705[(1)] = (14));

} else {
var statearr_25677_25706 = state_25651__$1;
(statearr_25677_25706[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (9))){
var inst_25639 = (state_25651[(2)]);
var inst_25640 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25651__$1 = (function (){var statearr_25678 = state_25651;
(statearr_25678[(15)] = inst_25639);

return statearr_25678;
})();
if(cljs.core.truth_(inst_25640)){
var statearr_25679_25707 = state_25651__$1;
(statearr_25679_25707[(1)] = (21));

} else {
var statearr_25680_25708 = state_25651__$1;
(statearr_25680_25708[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (5))){
var inst_25595 = cljs.core.async.close_BANG_.call(null,out);
var state_25651__$1 = state_25651;
var statearr_25681_25709 = state_25651__$1;
(statearr_25681_25709[(2)] = inst_25595);

(statearr_25681_25709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (14))){
var inst_25617 = (state_25651[(7)]);
var inst_25619 = cljs.core.chunked_seq_QMARK_.call(null,inst_25617);
var state_25651__$1 = state_25651;
if(inst_25619){
var statearr_25682_25710 = state_25651__$1;
(statearr_25682_25710[(1)] = (17));

} else {
var statearr_25683_25711 = state_25651__$1;
(statearr_25683_25711[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (16))){
var inst_25635 = (state_25651[(2)]);
var state_25651__$1 = state_25651;
var statearr_25684_25712 = state_25651__$1;
(statearr_25684_25712[(2)] = inst_25635);

(statearr_25684_25712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25652 === (10))){
var inst_25604 = (state_25651[(9)]);
var inst_25606 = (state_25651[(12)]);
var inst_25611 = cljs.core._nth.call(null,inst_25604,inst_25606);
var state_25651__$1 = state_25651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25651__$1,(13),out,inst_25611);
} else {
if((state_val_25652 === (18))){
var inst_25617 = (state_25651[(7)]);
var inst_25626 = cljs.core.first.call(null,inst_25617);
var state_25651__$1 = state_25651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25651__$1,(20),out,inst_25626);
} else {
if((state_val_25652 === (8))){
var inst_25605 = (state_25651[(11)]);
var inst_25606 = (state_25651[(12)]);
var inst_25608 = (inst_25606 < inst_25605);
var inst_25609 = inst_25608;
var state_25651__$1 = state_25651;
if(cljs.core.truth_(inst_25609)){
var statearr_25685_25713 = state_25651__$1;
(statearr_25685_25713[(1)] = (10));

} else {
var statearr_25686_25714 = state_25651__$1;
(statearr_25686_25714[(1)] = (11));

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
});})(c__24035__auto__))
;
return ((function (switch__23945__auto__,c__24035__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23946__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23946__auto____0 = (function (){
var statearr_25687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25687[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23946__auto__);

(statearr_25687[(1)] = (1));

return statearr_25687;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23946__auto____1 = (function (state_25651){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_25651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e25688){if((e25688 instanceof Object)){
var ex__23949__auto__ = e25688;
var statearr_25689_25715 = state_25651;
(statearr_25689_25715[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25716 = state_25651;
state_25651 = G__25716;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23946__auto__ = function(state_25651){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23946__auto____1.call(this,state_25651);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23946__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23946__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto__))
})();
var state__24037__auto__ = (function (){var statearr_25690 = f__24036__auto__.call(null);
(statearr_25690[(6)] = c__24035__auto__);

return statearr_25690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto__))
);

return c__24035__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25718 = arguments.length;
switch (G__25718) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25721 = arguments.length;
switch (G__25721) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25724 = arguments.length;
switch (G__25724) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24035__auto___25771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___25771,out){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___25771,out){
return (function (state_25748){
var state_val_25749 = (state_25748[(1)]);
if((state_val_25749 === (7))){
var inst_25743 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25750_25772 = state_25748__$1;
(statearr_25750_25772[(2)] = inst_25743);

(statearr_25750_25772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (1))){
var inst_25725 = null;
var state_25748__$1 = (function (){var statearr_25751 = state_25748;
(statearr_25751[(7)] = inst_25725);

return statearr_25751;
})();
var statearr_25752_25773 = state_25748__$1;
(statearr_25752_25773[(2)] = null);

(statearr_25752_25773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (4))){
var inst_25728 = (state_25748[(8)]);
var inst_25728__$1 = (state_25748[(2)]);
var inst_25729 = (inst_25728__$1 == null);
var inst_25730 = cljs.core.not.call(null,inst_25729);
var state_25748__$1 = (function (){var statearr_25753 = state_25748;
(statearr_25753[(8)] = inst_25728__$1);

return statearr_25753;
})();
if(inst_25730){
var statearr_25754_25774 = state_25748__$1;
(statearr_25754_25774[(1)] = (5));

} else {
var statearr_25755_25775 = state_25748__$1;
(statearr_25755_25775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (6))){
var state_25748__$1 = state_25748;
var statearr_25756_25776 = state_25748__$1;
(statearr_25756_25776[(2)] = null);

(statearr_25756_25776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (3))){
var inst_25745 = (state_25748[(2)]);
var inst_25746 = cljs.core.async.close_BANG_.call(null,out);
var state_25748__$1 = (function (){var statearr_25757 = state_25748;
(statearr_25757[(9)] = inst_25745);

return statearr_25757;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25748__$1,inst_25746);
} else {
if((state_val_25749 === (2))){
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25748__$1,(4),ch);
} else {
if((state_val_25749 === (11))){
var inst_25728 = (state_25748[(8)]);
var inst_25737 = (state_25748[(2)]);
var inst_25725 = inst_25728;
var state_25748__$1 = (function (){var statearr_25758 = state_25748;
(statearr_25758[(7)] = inst_25725);

(statearr_25758[(10)] = inst_25737);

return statearr_25758;
})();
var statearr_25759_25777 = state_25748__$1;
(statearr_25759_25777[(2)] = null);

(statearr_25759_25777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (9))){
var inst_25728 = (state_25748[(8)]);
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25748__$1,(11),out,inst_25728);
} else {
if((state_val_25749 === (5))){
var inst_25728 = (state_25748[(8)]);
var inst_25725 = (state_25748[(7)]);
var inst_25732 = cljs.core._EQ_.call(null,inst_25728,inst_25725);
var state_25748__$1 = state_25748;
if(inst_25732){
var statearr_25761_25778 = state_25748__$1;
(statearr_25761_25778[(1)] = (8));

} else {
var statearr_25762_25779 = state_25748__$1;
(statearr_25762_25779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (10))){
var inst_25740 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25763_25780 = state_25748__$1;
(statearr_25763_25780[(2)] = inst_25740);

(statearr_25763_25780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (8))){
var inst_25725 = (state_25748[(7)]);
var tmp25760 = inst_25725;
var inst_25725__$1 = tmp25760;
var state_25748__$1 = (function (){var statearr_25764 = state_25748;
(statearr_25764[(7)] = inst_25725__$1);

return statearr_25764;
})();
var statearr_25765_25781 = state_25748__$1;
(statearr_25765_25781[(2)] = null);

(statearr_25765_25781[(1)] = (2));


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
});})(c__24035__auto___25771,out))
;
return ((function (switch__23945__auto__,c__24035__auto___25771,out){
return (function() {
var cljs$core$async$state_machine__23946__auto__ = null;
var cljs$core$async$state_machine__23946__auto____0 = (function (){
var statearr_25766 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25766[(0)] = cljs$core$async$state_machine__23946__auto__);

(statearr_25766[(1)] = (1));

return statearr_25766;
});
var cljs$core$async$state_machine__23946__auto____1 = (function (state_25748){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_25748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e25767){if((e25767 instanceof Object)){
var ex__23949__auto__ = e25767;
var statearr_25768_25782 = state_25748;
(statearr_25768_25782[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25783 = state_25748;
state_25748 = G__25783;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$state_machine__23946__auto__ = function(state_25748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23946__auto____1.call(this,state_25748);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23946__auto____0;
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23946__auto____1;
return cljs$core$async$state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___25771,out))
})();
var state__24037__auto__ = (function (){var statearr_25769 = f__24036__auto__.call(null);
(statearr_25769[(6)] = c__24035__auto___25771);

return statearr_25769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___25771,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25785 = arguments.length;
switch (G__25785) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24035__auto___25851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___25851,out){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___25851,out){
return (function (state_25823){
var state_val_25824 = (state_25823[(1)]);
if((state_val_25824 === (7))){
var inst_25819 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
var statearr_25825_25852 = state_25823__$1;
(statearr_25825_25852[(2)] = inst_25819);

(statearr_25825_25852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (1))){
var inst_25786 = (new Array(n));
var inst_25787 = inst_25786;
var inst_25788 = (0);
var state_25823__$1 = (function (){var statearr_25826 = state_25823;
(statearr_25826[(7)] = inst_25788);

(statearr_25826[(8)] = inst_25787);

return statearr_25826;
})();
var statearr_25827_25853 = state_25823__$1;
(statearr_25827_25853[(2)] = null);

(statearr_25827_25853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (4))){
var inst_25791 = (state_25823[(9)]);
var inst_25791__$1 = (state_25823[(2)]);
var inst_25792 = (inst_25791__$1 == null);
var inst_25793 = cljs.core.not.call(null,inst_25792);
var state_25823__$1 = (function (){var statearr_25828 = state_25823;
(statearr_25828[(9)] = inst_25791__$1);

return statearr_25828;
})();
if(inst_25793){
var statearr_25829_25854 = state_25823__$1;
(statearr_25829_25854[(1)] = (5));

} else {
var statearr_25830_25855 = state_25823__$1;
(statearr_25830_25855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (15))){
var inst_25813 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
var statearr_25831_25856 = state_25823__$1;
(statearr_25831_25856[(2)] = inst_25813);

(statearr_25831_25856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (13))){
var state_25823__$1 = state_25823;
var statearr_25832_25857 = state_25823__$1;
(statearr_25832_25857[(2)] = null);

(statearr_25832_25857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (6))){
var inst_25788 = (state_25823[(7)]);
var inst_25809 = (inst_25788 > (0));
var state_25823__$1 = state_25823;
if(cljs.core.truth_(inst_25809)){
var statearr_25833_25858 = state_25823__$1;
(statearr_25833_25858[(1)] = (12));

} else {
var statearr_25834_25859 = state_25823__$1;
(statearr_25834_25859[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (3))){
var inst_25821 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25823__$1,inst_25821);
} else {
if((state_val_25824 === (12))){
var inst_25787 = (state_25823[(8)]);
var inst_25811 = cljs.core.vec.call(null,inst_25787);
var state_25823__$1 = state_25823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25823__$1,(15),out,inst_25811);
} else {
if((state_val_25824 === (2))){
var state_25823__$1 = state_25823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25823__$1,(4),ch);
} else {
if((state_val_25824 === (11))){
var inst_25803 = (state_25823[(2)]);
var inst_25804 = (new Array(n));
var inst_25787 = inst_25804;
var inst_25788 = (0);
var state_25823__$1 = (function (){var statearr_25835 = state_25823;
(statearr_25835[(7)] = inst_25788);

(statearr_25835[(8)] = inst_25787);

(statearr_25835[(10)] = inst_25803);

return statearr_25835;
})();
var statearr_25836_25860 = state_25823__$1;
(statearr_25836_25860[(2)] = null);

(statearr_25836_25860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (9))){
var inst_25787 = (state_25823[(8)]);
var inst_25801 = cljs.core.vec.call(null,inst_25787);
var state_25823__$1 = state_25823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25823__$1,(11),out,inst_25801);
} else {
if((state_val_25824 === (5))){
var inst_25796 = (state_25823[(11)]);
var inst_25788 = (state_25823[(7)]);
var inst_25787 = (state_25823[(8)]);
var inst_25791 = (state_25823[(9)]);
var inst_25795 = (inst_25787[inst_25788] = inst_25791);
var inst_25796__$1 = (inst_25788 + (1));
var inst_25797 = (inst_25796__$1 < n);
var state_25823__$1 = (function (){var statearr_25837 = state_25823;
(statearr_25837[(11)] = inst_25796__$1);

(statearr_25837[(12)] = inst_25795);

return statearr_25837;
})();
if(cljs.core.truth_(inst_25797)){
var statearr_25838_25861 = state_25823__$1;
(statearr_25838_25861[(1)] = (8));

} else {
var statearr_25839_25862 = state_25823__$1;
(statearr_25839_25862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (14))){
var inst_25816 = (state_25823[(2)]);
var inst_25817 = cljs.core.async.close_BANG_.call(null,out);
var state_25823__$1 = (function (){var statearr_25841 = state_25823;
(statearr_25841[(13)] = inst_25816);

return statearr_25841;
})();
var statearr_25842_25863 = state_25823__$1;
(statearr_25842_25863[(2)] = inst_25817);

(statearr_25842_25863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (10))){
var inst_25807 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
var statearr_25843_25864 = state_25823__$1;
(statearr_25843_25864[(2)] = inst_25807);

(statearr_25843_25864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25824 === (8))){
var inst_25796 = (state_25823[(11)]);
var inst_25787 = (state_25823[(8)]);
var tmp25840 = inst_25787;
var inst_25787__$1 = tmp25840;
var inst_25788 = inst_25796;
var state_25823__$1 = (function (){var statearr_25844 = state_25823;
(statearr_25844[(7)] = inst_25788);

(statearr_25844[(8)] = inst_25787__$1);

return statearr_25844;
})();
var statearr_25845_25865 = state_25823__$1;
(statearr_25845_25865[(2)] = null);

(statearr_25845_25865[(1)] = (2));


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
});})(c__24035__auto___25851,out))
;
return ((function (switch__23945__auto__,c__24035__auto___25851,out){
return (function() {
var cljs$core$async$state_machine__23946__auto__ = null;
var cljs$core$async$state_machine__23946__auto____0 = (function (){
var statearr_25846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25846[(0)] = cljs$core$async$state_machine__23946__auto__);

(statearr_25846[(1)] = (1));

return statearr_25846;
});
var cljs$core$async$state_machine__23946__auto____1 = (function (state_25823){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_25823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e25847){if((e25847 instanceof Object)){
var ex__23949__auto__ = e25847;
var statearr_25848_25866 = state_25823;
(statearr_25848_25866[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25867 = state_25823;
state_25823 = G__25867;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$state_machine__23946__auto__ = function(state_25823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23946__auto____1.call(this,state_25823);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23946__auto____0;
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23946__auto____1;
return cljs$core$async$state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___25851,out))
})();
var state__24037__auto__ = (function (){var statearr_25849 = f__24036__auto__.call(null);
(statearr_25849[(6)] = c__24035__auto___25851);

return statearr_25849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___25851,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25869 = arguments.length;
switch (G__25869) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24035__auto___25939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24035__auto___25939,out){
return (function (){
var f__24036__auto__ = (function (){var switch__23945__auto__ = ((function (c__24035__auto___25939,out){
return (function (state_25911){
var state_val_25912 = (state_25911[(1)]);
if((state_val_25912 === (7))){
var inst_25907 = (state_25911[(2)]);
var state_25911__$1 = state_25911;
var statearr_25913_25940 = state_25911__$1;
(statearr_25913_25940[(2)] = inst_25907);

(statearr_25913_25940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (1))){
var inst_25870 = [];
var inst_25871 = inst_25870;
var inst_25872 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25911__$1 = (function (){var statearr_25914 = state_25911;
(statearr_25914[(7)] = inst_25871);

(statearr_25914[(8)] = inst_25872);

return statearr_25914;
})();
var statearr_25915_25941 = state_25911__$1;
(statearr_25915_25941[(2)] = null);

(statearr_25915_25941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (4))){
var inst_25875 = (state_25911[(9)]);
var inst_25875__$1 = (state_25911[(2)]);
var inst_25876 = (inst_25875__$1 == null);
var inst_25877 = cljs.core.not.call(null,inst_25876);
var state_25911__$1 = (function (){var statearr_25916 = state_25911;
(statearr_25916[(9)] = inst_25875__$1);

return statearr_25916;
})();
if(inst_25877){
var statearr_25917_25942 = state_25911__$1;
(statearr_25917_25942[(1)] = (5));

} else {
var statearr_25918_25943 = state_25911__$1;
(statearr_25918_25943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (15))){
var inst_25901 = (state_25911[(2)]);
var state_25911__$1 = state_25911;
var statearr_25919_25944 = state_25911__$1;
(statearr_25919_25944[(2)] = inst_25901);

(statearr_25919_25944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (13))){
var state_25911__$1 = state_25911;
var statearr_25920_25945 = state_25911__$1;
(statearr_25920_25945[(2)] = null);

(statearr_25920_25945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (6))){
var inst_25871 = (state_25911[(7)]);
var inst_25896 = inst_25871.length;
var inst_25897 = (inst_25896 > (0));
var state_25911__$1 = state_25911;
if(cljs.core.truth_(inst_25897)){
var statearr_25921_25946 = state_25911__$1;
(statearr_25921_25946[(1)] = (12));

} else {
var statearr_25922_25947 = state_25911__$1;
(statearr_25922_25947[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (3))){
var inst_25909 = (state_25911[(2)]);
var state_25911__$1 = state_25911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25911__$1,inst_25909);
} else {
if((state_val_25912 === (12))){
var inst_25871 = (state_25911[(7)]);
var inst_25899 = cljs.core.vec.call(null,inst_25871);
var state_25911__$1 = state_25911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25911__$1,(15),out,inst_25899);
} else {
if((state_val_25912 === (2))){
var state_25911__$1 = state_25911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25911__$1,(4),ch);
} else {
if((state_val_25912 === (11))){
var inst_25875 = (state_25911[(9)]);
var inst_25879 = (state_25911[(10)]);
var inst_25889 = (state_25911[(2)]);
var inst_25890 = [];
var inst_25891 = inst_25890.push(inst_25875);
var inst_25871 = inst_25890;
var inst_25872 = inst_25879;
var state_25911__$1 = (function (){var statearr_25923 = state_25911;
(statearr_25923[(7)] = inst_25871);

(statearr_25923[(8)] = inst_25872);

(statearr_25923[(11)] = inst_25889);

(statearr_25923[(12)] = inst_25891);

return statearr_25923;
})();
var statearr_25924_25948 = state_25911__$1;
(statearr_25924_25948[(2)] = null);

(statearr_25924_25948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (9))){
var inst_25871 = (state_25911[(7)]);
var inst_25887 = cljs.core.vec.call(null,inst_25871);
var state_25911__$1 = state_25911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25911__$1,(11),out,inst_25887);
} else {
if((state_val_25912 === (5))){
var inst_25875 = (state_25911[(9)]);
var inst_25872 = (state_25911[(8)]);
var inst_25879 = (state_25911[(10)]);
var inst_25879__$1 = f.call(null,inst_25875);
var inst_25880 = cljs.core._EQ_.call(null,inst_25879__$1,inst_25872);
var inst_25881 = cljs.core.keyword_identical_QMARK_.call(null,inst_25872,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25882 = ((inst_25880) || (inst_25881));
var state_25911__$1 = (function (){var statearr_25925 = state_25911;
(statearr_25925[(10)] = inst_25879__$1);

return statearr_25925;
})();
if(cljs.core.truth_(inst_25882)){
var statearr_25926_25949 = state_25911__$1;
(statearr_25926_25949[(1)] = (8));

} else {
var statearr_25927_25950 = state_25911__$1;
(statearr_25927_25950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (14))){
var inst_25904 = (state_25911[(2)]);
var inst_25905 = cljs.core.async.close_BANG_.call(null,out);
var state_25911__$1 = (function (){var statearr_25929 = state_25911;
(statearr_25929[(13)] = inst_25904);

return statearr_25929;
})();
var statearr_25930_25951 = state_25911__$1;
(statearr_25930_25951[(2)] = inst_25905);

(statearr_25930_25951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (10))){
var inst_25894 = (state_25911[(2)]);
var state_25911__$1 = state_25911;
var statearr_25931_25952 = state_25911__$1;
(statearr_25931_25952[(2)] = inst_25894);

(statearr_25931_25952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (8))){
var inst_25875 = (state_25911[(9)]);
var inst_25871 = (state_25911[(7)]);
var inst_25879 = (state_25911[(10)]);
var inst_25884 = inst_25871.push(inst_25875);
var tmp25928 = inst_25871;
var inst_25871__$1 = tmp25928;
var inst_25872 = inst_25879;
var state_25911__$1 = (function (){var statearr_25932 = state_25911;
(statearr_25932[(7)] = inst_25871__$1);

(statearr_25932[(8)] = inst_25872);

(statearr_25932[(14)] = inst_25884);

return statearr_25932;
})();
var statearr_25933_25953 = state_25911__$1;
(statearr_25933_25953[(2)] = null);

(statearr_25933_25953[(1)] = (2));


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
});})(c__24035__auto___25939,out))
;
return ((function (switch__23945__auto__,c__24035__auto___25939,out){
return (function() {
var cljs$core$async$state_machine__23946__auto__ = null;
var cljs$core$async$state_machine__23946__auto____0 = (function (){
var statearr_25934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25934[(0)] = cljs$core$async$state_machine__23946__auto__);

(statearr_25934[(1)] = (1));

return statearr_25934;
});
var cljs$core$async$state_machine__23946__auto____1 = (function (state_25911){
while(true){
var ret_value__23947__auto__ = (function (){try{while(true){
var result__23948__auto__ = switch__23945__auto__.call(null,state_25911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23948__auto__;
}
break;
}
}catch (e25935){if((e25935 instanceof Object)){
var ex__23949__auto__ = e25935;
var statearr_25936_25954 = state_25911;
(statearr_25936_25954[(5)] = ex__23949__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25955 = state_25911;
state_25911 = G__25955;
continue;
} else {
return ret_value__23947__auto__;
}
break;
}
});
cljs$core$async$state_machine__23946__auto__ = function(state_25911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23946__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23946__auto____1.call(this,state_25911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23946__auto____0;
cljs$core$async$state_machine__23946__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23946__auto____1;
return cljs$core$async$state_machine__23946__auto__;
})()
;})(switch__23945__auto__,c__24035__auto___25939,out))
})();
var state__24037__auto__ = (function (){var statearr_25937 = f__24036__auto__.call(null);
(statearr_25937[(6)] = c__24035__auto___25939);

return statearr_25937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24037__auto__);
});})(c__24035__auto___25939,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1527040034211
