(ns workout-tracker.utils.dom)

(defn by-selector [selector]
  "Returns a single element that matches `selector`."
  (.querySelector js/document selector))

(defn by-selector-all [selector]
  "Returns all elements that match `selector`."
  (array-seq (.querySelectorAll js/document selector)))

(defn toggle-class! [element class]
  "Adds a `class` to `element` if it doesn't have it; else removes it."
  (.toggle (.-classList element) class))

(defn listen! [element event-type listener]
  "Adds a `listener` for the `event-type` on `element`.
   `event-type` should be a keyword."
  (.addEventListener element (name event-type) listener))

(defn listen-all! [elements event-type listener]
  "Adds a `listener` for the `event-type` on each `element`.
   `event-type` should be a keyword."
  (doseq [element elements] (listen! element event-type listener)))

(defn hide-element [element]
  (.add (.-classList element) "hidden"))
(defn unhide-element [element]
  (.remove (.-classList element) "hidden"))

(defn apply-filter [predicate els]
  "Hide elements in `els` that fail when `predicate` applied, else show."
  (prn (str "There are " (count els) " in apply-filter"))
  (doseq [el els]
      (if (predicate el)
        (unhide-element el)
        (hide-element el))))
